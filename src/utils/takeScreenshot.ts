import html2canvas from "html2canvas";

const handleScreenshot = (ref: React.RefObject<HTMLDivElement>) => {
  ref?.current &&
    html2canvas(ref.current).then((canvas) => {
      const imgData = canvas.toDataURL();
      // Use imgData to save or display the screenshot
      return imgData;
    });
};
export default handleScreenshot;
