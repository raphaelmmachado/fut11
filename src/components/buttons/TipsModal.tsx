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
            <h3 className="font-bold text-lg text-slate-300">Dicas</h3>
            <li className="list-disc">
              Clique duplo remove jogador (se estiver usando mouse)
            </li>
            <li className="list-disc">
              {"Clicar em 'C' dá a faixa de capitão"}
            </li>
            <li className="list-disc">
              {"Botão 'camisa' mostra / esconde números dos jogadores em campo"}
            </li>
          </ul>
          <br />

          <h3 className="font-bold text-lg text-slate-300">Autor</h3>
          <p className="">Raphael Machado - raphael.mm.91@gmail.com</p>
          <br />
          <a
            href="https://github.com/raphaelmmachado"
            target="_blank"
            className="text-blue-400"
          >
            Github
          </a>
          {/* <ul className="text-sm">
            {" "}
            sugestões ou feedbacks:
            <li>email: raphael.mm.91@gmail.com</li>
            <li>twitter: @RaphaelmDev</li>
            <li>github: github.com/raphaelmmachado</li>
          </ul> */}

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
