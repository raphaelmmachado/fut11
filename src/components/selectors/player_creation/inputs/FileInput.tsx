interface FileInputProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreviewUrl: string | null;
}
export default function FileInput({
  handleFileChange,
  imagePreviewUrl,
}: FileInputProps) {
  return (
    <>
      {" "}
      <label className="label">Enviar Foto</label>
      <input type="file" className="file-input" onChange={handleFileChange} />
      {/* Prévia da imagem selecionada */}
      {imagePreviewUrl && (
        <div>
          <p>Prévia da Imagem:</p>
          <img
            src={imagePreviewUrl}
            alt="Prévia da Foto"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}{" "}
    </>
  );
}
