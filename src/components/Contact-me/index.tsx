"use client";
import { useFormik } from "formik";
import Container from "../Container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ContactSchema } from "./schema";

const ContactMe = () => {
  const formEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          alert("Message sent successfully!");
          resetForm();
        } else {
          throw new Error("Formspree error");
        }
      } catch (error) {
        console.log(error);
        alert("Failed to send message, please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container id="contact" sectionClassName="relative bg-[#34353A] py-12">
      <div className="absolute left-0 top-0 flex h-1 w-full justify-between">
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
      </div>
      <h1 className="absolute -top-6 left-[490px] mb-6 text-center text-5xl font-semibold text-slate-50">
        Contact Me
      </h1>

      <div className="flex w-full flex-col items-center gap-4">
        <form
          onSubmit={formik.handleSubmit}
          className="span mt-8 grid w-full grid-cols-2 gap-4"
        >
          <div>
            <Input
              name="name"
              placeholder="Enter Your Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {!!formik.touched.name && !!formik.errors.name ? (
              <p className="text-xs text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {!!formik.touched.email && !!formik.errors.email ? (
              <p className="text-xs text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />

            {!!formik.touched.phone && !!formik.errors.phone ? (
              <p className="text-xs text-red-500">{formik.errors.phone}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="subject"
              type="text"
              placeholder="Enter Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />

            {!!formik.touched.subject && !!formik.errors.subject ? (
              <p className="text-xs text-red-500">{formik.errors.subject}</p>
            ) : null}
          </div>

          <div className="col-span-2">
            <Textarea
              name="message"
              placeholder="Type Your Message"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            {!!formik.touched.message && !!formik.errors.message ? (
              <p className="text-xs text-red-500">{formik.errors.message}</p>
            ) : null}
          </div>

          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-[#ECBB67] text-black hover:bg-[#F0BF6C]"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 left-0 flex h-1 w-full justify-between">
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
      </div>
    </Container>
  );
};

export default ContactMe;
