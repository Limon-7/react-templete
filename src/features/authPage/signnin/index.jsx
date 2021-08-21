import React from "react";
import FormInput from "../../../common/components/form-input";
import UseForm from "../../../common/components/hooks/UseForm";
import validate from "../../../common/utils/validate";

function Signin() {
  const [formValues, handleChange] = UseForm({
    email: "liibd7@gmail.com",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    console.log(errors);
    if (Object.keys(errors).length !== 0) {
      return;
    }
    console.log("submitted successfully:", formValues);
  };
  // React.useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     return;
  //   }
  // }, [errors]);
  return (
    <div className="container">
      <h1 className="text-center">Signin Page</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={formValues.email}
          handleChange={(e) => handleChange(e)}
          placeholder="Enter Your Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={formValues.password}
          handleChange={(e) => handleChange(e)}
          placeholder="Enter Your password"
          errors={errors}
        />
        {errors.password && (
          <p className="text-danger text-center">{errors.password}</p>
        )}
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signin;
