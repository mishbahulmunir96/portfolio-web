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
    <Container id="contact" sectionClassName="relative bg-[#34353A] py-12 px-4">
      <div className="absolute left-0 top-0 flex h-1 w-full justify-between px-4 sm:px-8">
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
      </div>

      <div className="mb-8 pt-4">
        <h1 className="text-center text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl">
          Contact Me
        </h1>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <form
          onSubmit={formik.handleSubmit}
          className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div>
            <Input
              name="name"
              placeholder="Enter Your Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full"
            />
            {!!formik.touched.name && !!formik.errors.name ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
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
              className="w-full"
            />
            {!!formik.touched.email && !!formik.errors.email ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
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
              className="w-full"
            />
            {!!formik.touched.phone && !!formik.errors.phone ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.phone}</p>
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
              className="w-full"
            />
            {!!formik.touched.subject && !!formik.errors.subject ? (
              <p className="mt-1 text-xs text-red-500">
                {formik.errors.subject}
              </p>
            ) : null}
          </div>

          <div className="col-span-1 sm:col-span-2">
            <Textarea
              name="message"
              placeholder="Type Your Message"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full resize-none"
            />
            {!!formik.touched.message && !!formik.errors.message ? (
              <p className="mt-1 text-xs text-red-500">
                {formik.errors.message}
              </p>
            ) : null}
          </div>

          <div className="col-span-1 flex justify-center sm:col-span-2">
            <Button
              type="submit"
              className="w-full bg-[#ECBB67] px-8 py-2 text-black hover:bg-[#F0BF6C] sm:w-auto"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 left-0 flex h-1 w-full justify-between px-4 sm:px-8">
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
      </div>
    </Container>
  );
};

export default ContactMe;
