class YouTility {
  fs = require("fs");
  ytdl = require("ytdl-core");
  path = require("path");
  os = require("os");
  outputPath = "";

  download(videoUrl, quality, filter) {
    this.ytdl(videoUrl, { quality: quality, filter: filter })
      .pipe(this.fs.createWriteStream(this.outputPath))
      .on("finish", () => {
        console.log("Video downloaded successfully!");
      })
      .on("error", (e) => {
        console.error("Error downloading video: " + e);
        if (this.fs.existsSync(this.outputPath)) {
          this.fs.unlinkSync(this.outputPath);
          console.log("Corrupted file deleted");
        }
      });
  }

  getVideoOrAudio(videoUrl, quality, filter, outputPath, format, videoOrAudio) {
    const mainFolder = this.path.join(this.os.homedir(), "YouTility");

    if (!this.fs.existsSync(mainFolder)) {
      this.fs.mkdirSync(mainFolder, { recursive: true });
    }

    let downloadsDir = "";
    if (videoOrAudio === "1") {
      downloadsDir = this.path.join(mainFolder, "Videos");
      if (!this.fs.existsSync(downloadsDir)) {
        this.fs.mkdirSync(downloadsDir, { recursive: true });
      }
    }
    if (videoOrAudio === "2") {
      downloadsDir = this.path.join(mainFolder, "Audios");
      if (!this.fs.existsSync(downloadsDir)) {
        this.fs.mkdirSync(downloadsDir, { recursive: true });
      }
    }

    this.outputPath = this.path.join(downloadsDir, outputPath + "." + format);

    this.download(videoUrl, quality, filter);
  }
}

module.exports = YouTility;
