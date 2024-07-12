import React from "react";

const GeneratedForm = ({ formContent }) => {
  const { inputs, textAreas, checkboxes } = formContent;

  const isEmpty =
    (!inputs || inputs.length === 0) &&
    (!textAreas || textAreas.length === 0) &&
    (!checkboxes || checkboxes.length === 0);

  return (
    <div>
      {!isEmpty ? (
        <form className="generatedForm">
          {inputs &&
            inputs.map((el) => (
              <input
                className="formElement"
                key={el}
                placeholder={`input ${el + 1}`}
                type="text"
              />
            ))}
          {textAreas &&
            textAreas.map((el) => (
              <textarea
                className="formElement"
                placeholder={`textarea ${el + 1}`}
                key={el}
              />
            ))}
          {checkboxes &&
            checkboxes.map((el) => (
              <label className="formElement" key={`checkbox-${el}`}>
                <input type="checkbox" />
                Checkbox {el + 1}
              </label>
            ))}
        </form>
      ) : null}
    </div>
  );
};

export default GeneratedForm;
