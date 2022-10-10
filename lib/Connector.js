function computeBezierData({ sp, ep }) {
  const ap = { x: sp.x, y: sp.y }
  const zp = { x: ep.x, y: ep.y }
  const sh = { x: (ap.x + zp.x) / 2, y: ap.y }
  const eh = { x: (ap.x + zp.x) / 2, y: zp.y }
  const d = `M${ap.x},${ap.y} C${sh.x},${sh.y} ${eh.x},${eh.y} ${zp.x},${zp.y}`
  return d
}

export function createConnector(stage, fromId, toId) {
  const fromObj = stage.findOne(`#${fromId}`)
  const toObj = stage.findOne(`#${toId}`)

  const sp = { x: fromObj.x(), y: fromObj.y() }
  const ep = { x: toObj.x(), y: toObj.y() }

  const bezier = new Konva.Path({
    x: 0,
    y: 0,
    data: computeBezierData({ sp, ep }),
    stroke: 'orange',
  })

  const updateBezier = () => {
    bezier.setAttrs({
      data: computeBezierData({ sp, ep }),
    })
  }

  fromObj.on('dragmove', (arg) => {
    sp.x = arg.target.x()
    sp.y = arg.target.y()
    updateBezier()
  })

  toObj.on('dragmove', (arg) => {
    ep.x = arg.target.x()
    ep.y = arg.target.y()
    updateBezier()
  })

  return bezier
}
