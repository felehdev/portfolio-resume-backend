import express from "express";

const app = express();
const port = 3000;
let b = 1;
b += 1;
console.log(b);
app.get("/", (req, res) => {
  res.send("Hello World with swc and nodemon!");
});

app.listen(port, () => {
  console.log(`Very Good ${port}`);
});
