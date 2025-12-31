const http = require("http");
import express from "express";
import path from "path";

http.createServer((req, res) => {
  res.end("Threatnest is live");
}).listen(process.env.PORT || 3000);

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

import supportRoutes from "./routes/support.js";

app.use(express.json());
app.use("/api", supportRoutes);


app.listen(process.env.PORT || 3000);
