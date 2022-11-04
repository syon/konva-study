import { atom, selector } from "recoil";
import NodeBox from "../components/NodeBox";
import sampledata from "./sampledata.json";

const state = {
  aData: atom({
    key: "aData",
    default: sampledata,
  }),
};

let cacheMaster = {};

const getter = {
  gData: selector({
    key: "gData",
    get: ({ get }) => {
      return state.aData;
    },
  }),
};

const helper = {
  createBox(o) {
    const pos = o.pos || { x: 0, y: 0 };
    return (
      <NodeBox
        x={pos.x}
        y={pos.y}
        id={o.id}
        title={o.title}
        pieces={o.pieces}
        key={o.id}
      />
    );
  },
  createAllBoxes(structure) {
    return Object.entries(structure)
      .map(([k, v]) => {
        return { id: k, ...v };
      })
      .map((obj) => {
        return this.createBox(obj);
      });
  },
};

export const $blueprint = {
  state,
  getter,
  helper,
};
