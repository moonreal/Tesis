const express = require("express");
const fileupload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const app = express();

app.use("/", express.static("public"));
app.use(fileupload());

app.post("/extract-text", (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
  }
  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
});

app.listen(3000, () => {
  console.log("Se escucha ya");
});
