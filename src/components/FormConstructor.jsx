import React, { useState } from "react";
import GeneratedForm from "./GeneratedForm";

const FormConstructor = () => {
  const [inputsCount, setInputsCount] = useState(0);
  const [textareasCount, setTextAreasCount] = useState(0);
  const [checkboxesCount, setCheckboxesCount] = useState(0);
  const [formContent, setFormContent] = useState([]);

  const createArray = (length) => {
    return length > 0 ? Array.from({ length }, (_, i) => i) : [];
  };

  const buildForm = (e) => {
    e.preventDefault();
    setFormContent({
      inputs: createArray(inputsCount),
      textAreas: createArray(textareasCount),
      checkboxes: createArray(checkboxesCount),
    });
  };

  return (
    <div>
      <form className="constructorForm" onSubmit={(e) => buildForm(e)}>
        <label htmlFor="inputCount">inputs</label>
        <input
          type="number"
          name="inputCount"
          min={0}
          value={inputsCount}
          onChange={(e) => {
            setInputsCount(e.target.value);
          }}
        />
        <label htmlFor="inputTextArea">TextAreas</label>
        <input
          type="number"
          name="inputTextArea"
          min={0}
          value={textareasCount}
          onChange={(e) => setTextAreasCount(e.target.value)}
        />
        <label htmlFor="inputCheckbox">Checkboxes</label>
        <input
          type="number"
          name="inputCheckbox"
          min={0}
          value={checkboxesCount}
          onChange={(e) => setCheckboxesCount(e.target.value)}
        />
        <input type="submit" value="Создать форму" />
      </form>
      <GeneratedForm formContent={formContent} />
    </div>
  );
};

export default FormConstructor;
