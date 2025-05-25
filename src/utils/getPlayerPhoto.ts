type Extension = "png" | "jpg" | "webp" | "jpeg";
function getPhotoUrl(club: string, name: string, extension: Extension = "png") {
  // Construindo a URL da imagem dinamicamente
  // import.meta.url se refere à URL do módulo atual
  return new URL(
    `../assets/photos/${club.toLowerCase()}/${name.toLowerCase()}.${extension}`,
    import.meta.url
  ).href;
}

function getGenericPhoto() {
  return new URL(`../assets/photos/generic.png`, import.meta.url).href;
}

export { getPhotoUrl, getGenericPhoto };
