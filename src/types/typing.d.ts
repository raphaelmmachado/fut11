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
  name?: string;
  short_name?: string;
  num?: number;
  img?: string;
  pos?: Positions;
  apelido?: string;
  captan?: boolean;
  country?: string;
}
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

// Para o evento de mudança genérico (inputs de texto e select)
export interface ChangeEvent
  extends React.ChangeEvent<HTMLInputElement | HTMLSelectElement> {}

// Para o evento de mudança do input de arquivo
export interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
