const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (err) => {
  if (err) console.log("error is ", err);
  console.log("server is listning on 3000 port ");
});
