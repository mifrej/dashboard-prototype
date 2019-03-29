interface Props {
  name: string;
  size: string;
}

const Icon = (props: Props) => {
  const { name, size } = props;
  return (
    <svg className={`svgIcon-${name}`}>
      <use xlinkHref={`../../../static/svg_sprite.svg#${name}`} />
      <style jsx>{`
        width: ${size}px;
        height: ${size}px;
      `}</style>
    </svg>
  );
};

export default Icon;
