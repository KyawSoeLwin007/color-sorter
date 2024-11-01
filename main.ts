function doRight () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 150)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 150)
    basic.pause(1000)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
    basic.pause(1000)
}
function doforward () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 210)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 150)
    basic.pause(1000)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
    basic.pause(1000)
}
function doLeft () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 210)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 210)
    basic.pause(1000)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
    basic.pause(1000)
}
function doLevel () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
}
doLevel()
basic.forever(function () {
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) == 255) {
        if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 20) {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Red)
            basic.showString("R")
            doLeft()
        } else {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        }
    } else if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) == 255) {
        if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 20) {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Green)
            basic.showString("G")
            doRight()
        } else {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        }
    } else if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) == 255) {
        if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 20 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 20) {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Blue)
            basic.showString("B")
            doforward()
        } else {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        }
    } else {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
    }
})
