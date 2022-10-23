import { Stage, Layer, Text } from "react-konva";
import { useRecoilState, useRecoilValue } from "recoil";
import Trunk from "./Trunk";
import Bubble from "./Bubble";
import Seasons from "./Seasons";
import { $bubble } from "../store/bubble";

const StageComponent = () => {
  const [list, setList] = useRecoilState($bubble.state.list);
  const countText = useRecoilValue($bubble.getter.countText);

  const bubbleNodes = list.map((o) => {
    return <Bubble key={o.id} x={o.x} y={o.y} r={o.r} o={o.o} />;
  });

  const onClick = () => {
    const one = $bubble.helper.create();
    setList([...list, one]);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {bubbleNodes}
        <Text x={10} y={10} text={countText} />
        <Seasons />
        <Trunk onClick={onClick} />
      </Layer>
    </Stage>
  );
};

export default StageComponent;
