/**
 * Rules for the CV a careers applicant can attach. Used by the browser and the
 * server so they can't drift apart. The file's bytes decide its type: a name or
 * browser-reported type can say anything. No imports, so tests can load it directly.
 */

export const CV_MAX_BYTES = 5 * 1024 * 1024;
export const CV_MAX_BASE64_LENGTH = Math.ceil(CV_MAX_BYTES / 3) * 4;
export const CV_ACCEPT =
  ".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export type CvKind = "pdf" | "docx";

function latin1(bytes: Uint8Array) {
  return new TextDecoder("latin1").decode(bytes);
}

/** PDF or macro-free Word document; anything else is rejected. */
export function detectCvKind(bytes: Uint8Array): CvKind | null {
  if (latin1(bytes.subarray(0, 1024)).includes("%PDF-")) return "pdf";
  const isZip = bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04;
  if (!isZip) return null;
  // File names inside a zip are stored as plain text, even when the contents are compressed.
  const text = latin1(bytes);
  return text.includes("word/document.xml") && !text.includes("vbaProject.bin") ? "docx" : null;
}

/** Null when the text isn't valid base64. */
export function base64ToBytes(base64: string) {
  try {
    return Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
  } catch {
    return null;
  }
}

export function bytesToBase64(bytes: Uint8Array) {
  const chunks: string[] = [];
  for (let i = 0; i < bytes.length; i += 0x8000) {
    chunks.push(String.fromCharCode(...bytes.subarray(i, i + 0x8000)));
  }
  return btoa(chunks.join(""));
}

/** Built from checked values only, so the applicant's own file name never reaches the inbox. */
export function cvAttachmentName(firstName: string, lastName: string, kind: CvKind) {
  const name = `${firstName} ${lastName}`
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  return `CV${name ? ` - ${name}` : ""}.${kind}`;
}
