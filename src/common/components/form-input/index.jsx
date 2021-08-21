import React from "react";

function FormInput({ label, name, handleChange, ...otherProps }) {
  return (
    <div className="form-group row">
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input
          className="form-control"
          name={name}
          onChange={(e) => handleChange(e)}
          {...otherProps}
        />
      </div>
    </div>
  );
}

export default FormInput;
