import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Enter email"),
  password: yup.string().required("Enter password").min(6, "Min length 6"),
});
