startbit.startbit_Init()
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S2, startbit.startbit_LineColor.Black)) {
        startbit.startbit_setMotorSpeed(100, 70)
    } else if (startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S3, startbit.startbit_LineColor.Black)) {
        startbit.startbit_setMotorSpeed(70, 100)
    } else if (startbit.startbit_readLineFollowerStatus(startbit.startbit_lineFollowPort.port1, startbit.startbit_lineFollower.S1_IN_S2_IN)) {
        startbit.startbit_setMotorSpeed(0, 0)
    } else {
        startbit.startbit_setMotorSpeed(70, 70)
    }
})
