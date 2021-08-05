Longitud = 0

def on_forever():
    global Longitud
    Longitud = 25
    if input.button_is_pressed(Button.A):
        basic.show_number(Longitud * 0.3048)
        basic.pause(2000)
        basic.show_string("In")
    if input.button_is_pressed(Button.B):
        basic.show_number(Longitud / 0.3048)
        basic.pause(2000)
        basic.show_string("M")
basic.forever(on_forever)
