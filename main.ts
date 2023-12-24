basic.showIcon(IconNames.Yes)
basic.pause(500)
pins.servoWritePin(AnalogPin.P12, 90)
basic.pause(500)
pins.servoWritePin(AnalogPin.P12, 45)
basic.pause(500)
pins.servoWritePin(AnalogPin.P12, 90)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) > 0) {
        for (let index = 0; index < randint(2, 4); index++) {
            pins.servoWritePin(AnalogPin.P12, randint(30, 60))
            basic.pause(350)
            pins.servoWritePin(AnalogPin.P12, 90)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P12, randint(120, 150))
            basic.pause(350)
            pins.servoWritePin(AnalogPin.P12, 90)
            basic.pause(500)
        }
        pins.servoWritePin(AnalogPin.P12, 90)
        basic.pause(750)
        pins.servoWritePin(AnalogPin.P12, 180 * randint(0, 1))
        basic.pause(6000)
        pins.servoWritePin(AnalogPin.P12, 90)
    }
})
