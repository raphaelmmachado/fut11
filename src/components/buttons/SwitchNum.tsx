import { TbShirtSport, TbShirtOff } from "react-icons/tb";
interface Props {
  showNumbers: boolean;
  setShowNumbers: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SwitchNum({ showNumbers, setShowNumbers }: Props) {
  const actived = "bg-slate-800 text-slate-200 font-bold";
  const desactived = "bg-slate-900 text-slate-500 font-normal";
  return (
    <>
      <button
        onClick={() => setShowNumbers((prev) => !prev)}
        className={`p-3 rounded-lg transition ${actived}`}
      >
        {showNumbers ? <TbShirtOff size={24} /> : <TbShirtSport size={24} />}
      </button>
    </>
  );
}
