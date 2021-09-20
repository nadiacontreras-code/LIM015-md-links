#! / usr / bin / env nodo

const mdLinks = require('./mdLinks');
// Grab provided args.
const [, , ...args] = process.argv;
console.log(`hola Mundo ${args}`,6)


const pathTest = process.argv[2];
const pathTestTwo = process.argv[3];

//const arrayWithLinks = getLinks(pathTest)
//console.log(arrayWithLinks)

const captureByDefault = (path) => {
    if (pathTestTwo === undefined){
    return getLinks(path)
    }else{
        return "comand is not correct"
    }
}
/* console.log(captureByDefault(pathTest),36)
captureByDefault(pathTest) */



const captureValidate = (path) => {
    const objStats  = path.map((item)=>{
        fetch( item.href)
        .then((res) =>{
         if(pathTestTwo === '--validate' ){
            // const pathRel = item.file
          return  `${item.file} ${res.url } ${res.statusText} ${res.status } ${item.text }`
          //({'href' : res.url,'Text':item.text, 'file': item.file, 'status': res.status, 'ok': res.statusText, /*'texto': res.ok */})
             //return (item.file, item.href, res.status , res.ok, item.text)
         }else{
             return 'something is wrong'
         }
        
        }).then(data => console.log(data))
    
    .catch((err) =>console.log(err))
   
  })
  return objStats
} 
 //captureValidate(arrayWithLinks)

 

