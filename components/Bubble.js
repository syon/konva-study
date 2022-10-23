import { Circle } from "react-konva";
import { useRecoilValue } from "recoil";
import { $bubble } from "../store/bubble";

const Bubble = (props) => {
  const { x, y, r, o } = props;
  const color = useRecoilValue($bubble.state.color);
  return <Circle x={x} y={y} radius={r} fill={color} opacity={o} />;
};

export default Bubble;
