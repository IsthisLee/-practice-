const express = require("express");
const app = express();

const multer = require("multer");
const _storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: _storage });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", express.static("uploads"));

app.set("views", "./views_file");
app.set("view engine", "jade");

app.get("/upload", (req, res) => {
    res.render("upload");
});
app.post("/upload", upload.single("userfile"), (req, res, next) => {
    console.log(req.file);
    res.send("Uploaded : " + req.file);
});

app.listen(3000, () => {
    console.log("server open");
});
