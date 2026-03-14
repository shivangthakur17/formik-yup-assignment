import * as Yup from "yup";

export const employeeSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  employeeId: Yup.string().required("Employee ID is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone must be at least 10 digits")
    .required("Phone number is required"),
  department: Yup.string().required("Department is required")
});