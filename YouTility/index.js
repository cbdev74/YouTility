class YouTility {
  fs = require("fs");
  ytdl = require("ytdl-core");
  videoID = Math.random().toString(36).substring(7);
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

  getVideoOrAudio(videoUrl, quality, filter, format) {
    this.outputPath = `./downloads/${this.videoID}.${format}`;
    this.download(videoUrl, quality, filter);
  }
}

module.exports = YouTility;
