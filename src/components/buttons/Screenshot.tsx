import { RiScreenshot2Fill } from "react-icons/ri";
import takeScreenshot from "../../utils/takeScreenshot";

import { useState } from "react";
import Toast from "./Toast";
interface Props {
  blob: Blob | null | undefined;
}
export default function Screenshot({ blob }: Props) {
  const [showToast, setShowToast] = useState(false);
  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <button
        disabled={showToast}
        onClick={() => {
          if (blob) {
            takeScreenshot(blob);
            handleToast();
          }
        }}
        className={`flex gap-1 items-center p-3 ${
          showToast ? "bg-green-700" : "bg-slate-700"
        }  font-bold rounded-md shadow-md hover:bg-slate-800 w-fit`}
      >
        {" "}
        <RiScreenshot2Fill size={24} />
        <span>Copiar</span>
      </button>{" "}
      {showToast && <Toast />}
    </>
  );
}
