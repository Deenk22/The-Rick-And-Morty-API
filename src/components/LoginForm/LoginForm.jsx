import {useFormik} from "formik";
import {LoginSchema} from "./LoginFormSchema";
import {initialValues} from "./utils/LoginForm";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function LoginForm() {
  const {login} = useUserLoginContext();
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
        <label htmlFor="email"> </label>
        <input
          className="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Example: ian55@gmail.com"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}

        <label htmlFor="password"> </label>
        <input
          className="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Your password here"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
