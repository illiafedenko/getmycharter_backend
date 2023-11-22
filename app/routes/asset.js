const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/:type/:filename", (req, res) => {
  const parentDirPath = path.resolve(__dirname, "../assets/");
  const type = req.params.type;
  const filename = req.params.filename;
  const placeholderImage = `${parentDirPath}//avatars//avatar.png`;
  const total_path = `${parentDirPath}//${type}//${filename}`;
  if (fs.existsSync(total_path)) {
    res.sendFile(total_path);
  } else {
    res.sendFile(placeholderImage);
  }
});

module.exports = router;
