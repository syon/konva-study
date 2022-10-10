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

  const rect1 = createCyanSquare({ id: 'r01', x: 40, y: 40 })
  layer.add(rect1)

  const rect2 = createCyanSquare({ id: 'r02', x: 250, y: 120 })
  layer.add(rect2)

  const rect3 = createCyanSquare({ id: 'r03', x: 450, y: 20 })
  layer.add(rect3)

  const connector1 = createConnector(stage, rect1.id(), rect2.id())
  layer.add(connector1)

  const connector2 = createConnector(stage, rect2.id(), rect3.id())
  layer.add(connector2)
}
