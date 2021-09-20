/*const mdLinks = () => {
} */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const{pathExistFun,  fileIsMd,  getLinks  } = require('./functions');


const getStatus = (pathLinks) =>{
  const arrayWithLinks = getLinks(pathLinks)
  let container = [];
    container = arrayWithLinks.map((item)=> {
      // console.log(item.href, 128)
        let resultFetch =  fetch(item.href)
        .then(res =>{
            if ( res.status >= 200 && res.status < 299){
            return ({'href' : res.url,'text':item.text, 'file': item.file, 'status': res.status, 'ok': res.statusText }) //'texto': res.ok 
            }else{
          return ({'href' : res.url,'text':item.text, 'file': item.file,'status': res.status, 'ok': 'FAIL' }) //ok': res.statusText, 'texto': res.ok 
            }
        })
        .catch(()=>{
            ({'href' : item.href,'text':item.text, 'file': item.file, 'status': 'No status', 'ok': 'FAIL'})
        })
    return resultFetch;
    })
  //console.log(container,29)
  return Promise.all(container)
  //return container
}
/* getStatus(pathTest)
console.log(getStatus(pathTest)) */

/* getStatus(pathTest)
.then(data =>console.log(data))
.catch(error => console.log(error))  
*/

const pathTest = process.argv[2]

//console.log(pathTest2, 42)

//options es un {prop(validate): valor(true/false) }

const mdLinks = (path0, options)=>{
  return new Promise((resolve, reject) => {
  if(pathExistFun(path0)){
    //console.log(`${path0}  exist`, 71)
    if(fileIsMd(path0).length > 0 ){
      //console.log(fileIsMd(path0), 73)
      if(getLinks(path0).length > 0){
          if (options == undefined || options.validate == false){
          resolve ( getLinks(path0))
          }else{
            resolve( getStatus(path0))

          }
      }else{
       // console.log(`${path0} does not have any links`, 78)
        return `${path0} does not have any links`
      }
    }else{
    //console.log( `${pathIsAbsolute(path0)} does not a file with md-extention`, 75)
     return `${path0} does not a file with md-extention`
    }
  }else{
    return `${path0} does not exist`
  }
})
};
 /* mdlinks(pathTest, {validate: false})
console.log(mdlinks(pathTest, {validate: false}),73) */

//mdlinks(pathTest, {validate: true})
//console.log(mdlinks(pathTest, {validate: true}),76) 

// mdlinks(pathTest)
//console.log(mdlinks(pathTest), 79) 

//mdlinks(pathTest, {validate: false}).then(data=>console.log(data, 82))


module.exports = {mdLinks, getStatus}




















 




