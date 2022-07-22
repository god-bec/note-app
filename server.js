// const express = require("express");
// const app = express();
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });
// app.use(express.static(__dirname));
// app.listen(3000, function(){
//     console.log("server is running on localhost3000")
// });
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(index);
  }