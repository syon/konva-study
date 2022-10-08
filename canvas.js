import Konva from 'konva'

export function draw() {
  const stage = new Konva.Stage({
    container: 'app',
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const layer = new Konva.Layer()
  stage.add(layer)

  const simpleText = new Konva.Text({
    x: 120,
    y: 70,
    text: 'Simple Text',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'gray',
  })
  layer.add(simpleText)

  const rect1 = new Konva.Rect({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: 'red',
    opacity: 0.5,
  })
  layer.add(rect1)
}
