#!/usr/bin/env node
const prompt = require("prompt-sync")();
const YouTility = require("./YouTility");

const youTility = new YouTility();
const videoOrAudio = prompt(
  "Do you want to download a video (1) or audio (2)? "
);
const fileUrl = prompt("Enter the file URL: ");

if (!fileUrl) {
  console.log("Please enter a valid URL");
  return;
}

let fileName =
  prompt("Enter the file name (default random): ") ??
  Math.random().toString(36).substring(7);

fileName === ""
  ? (fileName = Math.random().toString(36).substring(7))
  : fileName;

let fileFormat = prompt(
  `Enter the file format (default ${videoOrAudio === "1" ? "mp4" : "m4a"}): `
);

videoOrAudio === "1" ? (fileFormat = "mp4") : (fileFormat = "m4a");

if (videoOrAudio === "1")
  youTility.getVideoOrAudio(
    fileUrl,
    "highestvideo",
    "videoandaudio",
    `./${fileName}`,
    fileFormat,
    videoOrAudio
  );

if (videoOrAudio === "2")
  youTility.getVideoOrAudio(
    fileUrl,
    "highestaudio",
    "audioonly",
    `./${fileName}`,
    fileFormat,
    videoOrAudio
  );

console.log("Downloading...");

// const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
