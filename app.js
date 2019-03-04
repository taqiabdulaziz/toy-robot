const readline = require(`readline`)
let Robot = require(`./lib/Robot`)

let robot = new Robot()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.clear()
rl.setPrompt("Selamat datang di toy robot! cobalah input command berikut: \nPLACE\nLEFT\nRIGHT\nMOVE\nREPORT\nCLOSE\nTekan ENTER kalau mau bermain")
rl.prompt(true)

rl.on('line', (input) => {
    input = input.split(' ')[0].toUpperCase()
    console.clear()

    switch (input) {
        case "PLACE":

            break;

        case value:

            break;
    }

})