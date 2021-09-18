/* Index.js exporta una función  mdlinks.js

/*const mdLinks = () => {
} */
const {getLinks} = require('./functions')
const fetch = require('node-fetch');
const pathTest = process.argv[2];



/* const getStatus = (pathPrueba) =>{
  const arrayWithLinks = getLinks(pathPrueba) 
let container = [];
container = arrayWithLinks.map((item)=> {
     // console.log(item.href, 128)
let resultFetch = fetch(item.href)
      .then(res =>{
          if ( res.status >= 200 && res.status < 301){
          return ({'href' : res.url,'Text':item.text, 'file': item.file, 'status': res.status, 'ok': res.statusText, /*'texto': res.ok */ //})
       //   }else{
       //  return ({'href' : res.url,'Text':item.text, 'file': item.file, /*'FAILED': res.status,'ok': res.statusText, 'texto': res.ok */})
        /*   }
      }).then(data =>console.log(data))
      .catch(error =>
          ({'href' : item.href,'Text':item.text, 'file': item.file, 'FAILED2': error})
      )
      return resultFetch;
      })
//console.log(container,141)
return (container)
}

getStatus(pathTest) */ 
/* .then(data =>console.log(data))
.catch(error => console.log(error))  */



 




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