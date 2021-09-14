/* Index.js exporta una función  mdlinks.js

/*const mdLinks = () => {
} */


const fetch = require('node-fetch');
//const fetchModules = require('node-fetch')

const getLinks = (filePath) => {
    
  let links = [];
  fileIsMd(filePath).forEach((file)=>{
  const content = fs.readFileSync(file, 'utf-8');
  const regexMdLinks =  /\[([^\[]+)\](\(http.*\))/gm;
  const matches = content.match(regexMdLinks);
 
  if(matches === null){
      return " this file does not have any links";
  }else{
      const singleMatch = /\[([^\[]+)\]\((.*)\)/;
      for (let i = 0; i < matches.length; i++) {
      let text = singleMatch.exec(matches[i]);
      links.push({'file': file, 'text': text[1], 'href': text[2]});
      }
  return links;
  }
})
return links;
}

//const pruebaLinks = getLinks(process.argv[2])
/* console.log(getLinks(pathTest));
getLinks(pathTest) */ 

  fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text))  
    


const getStatus = (prueba) =>{
  const contenedor = prueba.map((item)=>{
  fetch(item.href)
  .then(response => response.json())
 .then(res => res())          // convert to plain text
  .then(res =>{  // then log it out

    if ( res.ok > 200 || res.ok < 300){
      console.log( 'success')
      }else{
      console.log( "Not successfull")
      }
}).then(data => console.log(data))
.catch(error => console.log( err.message))
})
return contenedor
}

getStatus (links)


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