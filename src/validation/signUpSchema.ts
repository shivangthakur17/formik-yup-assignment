import * as Yup from "yup";

export const signUpSchema = Yup.object({

  name: Yup.string()
    .required("Full name required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password required")

});