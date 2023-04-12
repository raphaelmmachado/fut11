import { MdQuestionMark } from "react-icons/md";

export default function TipsModal() {
  return (
    <>
      <label
        htmlFor="info-modal"
        className="btn btn-circle bg-slate-800 self-end"
      >
        <MdQuestionMark size={20} />
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="info-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <ul className="text-sm">
            <h3 className="font-bold text-lg text-slate-300">Como usar ?</h3>
            <li>
              Posicione os jogadores na formação que você acha que seu time deve
              jogar. Você tem opções para copiar, salvar ou gerar um link para
              compartilhar a imagem do campo.
            </li>
          </ul>
          <br />
          <ul className="text-sm">
            <h3 className="font-bold text-lg text-slate-300">Dicas</h3>
            <li className="list-disc">Clique duplo remove jogador</li>
            <li className="list-disc">
              {"Clicar em 'C' dá a faixa de capitão"}
            </li>
            <li className="list-disc">
              {"Botão '11' Mostra / Esconde numeros dos jogadores no campo"}
            </li>
          </ul>
          <br />

          <h3 className="font-bold text-lg text-slate-300">Contato</h3>
          <ul className="text-sm">
            {" "}
            sugestões ou feedbacks:
            <li>email: raphael.mm.91@gmail.com</li>
            <li>twitter: @RaphaelmDev</li>
            <li>github: github.com/raphaelmmachado</li>
          </ul>
          {/* <p className=" text-slate-300">
            sugestões ou feedbacks : email: raphael.mm.91@gmail.com twitter:
            @RaphaelmDev
          </p> */}
          <div className="modal-action">
            <label htmlFor="info-modal" className="btn text-slate-300">
              OK!
            </label>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
