export type typeA = {
  top: string;
  left: string;
};
export type typeB = { bottom: string; right: string };

interface Position {
  [key: number]: CSSProperties;
}
interface Club {
  [key: string]: IPlayer[];
}
interface IPlayer {
  name: string | undefined;
  short_name?: string;
  num: number | undefined;
  img: string | undefined;
  pos: Positions | undefined;
  apelido?: string;
}

type IPlayerSelect = {
  letSelect: boolean;
  index: undefined | number;
};

type Positions = "G" | "D" | "LD" | "LE" | "MD" | "MA" | "A" | "P";
