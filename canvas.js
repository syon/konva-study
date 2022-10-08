import Konva from 'konva'
import { createCrossLayer } from './lib/CrossLayer'
import { createCyanSquare } from './lib/CyanSquare'
import { createConnector } from './lib/Connector'

export function draw() {
  const stage = new Konva.Stage({
    container: 'app',
    width: window.innerWidth,
    height: window.innerHeight,
    draggable: true,
  })

  const crossLayer = createCrossLayer()
  stage.add(crossLayer)

  const layer = new Konva.Layer()
  stage.add(layer)

  const rect1 = createCyanSquare({ x: 40, y: 40 })
  layer.add(rect1)

  const rect2 = createCyanSquare({ x: 250, y: 120 })
  layer.add(rect2)

  const rect3 = createCyanSquare({ x: 450, y: 20 })
  layer.add(rect3)

  const connector1 = createConnector(rect1, rect2)
  layer.add(connector1)

  const connector2 = createConnector(rect2, rect3)
  layer.add(connector2)
}
