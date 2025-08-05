import { forwardRef, Ref } from "react";

const CountriesInputWithRef = forwardRef(CountriesInput);
export default CountriesInputWithRef;

function CountriesInput({}, ref: Ref<HTMLSelectElement>) {
  // This component renders a select input for countries
  return (
    <>
      <label className="label">Pais</label>
      <select className="select" defaultValue="Brasil" ref={ref}>
        <option value="" disabled>
          Selecione um país
        </option>
        <option value="BR">Brasil</option>
        <option value="AR">Argentina</option>
        <option value="US">Estados Unidos</option>
        <option value="FR">França</option>
        <option value="DE">Alemanha</option>
        <option value="IT">Itália</option>
        <option value="ES">Espanha</option>
        <option value="PT">Portugal</option>
        <option value="GB">Reino Unido</option>
        <option value="NL">Holanda</option>
        <option value="BE">Bélgica</option>
        <option value="CH">Suíça</option>
        <option value="RU">Rússia</option>
        <option value="JP">Japão</option>
        <option value="KR">Coreia do Sul</option>
        <option value="CN">China</option>
        <option value="MX">México</option>
        <option value="CO">Colômbia</option>
        <option value="CL">Chile</option>
        <option value="UY">Uruguai</option>
        <option value="PE">Peru</option>
        <option value="EC">Equador</option>
        <option value="CA">Canadá</option>
        <option value="AU">Austrália</option>
        <option value="ZA">África do Sul</option>
        <option value="NG">Nigéria</option>
        <option value="EG">Egito</option>
        <option value="TR">Turquia</option>
        <option value="GR">Grécia</option>
        <option value="SE">Suécia</option>
        <option value="NO">Noruega</option>
        <option value="DK">Dinamarca</option>
        <option value="FI">Finlândia</option>
        <option value="PL">Polônia</option>
        <option value="CZ">Tchéquia</option>
        <option value="AT">Áustria</option>
        <option value="HU">Hungria</option>
        <option value="HR">Croácia</option>
        <option value="RO">Romênia</option>
        <option value="SK">Eslováquia</option>
        <option value="BG">Bulgária</option>
        <option value="RS">Sérvia</option>
        <option value="UA">Ucrânia</option>
        <option value="IE">Irlanda</option>
        <option value="CH">Suíça</option>
        <option value="SA">Arábia Saudita</option>
        <option value="IN">Índia</option>
      </select>{" "}
    </>
  );
}
