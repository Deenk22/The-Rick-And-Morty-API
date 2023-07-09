import * as yup from "yup";

const passwordRequires = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please, enter a valid email"),
  password: yup
    .string()
    .matches(passwordRequires, "Min 5 characters and " + "1 upper case letter"),
});
