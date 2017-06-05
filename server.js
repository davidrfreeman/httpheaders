"use strict";

// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

app.get("/api/httpheaders", (req, res) => {

  let ipAddress = req.ip;
  let software = req.headers['user-agent'];

  res.json({software: software, ip: ipAddress});

});



// listen for requests :)
app.listen(PORT, () => {
  console.log('Your app is listening on port', PORT);
});
