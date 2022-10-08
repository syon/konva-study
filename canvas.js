import Konva from 'konva'
import { createCross } from './lib/Cross'

export function draw() {
  const stage = new Konva.Stage({
    container: 'app',
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const layer = new Konva.Layer()
  stage.add(layer)

  const cross1 = createCross({ x: 0, y: 0 })
  const cross2 = createCross({ x: 100, y: 0 })
  const cross3 = createCross({ x: 0, y: 100 })
  const cross4 = createCross({ x: 100, y: 100 })

  layer.add(cross1)
  layer.add(cross2)
  layer.add(cross3)
  layer.add(cross4)
}
