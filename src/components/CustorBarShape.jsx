

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
     
      <circle cx={x + width / 2} cy={y} r={5} fill="#82ca9d" />
    </g>
  );
};

export default CustomBarShape;
