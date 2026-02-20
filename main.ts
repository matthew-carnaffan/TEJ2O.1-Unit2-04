/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Feb 2026
 * This program tells the temputure when a button pressed
*/
let temperature: number = input.temperature()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
basic.showString('The current temperature is ' + (temperature).toString() + 'C.')
basic.clearScreen()
basic.showIcon(IconNames.Happy)
})

