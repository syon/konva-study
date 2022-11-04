import React from "react";
import { Stage, Layer } from "react-konva";
import { NodeBoxStory } from "./NodeBox.story";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/NodeBox",
  component: NodeBoxStory,
  argTypes: {},
  decorators: [
    (Story) => (
      <Stage width={window.innerWidth} height={window.innerHeight} draggable>
        <Layer>
          <Story />
        </Layer>
      </Stage>
    ),
  ],
};

const Template = (args) => <NodeBoxStory {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  id: 'abcd123',
  x: 10,
  y: 20,
  title: "サンプル1 タイトル",
  pieces: [
    { key: "b002", title: "サブ1 タイトル", sort: 1 },
    { key: "b003", title: "サブ2 タイトル", sort: 2 },
    { key: "b004", title: "サブ3 タイトル", sort: 3 },
    { key: "b005", title: "サブ4 タイトル", sort: 4 },
  ],
};

export const Blank = Template.bind({});
Blank.args = {
  id: 'abcd123',
  x: 10,
  y: 20,
  title: "サンプル2 タイトル",
};
