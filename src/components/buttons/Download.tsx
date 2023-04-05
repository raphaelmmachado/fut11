import { MdFileDownload } from "react-icons/md";

interface Props {
  png: string | undefined;
}
export default function Download({ png }: Props) {
  return (
    <>
      {/* TODO DOWNLOAD IMAGE */}{" "}
      <a
        href={png}
        download="Minha_escalação"
        className="flex gap-1 items-center p-3  shadow-md 
        hover:bg-slate-800 bg-slate-700 font-bold rounded-md cursor-pointer w-fit"
      >
        <MdFileDownload size={24} /> Salvar{" "}
      </a>{" "}
    </>
  );
}
