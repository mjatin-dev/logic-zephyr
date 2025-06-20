"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  message: string;
}
interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  purpose?: string;
  message?: string;
}
export function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isAgreed, setIsAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.purpose) newErrors.purpose = "Purpose is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!isAgreed) {
      alert("You must agree to be contacted before submitting the form.");
      return;
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Simulate successful submission
    toast.success("Your message has been sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      purpose: "",
      message: "",
    });
    setIsAgreed(false);
    setStatus(""); // Clear status since we're no longer using it
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="purpose">Purpose</Label>
          <Input
            id="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Purpose to Connect"
          />
          {errors.purpose && (
            <p className="text-red-500 text-sm">{errors.purpose}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </LabelInputContainer>

        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            id="agreement"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="agreement"
            className="ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-300"
          >
            I agree to be contacted based on the information provided.
          </label>
        </div>

        <Button
          className="w-full bg-blue-600 text-white p-3 rounded-md"
          type="submit"
          disabled={!isAgreed}
        >
          Submit
        </Button>

        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
