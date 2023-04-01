const formatPositions = (position: string) => {
  switch (position) {
    case "all":
      return "Todos";
    case "G":
      return "Goleiros";
    case "D" || "Z":
      return "Defensores";
    case "LD":
      return "Laterais Direitos";
    case "LE":
      return "Laterais Esquerdos";
    case "MD":
      return "Meios Defensores";
    case "MA":
      return "Meios Atacantes";
    case "P":
      return "Pontas";
    case "A":
      return "Atacantes";
    default:
      return "Todos";
  }
};
const formatPosition = (position: string) => {
  switch (position) {
    case "G":
      return "Goleiro";
    case "D" || "Z":
      return "Zagueiro";
    case "LD":
      return "Lateral Direito";
    case "LE":
      return "Lateral Esquerdo";
    case "MD":
      return "Volante";
    case "MA":
      return "Meia Atacante";
    case "P":
      return "Ponta";
    case "A":
      return "Atacante";
    default:
      return undefined;
  }
};
export { formatPositions, formatPosition };
