import { createCross } from './Cross'

export function createCrossLayer() {
  const layer = new Konva.Layer()
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      const x = 0 + 100 * i
      const y = 0 + 100 * j
      const cross = createCross({ x, y })
      layer.add(cross)
    }
  }
  layer.setAttr('opacity', 0.2)
  return layer
}
