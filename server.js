const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
// const { Sequelize } = require("sequelize");
const Sequelize = require("sequelize").Sequelize;
const dbConfig = require("./dbConfig.js");
const fileModel = require("./model/File.js");

const sequelize = new Sequelize(dbConfig);

sequelize
  .authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.sqlMessage));

const File = fileModel(sequelize);

sequelize
  .sync()
  .then(() => console.log("Database Sync"))
  .catch((err) => console.log("Sync Failed"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
const upload = multer({ dest: "uploads" });

app.get("/", (req, res) => {
  res.render("index", { fileLink: null });
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };

  if (req.body.password != null && req.body.password != "") {
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }

  let file = await File.create(fileData);
  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
});

app.get("/file/:id", async (req, res) => {
  res.render("download", { fileId: req.params.id, error: "" });
});

app.post("/download", async (req, res) => {
  const { id, password } = req.body;
  try {
    const file = await File.findByPk(id);
    if (file.password == null) {
      res.download(file.path, file.originalName);
    } else {
      if (password != null && password != "") {
        if (await bcrypt.compare(password, file.password)) {
          res.download(file.path, file.originalName);
        } else {
          res.render("download", { fileId: id, error: "error" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  return;
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = { sequelize };
