class Robot {
    constructor() {
        this.place = {
            x: undefined,
            y: undefined
        }
        this.currentDirection = undefined
    }

    move() {
        
    }

    changeDirection() {
        
    }

    placeRobot(x, y, f) {
        return true
    }

    report() {
        return `${this.place.x},${this.place.y},${this.place.currentDirection}`
    }
}

module.exports = Robot