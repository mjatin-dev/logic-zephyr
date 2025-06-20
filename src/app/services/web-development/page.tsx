import ServicesLayout from "@/components/services/ServicesLayout";
import React from "react";

const WebDevelopment = () => {
  return (
    <ServicesLayout service="Web Development">
      <div className="h-full min-h-screen w-full overflow-auto">
        <h2>Enterprise Web Development</h2>
        <p>
          Enhance your online business management with our tailored enterprise
          web solutions, designed to meet your unique digital needs.
        </p>
      </div>
    </ServicesLayout>
  );
};

export default WebDevelopment;
