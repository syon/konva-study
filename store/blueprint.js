import CyanBox from "../components/CyanBox";
import Wire from "../components/Wire";

const initData = {
  boxes: {
    cb1: { x: 63, y: 216 },
    cb2: { x: 217, y: 32 },
    cb3: { x: 178, y: 128 },
    cb4: { x: 443, y: 50 },
    cb5: { x: 424, y: 219 },
    cb6: { x: 533, y: 130 },
  },
  binds: [
    { from: "cb1", to: "cb2" },
    { from: "cb3", to: "cb4" },
    { from: "cb5", to: "cb6" },
    { from: "cb6", to: "cb1" },
    { from: "cb2", to: "cb5" },
  ],
};

const state = {};

const getter = {};

const helper = {
  async getRemoteData() {
    return initData;
  },
  createAllBoxes(boxes, onMoving) {
    if (!boxes) return null;
    return Object.entries(boxes || {}).map(([id, pos]) => {
      return <CyanBox id={id} key={id} {...pos} onMoving={onMoving} />;
    });
  },
  createAllWires(root) {
    if (!root || !root.binds) return null;
    return root.binds.map((bd, i) => {
      const sp = root.boxes[bd.from];
      const ep = root.boxes[bd.to];
      return <Wire key={i} sp={sp} ep={ep} />;
    });
  },
};

export const $blueprint = {
  state,
  getter,
  helper,
};
