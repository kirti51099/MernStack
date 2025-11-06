var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(req.app);
    res.send("Hello World!");
});

const PORT = 4000; // change from 3000 to 4000
app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});
