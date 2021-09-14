/*const mdLinks = require('../prueba/mdLinks'); */
/*function readfile (path, response) {
  fs.readFile(path, function (error,data){
  if (error){
response.writeHead(404);
response.writeHead('File not found');
  } else{
    response.writeHead(data);
  }
response.end();
});
}*/

/* module.exports =  {
 
 };
 */
 //import fetch from "node-fetch";
/*  const fs = require('fs');
 const path = require('path'); 

 const { getStatus } = require('./mdLinks.js') */

 const fetch   = require('node-fetch');
 
 app.get('/', function (req, res) {
     var url = 'https://api.darksky.net/forecast/<API KEY>/37.8267,-122.4233';
      
     fetch(url)
     .then(res => res.json())
     .then(data => {
         res.send({ data });
     })
     .catch(err => {
         res.send(err);
     });
 });







