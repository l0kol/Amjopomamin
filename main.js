const express = require('express');
const http=require('http');
const process = require('process');
const log = console.log;
const app = express();
const path = require('path');
const PORT = 8080;

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'templates', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/preveri', function(req, res) {
    res.sendFile(path.join(__dirname,'templates', 'preveri.html'));
    //__dirname : It will resolve to your project folder.
});

app.post('/preveriklic', function(req, res) {
  console.log('Data:', req.body);
  res.send({"message":"ok"})

});

app.post('/dodaj', (req, res) => {
    //Send an email here but currently dummy email
    console.log('Data:', req.body);
   

    res.send({"message":"Uspešno"})
    login()
});


app.listen(PORT, () => log('Server is starting on PORT,', 8080));


function login(){
    user="user"
    password="password"
    var postData = JSON.stringify({"jsonrpc": "1.0", "id": "curltest", "method": "getblockchaininfo", "params": []})
    var options = {
        hostname: 'localhost',
        port: 18332,
        path: '/',
        method: 'POST',
        headers: {"Authorization": "Basic " +Buffer.from( user + ":" + password ).toString('base64')}
      }  
      var req = http.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
      
        res.on('data', (chunk) => {   
            token=JSON.parse(chunk);
            console.log(token)
        });
      });
    
    req.write(postData);
    req.end()
    }