Sugar.onButtonEvent(DigitalPin.P1, function () {
    robotbit.MotorStop(robotbit.Motors.M1A)
    Sugar.ledOnoff(DigitalPin.P2, Sugar.LEDSta.Off)
    music.ringTone(262)
})
basic.forever(function () {
    if (Sugar.PIR(DigitalPin.P0)) {
        robotbit.MotorRun(robotbit.Motors.M1A, 255)
        Sugar.ledOnoff(DigitalPin.P0, Sugar.LEDSta.On)
        basic.showString("Welcome")
    } else {
        robotbit.MotorRun(robotbit.Motors.M1A, 0)
        Sugar.ledOnoff(DigitalPin.P0, Sugar.LEDSta.Off)
        basic.showString("No one here")
    }
})
basic.forever(function () {
	
})
