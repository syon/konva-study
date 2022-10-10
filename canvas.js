import Konva from 'konva'
import { createCrossLayer } from './lib/CrossLayer'
import { createSpawner, createEgg } from './lib/Spawner'
import { createConnector } from './lib/Connector'

const spawnerData = {
  core: {
    id: 'sp001',
    pos: { x: 400, y: 200 },
  },
  eggList: [
    { id: 'eg001', pos: { x: 150, y: 100 } },
    { id: 'eg002', pos: { x: 180, y: 160 } },
    { id: 'eg003', pos: { x: 120, y: 300 } },
  ],
}

export function draw() {
  const stage = new Konva.Stage({
    container: 'app',
    width: window.innerWidth,
    height: window.innerHeight,
    draggable: true,
  })

  const crossLayer = createCrossLayer()
  stage.add(crossLayer)

  const layer = drawSpawnerLayer(spawnerData)
  stage.add(layer)
}

function drawSpawnerLayer(spawnerData) {
  const { core, eggList } = spawnerData
  const layer = new Konva.Layer()

  const spawner = createSpawner(core, {
    onSpawn: (eggObj) => {
      layer.add(createEgg(eggObj))
      layer.add(createConnector(layer, eggObj.id, core.id))
    },
  })
  layer.add(spawner)

  for (const eggObj of eggList) {
    layer.add(createEgg(eggObj))
    layer.add(createConnector(layer, eggObj.id, core.id))
  }

  return layer
}
