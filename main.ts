info.onCountdownEnd(function () {
    Patito.startEffect(effects.disintegrate, 2000)
})
info.onScore(10, function () {
    Patito.startEffect(effects.confetti, 2000)
    Patito.startEffect(effects.none)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    Comida.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Comida: Sprite = null
let Patito: Sprite = null
scene.setBackgroundColor(9)
Patito = sprites.create(assets.image`Patito`, SpriteKind.Player)
controller.moveSprite(Patito)
Comida = sprites.create(assets.image`Comida`, SpriteKind.Food)
