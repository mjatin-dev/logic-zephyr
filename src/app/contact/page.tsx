import { ContactUsForm } from "@/components/shared/ContactUsForm";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-screen min-h-screen h-full">
      {/* Hero Section */}
      <div className="h-[100vh] pt-[80px]">
        <WavyBackground className="max-w-4xl mx-auto pb-20 md:pb-40">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Let’s Build Together
          </p>
          <p className="text-sm sm:text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Your Vision, Our Expertise—Get in Touch Today!
          </p>
        </WavyBackground>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto flex flex-col md:flex-row max-w-6xl gap-10 items-start md:items-center justify-between p-5">
        <div className="w-full md:w-1/2 self-start ">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 text-center md:text-left">
            Get in Touch With Us
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 dark:text-neutral-300 text-center md:text-left">
            We’re here to assist you! Whether you have questions, feedback, or
            need support, our team is ready to help. Fill out the form below,
            and we’ll get back to you promptly.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
