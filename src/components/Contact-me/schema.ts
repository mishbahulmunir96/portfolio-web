import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid e‑mail").required("E‑mail is required"),
  phone: Yup.string().matches(/^(\+?\d{7,15})?$/, "Invalid phone number"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
