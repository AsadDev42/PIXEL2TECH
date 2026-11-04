import { test } from "node:test";
import assert from "node:assert/strict";
import {
  CV_MAX_BASE64_LENGTH,
  CV_MAX_BYTES,
  base64ToBytes,
  bytesToBase64,
  cvAttachmentName,
  detectCvKind,
} from "../src/lib/cv-file.ts";

const encoder = new TextEncoder();
const zip = (...names) =>
  new Uint8Array([0x50, 0x4b, 0x03, 0x04, ...encoder.encode(names.join("\0"))]);

test("the file's bytes decide its type", () => {
  assert.equal(detectCvKind(encoder.encode("%PDF-1.7 rest of file")), "pdf");
  assert.equal(detectCvKind(zip("[Content_Types].xml", "word/document.xml")), "docx");
});

test("other files are rejected whatever they claim to be", () => {
  assert.equal(detectCvKind(encoder.encode("MZ this is a program")), null);
  assert.equal(detectCvKind(encoder.encode("<html><script></script></html>")), null);
  assert.equal(detectCvKind(zip("photos/one.jpg")), null, "a plain zip is not a Word file");
  assert.equal(detectCvKind(new Uint8Array()), null);
});

test("a Word file with macros is rejected", () => {
  assert.equal(detectCvKind(zip("word/document.xml", "word/vbaProject.bin")), null);
});

test("base64 survives a round trip, including large files", () => {
  const bytes = new Uint8Array(CV_MAX_BYTES).map((_, i) => i % 251);
  const base64 = bytesToBase64(bytes);
  assert.ok(base64.length <= CV_MAX_BASE64_LENGTH, "the largest allowed file fits the limit");
  assert.deepEqual(base64ToBytes(base64), bytes);
});

test("invalid base64 is reported, not thrown", () => {
  assert.equal(base64ToBytes("not base64!!"), null);
});

test("attachment names can't carry path or header characters", () => {
  assert.equal(cvAttachmentName("Jane", "Doe", "pdf"), "CV - Jane Doe.pdf");
  assert.equal(cvAttachmentName("../../etc", "a\r\nb.exe", "docx"), "CV - etc abexe.docx");
  assert.equal(cvAttachmentName("محمد", "علی", "pdf"), "CV - محمد علی.pdf");
  assert.equal(cvAttachmentName("!!", "??", "pdf"), "CV.pdf");
});
