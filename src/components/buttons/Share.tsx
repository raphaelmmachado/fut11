import { useEffect, useState } from "react";
import { IPlayerSelect } from "../../types/typing";
import { takeScreenshot } from "../../utils/handleImage";
import { IoMdShare } from "react-icons/io";
import { toPng, toBlob } from "html-to-image";

import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface Props {
  setLetUserSelect: (value: React.SetStateAction<IPlayerSelect>) => void;
  fieldRef: React.RefObject<HTMLDivElement>;
}
export default function Share({ setLetUserSelect, fieldRef }: Props) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    fieldRef.current &&
      toPng(fieldRef.current).then((dataUrl) => setImage(dataUrl));
  }, [fieldRef]);

  return (
    <>
      <label
        htmlFor="share"
        className="btn btn-circle bg-slate-800"
        onClick={() => {
          setLetUserSelect({ index: undefined, letSelect: false });
        }}
      >
        <IoMdShare size={20} />
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="share" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="share"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Compartilhe nas redes sociais!</h3>
          <p className="py-4">
            Youve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="flex items-center gap-2">
            <TwitterShareButton
              url="https://flamaker.netlify.app/"
              title={"Monte sua escalação do Flamengo"}
              hashtags={["flamengo", "flamaker"]}
            >
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>

            <FacebookShareButton
              url="https://flamaker.netlify.app/"
              quote="Monte sua escalação do Flamengo!"
            >
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
              url="https://flamaker.netlify.app/"
              title="Monte sua escalação do Flamengo!"
              separator=" "
            >
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              url="https://flamaker.netlify.app/"
              title="Monte sua escalção do Flamengo!"
            >
              <TelegramIcon size={50} round={true} />
            </TelegramShareButton>
          </div>
        </div>
      </div>
    </>
  );
}
