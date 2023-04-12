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
        className={`p-3 rounded-lg transition ${
          showNumbers ? actived : desactived
        }`}
      >
        11
      </button>
    </>
  );
}
