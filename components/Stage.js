import { Stage, Layer } from "react-konva";
import { useRecoilValue } from "recoil";
import { $blueprint } from "../store/blueprint";

const StageComponent = () => {
  const d = useRecoilValue($blueprint.getter.gData);
  const boxes = $blueprint.helper.createAllBoxes(d);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} draggable>
      <Layer>{boxes}</Layer>
    </Stage>
  );
};

export default StageComponent;
