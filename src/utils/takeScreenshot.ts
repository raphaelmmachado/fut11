// https://www.npmjs.com/package/html-to-image
const takeScreenshot = (blob: Blob | null) => {
  if (blob !== null) {
    navigator.clipboard
      .write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ])
      .then(() => console.log("copiada"));
  } else {
    console.log("Erro  ao criar objeto blob");
  }
};

export default takeScreenshot;
