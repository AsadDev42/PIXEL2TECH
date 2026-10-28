import { test } from "node:test";
import assert from "node:assert/strict";
import { videoId, videoIdFromHash, videoSharePath } from "../src/lib/video-sharing.ts";

const first = {
  src: "https://media.example.com/first.mp4",
  poster: "/portfolio/example/first.jpg",
};
const second = {
  src: "https://media.example.com/second.mp4",
  poster: "/portfolio/example/second.jpg",
};

test("each video has a different website link, without sharing the MP4", () => {
  const link = videoSharePath("/portfolio/example", first);
  assert.notEqual(link, videoSharePath("/portfolio/example", second));
  assert.equal(link, `/portfolio/example#video=${videoId(first)}`);
  assert(!link.includes(".mp4"));
  assert(!link.includes("media.example.com"));
});

test("shared identity survives playlist reordering and temporary media tokens", () => {
  const id = videoId(first);
  const reordered = [second, first];
  assert.equal(reordered.findIndex((video) => videoId(video) === id), 1);
  assert.equal(videoId({ ...first, src: first.src + "?token=temporary" }), id);
  assert.equal(videoId({ src: first.src + "?token=temporary" }), videoId({ src: first.src }));
});

test("deep links select only valid video identifiers", () => {
  assert.equal(videoIdFromHash(`#video=${videoId(first)}`), videoId(first));
  assert.equal(videoIdFromHash("#other-section"), null);
  assert.equal(videoIdFromHash("#video="), null);
  assert.equal(videoIdFromHash("#video=https://untrusted.example/file.mp4"), null);
});

test("embedded videos have distinct stable links", () => {
  const video = { src: "", embed: "https://drive.google.com/file/d/first/preview" };
  const other = { src: "", embed: "https://drive.google.com/file/d/second/preview" };
  assert.notEqual(videoId(video), videoId(other));
  assert.equal(
    videoIdFromHash(videoSharePath("/portfolio/long-form", video).split("#")[1]),
    videoId(video),
  );
});
