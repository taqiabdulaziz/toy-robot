let Robot = require(`../lib/Robot`)
let robot = new Robot()

let chai = require(`chai`)
let expect = chai.expect

describe(`Test my robot movement`, () => {

    beforeEach(() => {
        robot = new Robot()
    })
    //1
    it(`Expected output: 0,1,NORTH`, () => {
        robot.placeRobot(0, 0, `NORTH`)
        robot.move()
        expect(robot.report()).to.equal(`0,1,NORTH`)
    })

    //2
    it(`Expected output: 0,0,WEST`, () => {
        robot.placeRobot(0, 0, `NORTH`)
        robot.changeDirection("LEFT")
        expect(robot.report()).to.equal(`0,0,WEST`)
    })

    //3.
    it(`Expected output: 3,3,NORTH`, () => {
        robot.placeRobot(1, 2, `EAST`)
        robot.move()
        robot.move()
        robot.changeDirection("LEFT")
        robot.move()
        expect(robot.report()).to.equal(`3,3,NORTH`)
    })

    /* ADDITIONAL TEST */

    it(`Expect initial place: 0,0,NORTH`, () => {
        robot.placeRobot(0, 0, `NORTH`)
        expect(robot.report()).to.equal(`0,0,NORTH`)
    })

    it("Expect robot cant move", () => {
        robot.move()
        expect(robot.report()).to.equal(`undefined,undefined,undefined`)
    })

    it(`Expected output: 0,0,NORTH`, () => {
        robot.placeRobot(0,0,`NORTH`)
        robot.move()
        expect(robot.report()).to.equal("0,1,NORTH")
    })

    it(`Expected output: 0,5,NORTH`, () => {
        robot.placeRobot(0, 0, `NORTH`)
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        expect(robot.report()).to.equal(`0,5,NORTH`)
    })

    it(`Expected output: 0,0,WEST`, () => {
        robot.placeRobot(5, 0, `WEST`)
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        expect(robot.report()).to.equal(`0,0,WEST`)
    })

    it(`Expected output: `, () => {
        robot.placeRobot(0, 0, `EAST`)
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        robot.move()
        expect(robot.report()).to.equal(`5,0,EAST`)
    })

})

