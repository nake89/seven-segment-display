function setup() {
  createCanvas(1000, 900)
}

function draw() {
  background(0)
  new Segments(0, 0, 0)
  new Segments(140, 0, 1)
  new Segments(280, 0, 2)
  new Segments(420, 0, 3)
  new Segments(560, 0, 4)
  new Segments(700, 0, 5)
  new Segments(840, 0, 6)

  new Segments(0, 300, 7)
  new Segments(140, 300, 8)
  new Segments(280, 300, 9)
  new Segments(420, 300)
  new DecimalPoint(570, 545, true)
}
