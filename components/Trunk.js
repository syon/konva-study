import { Circle } from "react-konva";

const Bubble = (props) => {
  const { onClick } = props;
  return (
    <Circle
      x={window.innerWidth / 2}
      y={window.innerHeight / 2}
      radius={20}
      fill="saddlebrown"
      onClick={onClick}
      onMouseEnter={(e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "default";
      }}
    />
  );
};

export default Bubble;
