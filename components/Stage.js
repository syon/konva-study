import { Stage, Layer, Text, Circle } from "react-konva";

const StageComponent = () => {
  const circles = [...Array(5)].map((_, i) => {
    return (
      <Circle key={i} x={(i + 1) * 30} y={50} radius={10} fill="magenta" />
    );
  });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {circles}
        <Text x={20} y={15} text="Hello!" />
      </Layer>
    </Stage>
  );
};

export default StageComponent;
