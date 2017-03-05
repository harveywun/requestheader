var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var primaryLang = req.headers["accept-language"].split(",")[0];
    
    var parseSoftwareArr = req.headers['user-agent'].match(/\(([^\)]+)\)/);
    
    res.send({ipaddress: req.headers['x-forwarded-for'], language: primaryLang, software: parseSoftwareArr[1]});
    //res.send("Length: " + parseSoftwareArr.length + "Text: " + parseSoftwareArr[1]);

});

/*
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
*/
app.listen(process.env.PORT);