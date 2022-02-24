const inquirer = require('inquirer');
const colors = require('colors');
const playerData = require('../data/player-data');
const Choices = require('inquirer/lib/objects/choices');


class Set {
    addPlayer = async () => {
        console.log(`Total players: ${playerData.length}`);
        playerData.forEach((value, index) => console.log(index, value))
        const newPlayer = await inquirer.prompt([
            {
                type: "input",
                name: "player",
                message: "Enter new player name:".cyan
            },
            {
                type: "list",
                name: "game",
                message: "Select a game for the player:".blue,
                choices: ["Football", "Rugby", "Boxing", "Basketball"]
            }
        ])
        console.log('----------------------------------------------------');
        playerData.push(newPlayer)
        playerData.forEach((value, index) => console.log(index, value))
    }

    removePlayer = async () => {
        console.log(`Total players: ${playerData.length}`);
        playerData.forEach((value, index) => console.log(index, value))
        const indexNum = await inquirer.prompt([
            {
                type: "number",
                name: "player",
                message: "Enter the index of the player you wish to remove:".cyan
            }
        ])
        console.log('----------------------------------------------------');
        playerData.splice(indexNum.player, 1)
        playerData.forEach((value, index) => console.log(index, value))
    }
}

module.exports = Set