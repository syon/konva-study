import { Group, Rect, Line, Text } from "react-konva";

export default function NodeBox(props) {
  const { id, x, y, title, pieces, onMoveEnd } = props;
  const pieceList = (pieces || []).map((p, i) => {
    const y = 25 * i + 50;
    return <Text x={20} y={y} text={p.title} key={p.key} />;
  });

  const boxW = 200;
  const boxH = 55 + 25 * pieceList.length;

  return (
    <Group x={x} y={y} draggable>
      <Text x={10} y={-15} text={id} opacity="0.3" />
      <Rect
        x={0}
        y={0}
        width={boxW}
        height={boxH}
        stroke="black"
        strokeWidth={2}
        fill="white"
      />
      <Line points={[0, 30, boxW, 30]} stroke="black" />
      <Text x={10} y={10} text={title} />
      {pieceList}
    </Group>
  );
}
