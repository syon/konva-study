export function createCross({ x, y }) {
  const o = { x, y }

  const e = { x: o.x + 5, y: o.y }
  const w = { x: o.x - 5, y: o.y }
  const n = { x: o.x, y: o.y - 5 }
  const s = { x: o.x, y: o.y + 5 }
  const crossLines = new Konva.Line({
    points: [n.x, n.y, s.x, s.y, o.x, o.y, e.x, e.y, w.x, w.y, ,],
    stroke: 'magenta',
    strokeWidth: 1,
  })

  const text = new Konva.Text({
    x: o.x + 3,
    y: o.y + 3,
    text: `${o.x}, ${o.y}`,
    fontSize: 12,
    fontFamily: 'Calibri',
    fill: 'magenta',
  })

  const group = new Konva.Group({ x, y })
  group.add(crossLines)
  group.add(text)

  return group
}
