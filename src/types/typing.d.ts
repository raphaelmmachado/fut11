export type typeA = {
  top: string;
  left: string;
};
export type typeB = { bottom: string; right: string };

interface Position {
  [key: number]: CSSProperties;
}
interface Squad {
  [key: string]: IPlayer[];
}
interface IPlayer {
  name: string | undefined;
  short_name?: string;
  num: number | undefined;
  img: string | undefined;
  pos: Positions | undefined;
  apelido?: string;
  captan?: boolean;
}
s;
type IPlayerSelect = {
  letSelect: boolean;
  index: undefined | number;
};

type Positions =
  | "G"
  | "D"
  | "LD"
  | "LE"
  | "MD"
  | "MC"
  | "MA"
  | "A"
  | "PD"
  | "PE";

interface CloudiRes {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  existing: boolean;
  folder: string;
  format: string;
  height: number;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}
export interface ShortCoRes {
  ok: boolean;
  result: Result;
}

export interface Result {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}
interface Clubs {
  [key: string]: string;
}
