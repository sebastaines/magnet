input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 200) {
        basic.showIcon(IconNames.Yes)
    }
})
