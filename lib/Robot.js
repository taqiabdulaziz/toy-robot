class Robot {
    constructor() {
        this._place = {
            x: undefined,
            y: undefined
        }
        this._face = undefined
        this._xMax = 5
        this._yMax = 5
        this._isPlaced = false
    }

    move() {
        switch (this.face) {
            case `NORTH`:
                this.y + 1 >= 0 && this.y + 1 <= this._yMax
                    ? this.y = this.y + 1
                    : console.log(`Invalid MOVE command`);

                break;

            case `EAST`:
                this.x + 1 >= 0 && this.x + 1 <= this._xMax
                    ? this.x = this.x + 1
                    : console.log(`Invalid MOVE command`);

                break;

            case `SOUTH`:
                this.y - 1 >= 0 && this.y - 1 <= this._yMax && this.y - 1 >= 0
                    ? this.y = this.y - 1
                    : console.log(`Invalid MOVE command`);


                break;

            case `WEST`:
                this.x - 1 >= 0 && this.x - 1 <= this._xMax && this.x - 1 >= 0
                    ? this.x = this.x - 1
                    : console.log(`Invalid MOVE command`);

                break;

        }
    }

    changeDirection(direction) {
        
    }

    placeRobot(x, y, f) {
        x != null ? this.x = x : console.log(`Invalid PLACE command`);
        y != null ? this.y = y : console.log(`Invalid PLACE command`);
        f != null ? this.face = f : console.log(`Invalid PLACE command`);

        if (this.x != undefined && this.y != undefined && this.face != undefined) {
            this.isPlaced = true
        }
    }

    report() {
        return `${this.x},${this.y},${this.face}`
    }

    /* SETTER */
    set x(x) {
        x > this._xMax
            ? console.log(`X cannot be more than ${this._xMax}`)
            : this._place.x = x
    }

    set y(y) {
        y > this._yMax
            ? console.log(` Y cannot be more than ${this._yMax}`)
            : this._place.y = y
    }

    set face(f) {
        if (f != `NORTH` && f != `EAST` && f != `SOUTH` && f != `WEST`) {
            console.log(`Please input correct robot facing`)
        } else {
            this._face = f
        }
    }

    set isPlaced(status) {
        this._isPlaced = status
    }

    /* GETTER */

    get x() {
        return this._place.x
    }

    get y() {
        return this._place.y
    }

    get face() {
        return this._face
    }

    get isPlaced() {
        return this._isPlaced
    }
}

module.exports = Robot