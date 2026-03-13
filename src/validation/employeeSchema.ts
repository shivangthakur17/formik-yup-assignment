import * as Yup from "yup";

export const employeeSchema = Yup.object({

  name: Yup.string()
    .required("Name required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email required"),

  phone: Yup.string()
    .required("Phone required"),

  department: Yup.string()
    .required("Department required"),

  employeeId: Yup.string()
    .required("Employee ID required")

});