const fetch = require('node-fetch')
const { getLinks} = require('./functions')

const pathTest = process.argv[2];
const pathTestTwo = process.argv[3];

const arrayWithLinks = getLinks(pathTest)
//console.log(arrayWithLinks)
/* 
const captureValidate = (path) => {
    const objStats  = path.map((item)=>{
        fetch( item.href)
        .then((res) =>{
         if(pathTestTwo === '--validate'){
          return ({'file': item.file,'href' : res.url,'status': res.statusText, 'status2': res.status,'Text':item.text})
             //return (item.file, item.href, res.status , res.ok, item.text)
         }
        
        
    }).catch((err) =>console.log(err.message))
   
  })
  return objStats
} */
//  captureValidate(arrayWithLinks)

const captureByDefault = (path) => {
    if (pathTestTwo === undefined){
    return getLinks(path)
    }
}

//console.log(captureByDefault(pathTest),36)
captureByDefault(pathTest)