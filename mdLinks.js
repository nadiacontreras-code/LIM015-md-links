/* Index.js exporta una función  mdlinks.js

/*const mdLinks = () => {
} */
//import fetch from './node-fetch/@types/index.js';


/*  const fs = require('fs'); //"c:/Users/nadia/Documents/GitHub/MDLink/LIM015-md-links2/node_modules/node-fetch/@types/index
const path = require('path');   */

//import getLinks from '../LIM015-md-links2/functions';
//C:\Users\nadia\Documents\GitHub\MDLink\LIM015-md-links2\node_modules\node-fetch\src\index.js
//{import fetch from "./node-fetch/src/index.cjs";}

//const getLinks = require('functions')
const marked = require('marked');
const jsdom = require('jsdom');
const {  JSDOM} = jsdom;
const fetch = require('node-fetch');

const {  readFileMd,} = require('./path');
const {  searchFilesMd,} = require('./filesMd');


//VERIFICA SI archivo.md TIENE LINKS, Y GUARDANDO SUS PROPIEDADES {href, text, file} EN ARRAY
const linksOfFileMd = (myPath) => {
  const arrayFilesMd = searchFilesMd(myPath);
  const arrayLinksProperties = [];
  arrayFilesMd.forEach((fileMd) => {
    //Pasando texto md a html
    const tokens = marked.lexer(readFileMd(fileMd));
    const html = marked.parser(tokens);
    //RECREANDO DOM
    const dom = new JSDOM(html);
    const extractingLinks = dom.window.document.querySelectorAll('a');

    extractingLinks.forEach((link) => {
      arrayLinksProperties.push({
        href: link.href,
        text: link.text,
        file: fileMd,
      });
    });
  });
  return arrayLinksProperties;
};


//ALMACENANDO STATUS DE LINKS {href, text, file, status, statusText} EN ARRAY
const linksStatus = (arrayLinks) => {
  const arrayLinksStatus = [];
  arrayLinks.forEach((link) => {
    arrayLinksStatus.push(fetch(link.href)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return {
            file: link.file,
            href: link.href,
            text: link.text,
            status: response.status,
            statusText: 'ok',
          }
        } else {
          return {
            file: link.file,
            href: link.href,
            text: link.text,
            status: response.status,
            statusText: 'fail',
          }
        };
      })
      .catch(() => {
        return {
          file: link.file,
          href: link.href,
          text: link.text,
          status: 404,
          statusText: 'fail',
        }
      }));
  });
  return Promise.all(arrayLinksStatus);
}


module.exports = {
  linksOfFileMd,
  linksStatus,
};

pathTest = process.argv[2];


//import fetch from 'node-fetch';
fetch("https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce/1")
  //.then(response => response.json())
 // .then(res => res())          // convert to plain text
  .then(res =>{  // then log it out

  if(res.status === 200){
    console.log(  `${res.status} ${res.statusText}`)
  }else{
    console.log("fail")
  }
})

 /* fetch("https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce/1")
  //.then(response => response.json())
 // .then(res => res())          // convert to plain text
  .then(text => console.log(text))  // then log it out
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err.message))
 // fetch('/users')
  // .then(res => res.json()) // comment this out for now 
 */
 
/* fetch("https://swapi.co/api/people/3")
  .then(promesaFetch => promesaFetch.json())
  .then(contenido => console.log(contenido)); */

/*  const getStatus = (path) => {
   getLinks(path).map((item)=>{
    console.log(item.link,22);
 fetch(item.href)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err.message))
  })
  //console.log(prueba,25);
}
 
console.log(getStatus(pathTest))
getStatus(pathTest)  */

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