
const {mdLinks} = require('./mdLinks.js');
const chalk = require('chalk');
const pathTest = process.argv[2]
//const pathTest2 = process.argv[3]
const prueba2 =
[
    {
      href: 'https://curriculum.laboratoria.la/',
      text: 'Laboratoria Curriculum',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://www.googlee.com/',
      text: 'Google',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 'No status',
      ok: 'FAIL'
    },
    {
      href: 'https://www.youube.come',
      text: 'Youtube',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 'No status',
      ok: 'FAIL'
    },
    {
      href: 'https://http.cat/3050',
      text: 'Probando con 404',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://developer.mozilla.org/en-US/',
      text: 'Funciones — bloques de código reutilizables - MDN',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
      text: 'Promise - MDN',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://www.freecodecamp.org/',
      text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://http.cat/4040',
      text: 'Probando con 404',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://twitter.con',
      text: 'Twitter',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
      status: 'No status',
      ok: 'FAIL'
    },
    {
      href: 'https://www.freecodecamp.org/news/',
      text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://http.cat/4040',
      text: 'Probando con 404',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://github.com/FabianBravoA/2018-1-TallerPromesasDirFilesJest',
      text: 'Taller de Promesa',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
      status: 200,
      ok: 'OK'
    }
  ] 

//console.log(chalk.green(pathTest))
// -- validate
/*  const capturateValidate = (data)=> {
    data.forEach((item)=>{
       // console.log( item.href, 13)
       // console.log(`${chalk.magenta(item.file)} ${item.href} ${chalk.green(item.ok)} ${chalk.yellowBright.bold(item.status)} ${item.text}`, 14)
        return (`${chalk.magenta(item.file)} ${item.href} ${chalk.green(item.ok)} ${chalk.yellowBright.bold(item.status)} ${item.text}`)
        //console.log(getValidate, 12)
    })
    
}  */
//capturateValidate(pathTest)



// capturando --stats
const capturateStats = (data)=> {
    const onlyLinks = data.map((item)=>{
        return item.href
    })
        const uniqueLinks = Array.from(new Set(onlyLinks))
        const allLink =  data.length;
        const stats = `Total: ${allLink}\nUnique: ${uniqueLinks.length}`;
        //console.log(stats, 116)
        return stats
}

//capturateStats(pathTest)
  

const capturateStatsValidate = (data)=> {
    const onlyLinks = data.map((item)=>{
        return item.href
    })
    const uniqueLinks = Array.from(new Set(onlyLinks))
    const allLink =  data.length;
    const broquenLinks = data.filter(link => {
        if( link.status >= 400 || link.status == 'No status'){
        // console.log(link.href,49)
        return link.href
        }
    })
    const statsValidate = `Total: ${allLink}\nUnique: ${uniqueLinks.length}\nBroquen: ${broquenLinks.length}`;
       // console.log(statsValidate, 116)
return statsValidate
}
//capturateStatsValidate(prueba2)

module.exports ={
    capturateStatsValidate,
    capturateStats,
   // capturateValidate
}