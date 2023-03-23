interface Props {
  pos: pos;
  id: string;
}
type pos = { top: string; left: string } | { bottom: string; right: string };

function Player({ pos, id }: Props) {
  return (
    <div
      id={id}
      className="absolute md:h-14 w-14 bg-white rounded-md"
      style={pos}
    >
      {" "}
    </div>
  );
}
export { Player };
