import { forwardRef, Ref } from "react";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
}

function TextInput(
  { label, name, placeholder }: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameRegex: RegExp = /[^a-zA-ZÀ-ÿ\s]/g;

    if (e.target.name === "name" || e.target.name === "short_name") {
      e.target.value = e.target.value.replace(nameRegex, "");
    }
    if (e.target.name === "img") {
      // Validate URL if the name is 'img'
      if (!isValidUrl(e.target.value)) {
        e.target.setCustomValidity("Por favor, insira uma URL válida.");
      } else {
        e.target.setCustomValidity("");
      }
    }
  };

  function isValidUrl(urlString: string): boolean {
    try {
      // Attempt to create a new URL object.
      // If successful, it's a valid URL string.
      new URL(urlString);
      return true;
    } catch (error) {
      // If the URL constructor throws an error, it's not a valid URL.
      return false;
    }
  }
  return (
    <>
      {" "}
      <label className="label">{label}</label>
      <input
        ref={ref}
        name={name}
        onChange={handleNameChange}
        type="text"
        className="input"
        placeholder={placeholder}
      />{" "}
    </>
  );
}

const TextInputWithRef = forwardRef(TextInput);
export default TextInputWithRef;
