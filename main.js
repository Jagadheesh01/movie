import express from "express";

const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
