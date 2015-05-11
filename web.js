var express = require('express');
var fs = require('fs');

var app = express();

app.use("/css", express.static(__dirname + '/css'));
app.use("/font-awesome", express.static(__dirname + '/font-awesome'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/ko", express.static(__dirname + '/ko'));
app.use("/en", express.static(__dirname + '/en'));
app.use("/less", express.static(__dirname + '/less'));

app.get('/', function(request, response) { var htmlBuffer = fs.readFileSync('ko/index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/ko', function(request, response) { var htmlBuffer = fs.readFileSync('ko/index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/en', function(request, response) { var htmlBuffer = fs.readFileSync('en/index.html', 'utf-8'); response.send(htmlBuffer); });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
