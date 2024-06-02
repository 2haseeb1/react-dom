

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      {/* Add custom shapes or decorations here */}
      <circle cx={x + width / 2} cy={y} r={5} fill="#82ca9d" /> {/* Example */}
    </g>
  );
};

export default CustomBarShape;
