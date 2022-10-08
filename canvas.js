import Konva from 'konva'
import { createCross } from './lib/Cross'
import { createCyanSquare } from './lib/CyanSquare'
import { createConnector } from './lib/Connector'

export function draw() {
  const stage = new Konva.Stage({
    container: 'app',
    width: window.innerWidth,
    height: window.innerHeight,
    draggable: true,
  })

  const layer = new Konva.Layer()
  stage.add(layer)

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      const x = 0 + 100 * i
      const y = 0 + 100 * j
      const cross = createCross({ x, y })
      layer.add(cross)
    }
  }

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
