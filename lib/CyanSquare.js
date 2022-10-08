export function createCyanSquare({ x, y }) {
  const square = new Konva.Rect({
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    fill: 'cyan',
    opacity: 0.5,
  })

  const text = new Konva.Text({
    x: 0 + 3,
    y: 0 + 3,
    text: `${x}, ${y}`,
    fontSize: 12,
    fontFamily: 'Calibri',
    fill: 'blue',
    opacity: 0.3,
  })

  const group = new Konva.Group({ x, y, draggable: true })
  group.add(square)
  group.add(text)

  group.on('dragmove', (arg) => {
    text.setAttr('text', `${arg.target.x()}, ${arg.target.y()}`)
  })

  group.on('mouseenter', (e) => {
    e.target.getStage().container().style.cursor = 'move'
  })

  group.on('mouseleave', (e) => {
    e.target.getStage().container().style.cursor = 'default'
  })

  return group
}
