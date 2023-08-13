import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-[60%] pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <h3 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize mb-10">
          Contact me
        </h3>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col lgl:flex-row justify-between gap-8">
          <ContactLeft />
          <ContactRight/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
