import { MdQuestionMark } from "react-icons/md";

export default function TipsModal() {
  return (
    <>
      <label htmlFor="info-modal" className="btn btn-circle bg-slate-800">
        <MdQuestionMark size={20} />
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="info-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Como usar ?</h3>
          <ol className="py-4">
            <li>1. Escolha seu time (apenas Flamengo por enquanto)</li>
            <br />
            <li>
              2. Selecione uma formação (Mudar formação não desfaz sua
              escalação)
            </li>
            <br />
            <li>
              3. Selecione um quadrado e escolha um jogador para posicionar no
              quadrado marcado
            </li>
            <br />
            <li>4. Clique duplo remove um jogador</li>
            <br />
            <li>
              5. Você pode dar uma faixa de capitão ao jogador posicionado
              clicando em C.
            </li>
            <br />
            <li>
              6. Você pode tirar print ou baixar a imagem do campo e
              compartilhar.
            </li>
          </ol>
          <div className="modal-action">
            <label htmlFor="info-modal" className="btn">
              OK!
            </label>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
