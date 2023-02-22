const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const adminController = require("./controllers/adminController");

app.get("/", adminController.indexopen);

app.listen(port, hostname, () => {
  console.log("server çalısıyor http://" + hostname + ":" + port + "/");
});
