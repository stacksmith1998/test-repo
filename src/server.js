const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send({ status: "ok" });
});

app.get("/check",(req,res)=>{})

app.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
