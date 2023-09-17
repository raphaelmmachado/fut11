import { useState } from "react";
import { IPlayerSelect } from "../../../types/typing";
import { MdShare, MdDone, MdDoneAll } from "react-icons/md";

import { toPng, toBlob } from "html-to-image";

import Screenshot from "./Screenshot";
import Download from "./Download";
import Socials from "./Socials";

interface Props {
  setLetUserSelect: (value: React.SetStateAction<IPlayerSelect>) => void;
  fieldRef: React.RefObject<HTMLDivElement>;
  club: string;
  ready: boolean;
}
interface IDataURL {
  png: string;
  blob: Blob | null;
}
export default function Share({
  setLetUserSelect,
  fieldRef,
  club,
  ready,
}: Props) {
  const [link, setLink] = useState<string>();
  const [dataURL, setDataURL] = useState<IDataURL>();

  return (
    <div>
      {ready ? (
        // Aqui tem que ser Label por causa do library

        <label
          htmlFor="share"
          className="max-[320px]:btn-sm btn btn-success bg-green-600 text-slate-800 gap-2"
          onClick={async () => {
            setLetUserSelect({ index: undefined, letSelect: false });
            if (!fieldRef.current) return;
            const [png, blob] = await Promise.all([
              toPng(fieldRef.current),
              toBlob(fieldRef.current),
            ]);
            setDataURL({ png: png, blob: blob });
          }}
        >
          <MdDoneAll size={20} className="rounded-full" />
        </label>
      ) : (
        // Aqui tem que ser button pelo atributo 'disabled'
        <button disabled className="btn max-[425px]:btn-sm  bg-slate-800 gap-2">
          <MdDone size={20} className="text-slate-500 rounded-full" />
        </button>
      )}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="share" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              setLink(undefined);
            }}
            htmlFor="share"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center justify-center m-5">
            {" "}
            <FieldImage png={dataURL?.png} />
          </div>

          <div className="flex items-center justify-around my-3">
            {" "}
            <Screenshot blob={dataURL?.blob} />
            <Download png={dataURL?.png} />
            <ShareButton blob={dataURL?.blob} png={dataURL?.png} />
          </div>

          <Socials link={link} club={club} />
        </div>
      </div>
    </div>
  );
}

interface PropsB {
  png: string | undefined;
}
const FieldImage = ({ png }: PropsB) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {" "}
      <img
        onLoad={() => setShow(true)}
        src={png}
        alt="escalação"
        className="object-fill w-52"
        style={{ display: show ? "block" : "none" }}
      />
    </>
  );
};

interface PropsC {
  blob?: Blob | null;
  png?: string;
}
const ShareButton = ({ blob, png }: PropsC) => {
  const handleShare = async () => {
    if (!blob || !png) return;
    const fileData = new File([blob], "Minha_formacao.png", {
      lastModified: new Date().getTime(),
      type: blob.type,
    });

    const shareData: ShareData = {
      title: "Futebol11",
      text: "Esta é a minha formação",
      files: [fileData],
      url: "https://fut11.netlify.app/",
    };

    if (navigator.canShare(shareData) && navigator.share) {
      await navigator.share(shareData).catch((err) => console.log(err));
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex gap-1 items-center p-3  shadow-md 
    hover:bg-slate-800 bg-slate-700 font-bold rounded-md cursor-pointer w-fit"
    >
      <MdShare size={20} className="text-slate-200 rounded-full" />{" "}
      <span>Comp.</span>
    </button>
  );
};
