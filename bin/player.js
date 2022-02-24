#!/usr/bin/env node

const { program } = require('commander');

program
    .version('1.0.0')
    .command('show',"show all players information")
    .command('set',"add or remove a player from player set")
    .parse(process.argv)

// console.log("Player hello");