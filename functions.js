const fetch = require('node-fetch');
 const fs = require('fs');
 const path = require('path');

//----****----****--- LEYENDO CONTENIDO COMO ARHCIVO-****----**---** //
const pathTest = process.argv[2];
//console.log(pathTest);

const pathExistFun = (pathPrueba) => {
    const pathExist2 = fs.existsSync(pathPrueba);
    return pathExist2;
}
//pathExistFun(pathTest)

const pathIsAbsolute = (pathPrueba) => {
    const pathIsAbsolute = path.isAbsolute(pathPrueba);
    if(pathIsAbsolute){
        return pathPrueba
    }else{
        return pathResolveAbsolute(pathPrueba);
    }
}
//pathResolveAbsolute(pathTest)

const pathResolveAbsolute = (pathPrueba) => {
    const pathToAbs = path.resolve(pathPrueba); 
    return pathToAbs;
}
//pathResolveAbsolute(pathTest)

const listOfFiles = (pathPrueba) => {
    const directoryContent = fs.readdirSync(pathPrueba)
    const containerFiles = directoryContent.map(file => {
        if(path.extname(file) == ''){
            const pathPrueba2 = path.resolve(`${pathPrueba}/${file}`)
            return listOfFiles(pathPrueba2)
        }else{
            return pathIsAbsolute(path.resolve(`${pathPrueba}/${file}`));
        }
    })
    const joiningArrays = (containerFiles)=> {
        return containerFiles.reduce((acc, val) => Array.isArray(val) ? acc.concat(joiningArrays(val)) : acc.concat(val), []);
    }
  //console.log(joiningArrays(containerFiles))
return joiningArrays(containerFiles);
}
//listOfFiles(pathTest)


const pathIsFile = (pathPrueba) => {
    const readFile = fs.statSync(pathPrueba)
    //console.log(readFile.isFile())
    if(readFile.isFile()){
        return pathIsAbsolute(pathPrueba).split(',')
    }else{
        return listOfFiles(pathIsAbsolute(pathPrueba))
    }
}
/*  console.log(pathIsFile(pathTest) );
pathIsFile(pathTest) 
 */
const fileIsMd= (pathPrueba)=>{
    const containerMd =[]
    pathIsFile(pathPrueba).filter((item)=>{
        if(path.extname(item) === '.md'){
            const fileDirMd =item
            containerMd.push(fileDirMd)
        }else{
            return `${item} is not md extention`
        }
    })
return containerMd
}

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
        links.push({ 'href': text[2],'text': text[1],'file': file});
        }
    return links;
    }
})
return links;
}
//console.log(getLinks(pathTest),107);



module.exports={
    pathExistFun,
    pathIsAbsolute,
    pathResolveAbsolute,
    pathIsFile,
    listOfFiles,
    fileIsMd,
    getLinks,
}


