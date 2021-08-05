let Longitud = 0
basic.forever(function () {
    Longitud = 59
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Longitud * 0.0254)
        basic.pause(1000)
        basic.showString("In")
        music.playMelody("C5 B A F D G E F ", 128)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(Longitud / 0.0254)
        basic.pause(1000)
        basic.showString("M")
        basic.clearScreen()
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
