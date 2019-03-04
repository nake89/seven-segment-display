class Segments {
  constructor(x = 0, y = 0, number = 'null') {
    // Top
    new HorizontalLine(
      x + 40,
      y + 40,
      x + 110,
      y + 40,
      number.toString().match(/[0|2|3|5|6|7|8|9]/) ? true : false
    )
    // Mid
    new HorizontalLine(
      x + 40,
      y + 140,
      x + 110,
      y + 140,
      number.toString().match(/[2|3|4|5|6|8|9]/) ? true : false
    )
    // Bottom
    new HorizontalLine(
      x + 40,
      y + 240,
      x + 110,
      y + 240,
      number.toString().match(/[2|3|5|6|8|9|0]/) ? true : false
    )

    // Top left
    new VerticalLine(
      x + 25,
      y + 60,
      x + 25,
      y + 120,
      number.toString().match(/[4|5|6|8|9|0]/) ? true : false
    )
    // Top right
    new VerticalLine(
      x + 125,
      y + 60,
      x + 125,
      y + 120,
      number.toString().match(/[1|2|3|4|7|8|9|0]/) ? true : false
    )

    // Bottom left
    new VerticalLine(
      x + 25,
      y + 160,
      x + 25,
      y + 220,
      number.toString().match(/[2|6|8|0]/) ? true : false
    )
    // Bottom right
    new VerticalLine(
      x + 125,
      y + 160,
      x + 125,
      y + 220,
      number.toString().match(/[1|3|4|5|6|7|8|9|0]/) ? true : false
    )
  }
}

class HorizontalLine {
  constructor(x, y, sx, sy, lighton) {
    if (lighton) {
      stroke('red')
    } else {
      stroke('#490000')
    }
    strokeWeight(20)
    line(x, y, sx, sy)
  }
}

class VerticalLine {
  constructor(x, y, sx, sy, lighton) {
    if (lighton) {
      stroke('red')
    } else {
      stroke('#490000')
    }
    strokeWeight(20)
    line(x, y, sx, sy)
  }
}
