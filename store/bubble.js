import { atom, selector } from "recoil";

const state = {
  color: atom({ key: "color", default: "pink" }),
  list: atom({
    key: "list",
    default: [
      { id: "abcd1", x: 100, y: 100, r: 10, o: 0.8 },
      { id: "abcd2", x: 300, y: 200, r: 30, o: 0.3 },
      { id: "abcd3", x: 500, y: 400, r: 5, o: 0.6 },
    ],
  }),
};

const getter = {
  countText: selector({
    key: "countText",
    get: ({ get }) => {
      const list = get(state.list);
      return `Bubble count: ${list.length}`;
    },
  }),
};

const helper = {
  create() {
    return {
      id: Math.random().toString(36).substring(2),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 50 + 5,
      o: Math.random(),
    };
  },
};

export const $bubble = {
  state,
  getter,
  helper,
};
