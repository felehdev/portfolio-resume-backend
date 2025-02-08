import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World with ts-node and nodemon 3!");
});

app.listen(port, () => {
  console.log(`Good ${port}`);
});
