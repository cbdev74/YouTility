#! /usr/bin/env node
const prompt = require("prompt-sync")();
const YouTility = require("./YouTility");

const youTility = new YouTility();
const videoOrAudio = prompt(
  "Do you want to download a video (1) or audio (2)? "
);
const videoUrl = prompt("Enter the video URL: ");

if (videoOrAudio === "1")
  youTility.getVideoOrAudio(videoUrl, "highestvideo", "videoandaudio", "mp4");

if (videoOrAudio === "2")
  youTility.getVideoOrAudio(videoUrl, "highestaudio", "audioonly", "mp3");

console.log("Downloading...");

// const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
