const readline = require(`readline`)
let Robot = require(`./lib/Robot`)

let robot = new Robot()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.clear()
console.log("Selamat datang di toy robot! cobalah input command berikut: (PLACE, LEFT, RIGHT, MOVE, REPORT, CLOSE)");


rl.on('line', (text) => {
    if (!text) {
        return
    }
    input = text.split(' ')[0].toUpperCase()
    console.clear()

    switch (input) {
        case "PLACE":
            command = text.split(' ').slice(1)
            if (command.length != 0) {
                command = command.join(`,`).split(`,`)
                if (command.length < 3) {
                    console.clear()
                    console.log(`Please provide proper PLACE command`);
                } else {
                    robot.placeRobot(command[0], command[1], command[2].toUpperCase())
                }
            }

            break;

        case "REPORT":
            console.log(robot.report());

            break;

        case "MOVE":
            robot.move()
            break;

        case "LEFT":
            robot.changeDirection(input)
            break;

        case "RIGHT":
            robot.changeDirection(input)
            break;

        case "CLOSE":
            console.log(`BYE!`);
            setTimeout(() => {
                console.clear()
                rl.close()
            }, 1000);
            
            break;

        default:
            console.log(`try these command (PLACE, LEFT, RIGHT, MOVE, REPORT, CLOSE)`);

            break;
    }

})