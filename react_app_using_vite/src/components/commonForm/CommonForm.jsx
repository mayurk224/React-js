import React from "react";
import CommonInput from "../commonInput/CommonInput";
import CommonTextArea from "../commonInput/CommonTextArea";
import CommonSelect from "../commonInput/CommonSelect";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  handleSubmit,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        );
        break;

      case formTypes.TEXTAREA:
        content = (
          <CommonTextArea
            id={getCurrentElement.id}
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.value]}
            cols={getCurrentElement.cols}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        );
        break;

      case formTypes.SELECT:
        content = (
          <CommonSelect
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            label={getCurrentElement.label}
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            type={getCurrentElement.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={handleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElement, index) =>
            renderFormElement(singleFormElement, {
              key: singleFormElement.id || index,
            })
          )
        : null}
      <div>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;
