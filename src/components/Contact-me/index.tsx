import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactMe = () => {
  return (
    <Container sectionClassName="relative bg-[#34353A] py-12">
      <div className="absolute left-0 top-0 flex h-1 w-full justify-between">
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-1/3 rounded-xl bg-[#ECBB67]"></div>
      </div>
      <h1 className="absolute -top-6 left-[490px] mb-6 text-center text-5xl font-semibold text-slate-50">
        Contact Me
      </h1>
      <div>
        <div className="flex w-full flex-col items-center gap-4">
          <form action="" className="span mt-8 grid w-full grid-cols-2 gap-4">
            <Input name="name" type="text" placeholder="Enter Your Name" />
            <Input name="email" type="email" placeholder="Enter Your Email" />
            <Input
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
            />
            <Input name="subject" type="text" placeholder="Enter Subject" />
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="col-span-2"
            />
          </form>
          <Button className="bg-[#ECBB67] text-black hover:bg-[#F0BF6C] hover:font-semibold">
            Send Message
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex h-1 w-full justify-between">
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
        <div className="w-2/5 rounded-xl bg-[#ECBB67]"></div>
      </div>
    </Container>
  );
};

export default ContactMe;
