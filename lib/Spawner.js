export function createSpawner(data, { onSpawn }) {
  const { id, pos } = data

  const spawner = new Konva.Circle({
    id,
    x: pos.x,
    y: pos.y,
    radius: 20,
    fill: 'lime',
    draggable: true,
  })

  spawner.on('click', (e) => {
    const pos = {
      x: spawner.x() + Math.random() * 100 - 150,
      y: spawner.y() + Math.random() * 300 - 150,
    }
    const eggId = `${pos.x}-${pos.y}`
    onSpawn({ id: eggId, pos })
  })

  spawner.on('mouseenter', (e) => {
    e.target.getStage().container().style.cursor = 'pointer'
  })

  spawner.on('mouseleave', (e) => {
    e.target.getStage().container().style.cursor = 'default'
  })

  return spawner
}

export function createEgg({ id, pos }) {
  return new Konva.Circle({
    id,
    x: pos.x,
    y: pos.y,
    radius: 15,
    fill: 'pink',
    draggable: true,
  })
}
