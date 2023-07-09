import {useFormik} from "formik";
import {LoginSchema} from "./LoginFormSchema";
import {initialValues} from "./utils/LoginForm";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {Alert} from "@mui/material";

export default function LoginForm() {
  const {login, errorMessage} = useUserLoginContext();
  function onSubmit(values, actions) {
    login(values);
    actions.resetForm();
  }
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="email-input"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          className="password-input"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errorMessage ? (
          <Alert variant="filled" severity="warning">
            {errorMessage}
          </Alert>
        ) : null}
        {errors.password && touched.password && <p>{errors.password}</p>}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
