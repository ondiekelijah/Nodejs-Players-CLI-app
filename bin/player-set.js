const { program } = require('commander');
const Set = require('../commands/Set')

const set = new Set()

program
    .command('add')
    .description('add player to player set')
    .action(set.addPlayer)


program
    .command('remove')
    .description('remove player to player set')
    .action(set.removePlayer)



program.parse(process.argv)