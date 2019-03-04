class Robot {
    constructor() {
        this._place = {
            x: undefined,
            y: undefined
        }
        this._face = undefined
        this._xMax = 5
        this._yMax = 5
    }

    move() {

    }

    changeDirection() {

    }

    placeRobot(x, y, f) {
        x ? this.setX = x : console.log(`Invalid PLACE command`);
    }

    report() {
        return `${this.place.x},${this.place.y},${this.place.face}`
    }

    /* GETTER SETTER */
    set setX(x) {
        this._place.x = x
    }
}

var robot = new Robot()
robot.placeRobot(2)
console.log(robot)
