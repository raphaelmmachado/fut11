import { useState } from "react";
import { IPlayerSelect } from "../../types/typing";
import { IoMdShare } from "react-icons/io";
import { toPng, toBlob } from "html-to-image";
import { AiOutlineLink } from "react-icons/ai";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Screenshot from "./Screenshot";
import Download from "./Download";
import Upload from "./Upload";

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
  const [loadingLink, setLoadingLink] = useState<boolean>(false);

  return (
    <>
      {ready ? (
        <label
          htmlFor="share"
          className="btn bg-slate-800 text-slate-300 gap-2"
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
          <IoMdShare size={20} className=" rounded-full" />
          {/* <span className="font-medium  text-slate-300">compartilhar</span> */}
        </label>
      ) : (
        <button disabled className="btn bg-slate-800 gap-2">
          <IoMdShare size={20} className="text-slate-500 rounded-full" />
          {/* <span className="font-medium  text-slate-500">compartilhar</span> */}
        </button>
      )}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="share" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              setLink(undefined);
              setLoadingLink(false);
            }}
            htmlFor="share"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center justify-center m-5">
            {" "}
            <ImagePic png={dataURL?.png} />
          </div>

          <div className="flex items-center justify-around my-3">
            {" "}
            <Screenshot blob={dataURL?.blob} />
            <Download png={dataURL?.png} />
            <Upload
              png={dataURL?.png}
              setLink={(link: string | undefined) => setLink(link)}
              setLoadingLink={(bool: boolean) => setLoadingLink(bool)}
            />
          </div>
          {link && !loadingLink && (
            <>
              <ImageLink link={link} />
            </>
          )}
          <Socials link={link} club={club} />
          {loadingLink && !link && (
            <p className="text-center">Carregando Link ...</p>
          )}
        </div>
      </div>
    </>
  );
}
interface PropsB {
  link: string | undefined;
}
const ImageLink = ({ link }: PropsB) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2 my-3 ">
        <label htmlFor="link">
          <AiOutlineLink size={24} />
        </label>
        <input
          id="link"
          className="bg-slate-700 p-2  rounded-sm w-52 cursor-pointer"
          type="text"
          value={link}
          readOnly
          onClick={(e) => {
            navigator.clipboard.writeText(e.currentTarget.value);
            setCopied(true);
          }}
        />
        {copied && <span className="text-green-200">Copiado!</span>}
      </div>
    </>
  );
};
interface PropsC {
  link: string | undefined;
  club: string;
}
const Socials = ({ link, club }: PropsC) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <TwitterShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          hashtags={[`${club}`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <FacebookShareButton
          url="https://fut11.netlify.app"
          quote={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          hashtag={`${club}`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          separator=" "
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </>
  );
};
interface PropsD {
  png: string | undefined;
}
const ImagePic = ({ png }: PropsD) => {
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
