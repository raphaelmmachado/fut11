import axios from "axios";
import { CloudiRes, ShortCoRes } from "../../types/typing";
import { AiOutlineLink } from "react-icons/ai";

interface Props {
  png: string | undefined;
  setLink: (link: string) => void;
  setLoadingLink: (bool: boolean) => void;
}
export default function Upload({ png, setLink, setLoadingLink }: Props) {
  const cloudUpload = async () => {
    setLoadingLink(true);
    const date = Date.now();
    await axios
      .post("https://api.cloudinary.com/v1_1/raphaelmmachado/upload", {
        file: png,
        upload_preset: "team-builder",
        public_id: `formação_${date}`,
        time_stamp: true,
        cloud_name: "raphaelmmachado",
      })
      .then((res) => {
        const data: CloudiRes = res.data;
        shortURL(data.secure_url);
      })
      .catch((err) => console.error(err));
  };

  const shortURL = async (url: string) => {
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data: ShortCoRes = res.data;
      if (data.ok) setLink(data.result.full_short_link);
      setLoadingLink(false);
    } catch (e) {
      setLink(url);
      setLoadingLink(false);
    }
  };
  return (
    <button
      className="flex gap-1 items-center p-3 shadow-md 
        hover:bg-slate-800 bg-slate-700 font-bold rounded-md cursor-pointer w-fit"
      onClick={() => cloudUpload()}
    >
      <AiOutlineLink size={24} />
      <span> Gerar Link </span>
    </button>
  );
}
