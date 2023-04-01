import html2canvas from "html2canvas";
const handleScreenshot = async (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current)
    await html2canvas(ref.current).then((canvas) => {
      const imgData = canvas.toDataURL();
      canvas.toBlob((blob) => {
        if (blob !== null) {
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
        } else {
          console.error("Failed to create blob object");
        }
      }, "image/png");

      // Use imgData to save or display the screenshot
      return imgData;
    });
};
export default handleScreenshot;
