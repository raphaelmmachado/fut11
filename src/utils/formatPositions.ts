const formatPositions = (position: string) => {
  switch (position) {
    case "all":
      return "Todos os Jogadores";
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
      return "Todos os Jogadores";
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
      return "Meia Defensivo";
    case "MC":
      return "Meia Central";
    case "MA":
      return "Meia Atacante";
    case "PD":
      return "Ponta Direita";
    case "PE":
      return "Ponta Esquerda";
    case "A":
      return "Atacante";
    default:
      return undefined;
  }
};
export { formatPositions, formatPosition };
