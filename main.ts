let i = 0
let j = 0
let x = 0
let y = 0
let a = 0
let b = 0
basic.forever(function () {
    basic.pause(randint(20, 50))
    i = randint(0, 4)
    j = 0
    led.plot(i, j)
    while (j != 4) {
        basic.pause(100)
        led.plotBrightness(i, j, 175)
        j += 1
        led.unplot(i, j - 3)
        led.plot(i, j)
        led.plotBrightness(i, j - 2, 60)
    }
    basic.pause(100)
    led.unplot(i, j - 2)
    basic.pause(100)
    led.unplot(i, j - 1)
    basic.pause(100)
    led.unplot(i, j)
})
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    while (y != 4) {
        basic.pause(100)
        led.plotBrightness(x, y, 175)
        y += 1
        led.unplot(x, y - 3)
        led.plot(x, y)
        led.plotBrightness(x, y - 2, 60)
    }
    basic.pause(100)
    led.unplot(x, y - 2)
    basic.pause(100)
    led.unplot(x, y - 1)
    basic.pause(100)
    led.unplot(x, y)
})
basic.forever(function () {
    basic.pause(randint(200, 500))
    a = randint(0, 4)
    b = 0
    led.plot(a, b)
    while (b != 4) {
        basic.pause(100)
        led.plotBrightness(a, b, 175)
        b += 1
        led.unplot(a, b - 3)
        led.plot(a, b)
        led.plotBrightness(a, b - 2, 60)
    }
    basic.pause(100)
    led.unplot(a, b - 2)
    basic.pause(100)
    led.unplot(a, b - 1)
    basic.pause(100)
    led.unplot(a, b)
})
