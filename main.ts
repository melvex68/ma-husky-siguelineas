function mueverobot () {
    if (x1 >= 120 && x1 <= 200) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Vnormal)
    }
    if (x1 > 200) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Vrapida)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Vlenta)
    }
    if (x1 < 120) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Vrapida)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Vlenta)
    }
}
let y1 = 0
let x1 = 0
let Vrapida = 0
let Vlenta = 0
let Vnormal = 0
basic.showIcon(IconNames.No)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
Vnormal = 30
Vlenta = 20
Vrapida = 200
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        x1 = huskylens.readeArrow_index(1, 1, Content2.xTarget)
        y1 = huskylens.readeArrow_index(1, 1, Content2.yTarget)
        mueverobot()
    }
})
