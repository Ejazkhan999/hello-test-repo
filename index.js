const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.status(200).json({
    msg: "hello world !",
    success: true,
  });
});

app.use("/test", (req, res) => {
  res.status(200).json({
    msg: "hello world testing !",
    success: true,
  });
});

app.listen(port, (err) => {
  if (err) console.log("error is ", err);
  console.log("server is listning on 3000 port for Production Environment !");
});
