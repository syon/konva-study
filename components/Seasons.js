import { Rect } from "react-konva";
import { useSetRecoilState } from "recoil";
import { $bubble } from "../store/bubble";

const Seasons = () => {
  const setColor = useSetRecoilState($bubble.state.color);
  return (
    <>
      <Rect
        x={10}
        y={30}
        width={20}
        height={20}
        fill="hotpink"
        onClick={() => {
          setColor("pink");
        }}
        onMouseEnter={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      />
      <Rect
        x={40}
        y={30}
        width={20}
        height={20}
        fill="green"
        onClick={() => {
          setColor("mediumseagreen");
        }}
        onMouseEnter={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      />
    </>
  );
};

export default Seasons;
