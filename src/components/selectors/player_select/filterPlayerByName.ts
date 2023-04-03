import { IPlayer } from "../../../types/typing";
//ignoring accents and special characters
const filter = (array: IPlayer[], search: string): IPlayer[] => {
  const filtered = array.filter(
    (players) =>
      (search &&
        players.name
          ?.toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[^a-zA-Z\s]/g, "")
          .includes(
            search
              ?.toLocaleLowerCase()
              .normalize("NFD")
              .replace(/[^a-zA-Z\s]/g, "")
          )) ||
      players.apelido
        ?.toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[^a-zA-Z\s]/g, "")
        .includes(
          search
            ?.toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[^a-zA-Z\s]/g, "")
        )
  );
  return filtered;
};

export default filter;
