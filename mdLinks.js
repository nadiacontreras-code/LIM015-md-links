/* Index.js exporta una función  mdlinks.js

/*const mdLinks = () => {
} */
//import fetch from './node-fetch/@types/index.js';
//import fetch from 'node-fetch';
//import "./node-fetch.cjs"; //node_modules\node-fetch\src\index.js
/* const fs = require('fs');module "c:/Users/nadia/Documents/GitHub/MDLink/LIM015-md-links2/node_modules/node-fetch/@types/index
const path = require('path');  */

//import getLinks from '../LIM015-md-links2/functions';
const fetch = require('node-fetch')
const getLinks = require('functions')


pathTest = process.argv[2];


//import fetch from 'node-fetch';

 fetch("https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce/1")
  //.then(response => response.json())
 // .then(res => res())          // convert to plain text
  .then(text => console.log(text))  // then log it out
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err.message))
 // fetch('/users')
  // .then(res => res.json()) // comment this out for now 

 
fetch("https://swapi.co/api/people/3")
  .then(promesaFetch => promesaFetch.json())
  .then(contenido => console.log(contenido));

/*   const getStatus = (path) => {
   getLinks(path).map((item)=>{
    console.log(item.link,22);
 fetch(item.link)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err.message))
  })
  //console.log(prueba,25);
}
 
console.log(getStatus(pathTest))
getStatus(pathTest) */

/* const mdLinks2 = (path0) => {
    const promise = new Promise((resolve, reject) => {
      if (pathExistFun(path0)){
        return getLinks(fileIsMd(pathIsAbsolute(path0))) // == true
      const links = getLinks(path0);
      resolve(links);
      }else{
          reject (`ERROR:${path0} -DOES NOT EXIST`)
      }
         
       
       
    });
    return promise;
}  */
 /*  console.log(mdLinks2(pathTest));
  mdLinks2(pathTest); */

  
 /* export default {
   getStatus
 } */