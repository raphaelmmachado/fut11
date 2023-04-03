import { useEffect, useState } from "react";
import { IPlayerSelect } from "../../types/typing";
import { MdFileDownload } from "react-icons/md";
import { toPng } from "html-to-image";

interface Props {
  setLetUserSelect: (value: React.SetStateAction<IPlayerSelect>) => void;
  fieldRef: React.RefObject<HTMLDivElement>;
}
export default function Download({ fieldRef, setLetUserSelect }: Props) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (fieldRef.current)
      toPng(fieldRef.current).then((dataUrl) => setImage(dataUrl));
  }, [fieldRef]);
  return (
    <>
      {" "}
      <a
        onClick={() => setLetUserSelect({ index: undefined, letSelect: false })}
        href={image}
        download="Minha_escalação"
        className="flex gap-1 items-center p-3 shadow-md 
        hover:bg-slate-700 bg-slate-800 font-bold rounded-md"
      >
        <MdFileDownload size={24} /> Salvar{" "}
      </a>{" "}
    </>
  );
}
