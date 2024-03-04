#!/usr/bin/env node
const prompt = require("prompt-sync")();
const YouTility = require("./YouTility");

const youTility = new YouTility();
const videoOrAudio = prompt(
  "Do you want to download a video (1) or audio (2)? "
);
const fileUrl = prompt("Enter the file URL: ");
const fileName = prompt("Enter the file name: ");
const fileFormat = prompt("Enter the file format: ");

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
