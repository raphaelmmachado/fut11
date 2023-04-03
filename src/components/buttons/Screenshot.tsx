import { IPlayerSelect } from "../../types/typing";
import { RiScreenshot2Fill } from "react-icons/ri";
import { takeScreenshot } from "../../utils/handleImage";
import { toBlob } from "html-to-image";

import { useState } from "react";
import Toast from "./Toast";
interface Props {
  setLetUserSelect: (value: React.SetStateAction<IPlayerSelect>) => void;
  fieldRef: React.RefObject<HTMLDivElement>;
}
export default function Screenshot({ fieldRef, setLetUserSelect }: Props) {
  const [showToast, setShowToast] = useState(false);
  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <button
        disabled={showToast}
        onClick={async () => {
          await setLetUserSelect({ index: undefined, letSelect: false });
          if (fieldRef.current) {
            const blob = await toBlob(fieldRef.current);
            takeScreenshot(blob);
            handleToast();
          }
        }}
        className={`flex gap-1 items-center p-3 ${
          showToast ? "bg-green-700" : "bg-slate-800"
        }  font-bold rounded-md shadow-md hover:bg-slate-700`}
      >
        {" "}
        <RiScreenshot2Fill size={24} />
        <span>Copiar</span>
      </button>{" "}
      {showToast && <Toast />}
    </>
  );
}
