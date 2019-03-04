const readline = require(`readline`)
let Robot = require(`./lib/Robot`)

let robot = new Robot()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.clear()
rl.setPrompt("Selamat datang di toy robot! cobalah input command berikut: (PLACE, LEFT, RIGHT, MOVE, REPORT, CLOSE) Tekan ENTER kalau mau bermain")
rl.prompt(true)

rl.on('line', (input) => {
    if (!input) {
        return
    }
    command = input.split(' ').slice(1)
    input = input.split(' ')[0].toUpperCase()
    console.clear()

    switch (input) {
        case "PLACE":
            console.log(command);
            
            break;

        case "REPORT":
            robot.report()
            break;
    }

})