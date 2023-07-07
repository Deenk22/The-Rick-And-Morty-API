import * as yup from "yup";

const passwordRequires = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please, enter a valid email")
    .required("Required Field"),
  password: yup
    .string()
    .matches(
      passwordRequires,
      "Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit, special characters refused"
    )
    .required("Required Field"),
});
