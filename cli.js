#! / usr / bin / env nodo

const {mdLinks} = require('./mdLinks');
const chalk = require('chalk');
const { capturateStats, capturateStatsValidate} = require('./comandLine')
// Grab provided args.
const [, , ...args] = process.argv;



if(args.length === 1) {
    return mdLinks(args[0],  { validate: false })
    .then(data =>console.log(data))
    .catch(err => console.log(err))
}

if(args.length == 2){
    switch (args[1] ) {
        case '--validate':
            return mdLinks(args[0],  { validate: true })
            .then(data => data.forEach((item)=>{
            console.log(`${chalk.magenta(item.file)} ${item.href} ${chalk.green(item.ok)} ${chalk.yellowBright.bold(item.status)} ${item.text}`, 14)
            //return (`${chalk.magenta(item.file)} ${item.href} ${chalk.green(item.ok)} ${chalk.yellowBright.bold(item.status)} ${item.text}`)
            }))
            .catch((err) =>console.log(err))
        break;
        case '--stats':
            return mdLinks(args[0],  { validate:true})
            .then(data => console.log(capturateStats(data),36))
            .catch((err) =>console.log(err))
        break;
    }
}
if(args.length == 3) {
    if((args[1] =='--validate' && args[2] == '--stats')|| (args[1] =='--stats' && args[2] =='--validate')) {
        return mdLinks(args[0],  { validate:true})
        .then(data => console.log(capturateStatsValidate(data),44))
        .catch((err) =>console.log(err))
    }
}

//captureStats(pathTest)
