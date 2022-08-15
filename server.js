let port = process.env.PORT;
if(req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write(index);
}

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.listen(port);
if (port == null || port == "") {
  port = 8000;
  }
const express = require("express");
const app = express();


// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname,"index.html");
});

