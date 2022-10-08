import Konva from 'konva'
import { createCross } from './lib/Cross'
import { createCyanSquare } from './lib/CyanSquare'

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

  const rect2 = createCyanSquare({ x: 250, y: 80 })
  layer.add(rect2)
}
