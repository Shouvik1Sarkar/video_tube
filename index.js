import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is home");
});
app.get("/shouvik", (req, res) => {
  res.send("This is Shouvik's home");
});

app.listen(port, () => console.log("This app is running at port ", port));
