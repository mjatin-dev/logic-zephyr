import Image from "next/image";
export const words = [
  {
    text: "Bringing",
  },
  {
    text: "Your",
  },
  {
    text: "Vision to",
  },
  {
    text: "Life with",
  },
  {
    text: "Our Expertise",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Content = ({
  images,
  description,
}: {
  images: Array<string>;
  description: string;
}) => (
  <div>
    <div className="grid grid-cols-2 gap-4">
      {images?.map((url, key) => (
        <Image
          src={`/images/${url}`}
          alt="timeline image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      ))}
    </div>
    <p className="text-neutral-800 text-left dark:text-neutral-300 text-md md:text-sm font-normal mt-8">
      {description}
    </p>
  </div>
);
export const timelineData = [
  {
    title: "Research and Planning",
    content: (
      <Content
        description="Understanding your business and goals is our first priority. We
      conduct thorough research and planning to create solutions that add
      true value."
        images={["3949228_13488.jpg", "3085411.jpg"]}
      />
    ),
  },
  {
    title: "Workflow Architecture",
    content: (
      <Content
        description="With a clear understanding of your requirements, we design the app
      architecture and establish a detailed workflow, setting the foundation
      for how your app will function."
        images={["121278.jpg", "architects-designers-working-office.jpg"]}
      />
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <Content
        description="Our designers then craft intuitive wireframes and visually compelling
      interfaces using tools like Adobe XD, Photoshop, and UXPin, ensuring
      an optimal user experience."
        images={[
          "banking-app-interface-concept_23-2148590850.jpg",
          "web-page-design-user-interface-template-copy-space.jpg",
        ]}
      />
    ),
  },
  {
    title: "Development and Coding",
    content: (
      <Content
        description="This is where your app begins to take shape. Our developers bring it
      to life by writing clean, robust code that meets your exact
      specifications."
        images={[
          "programming-background-collage_23-2149901789.jpg",
          "html-css-collage-concept_23-2150061955.jpg",
        ]}
      />
    ),
  },
  {
    title: "Testing and Quality Assurance",
    content: (
      <Content
        description="We rigorously test the app for performance, stability, and
      scalability, ensuring it functions smoothly under all conditions and
      is free of any bugs."
        images={[
          "back-view-image-concentrated-young-lady-designer_171337-15698.jpg",
          "standard-quality-control-collage-concept_23-2149595846.jpg",
        ]}
      />
    ),
  },
  {
    title: "Deployment and Ongoing Maintenance",
    content: (
      <Content
        description="Once testing is complete, we deploy the app and provide continuous
      maintenance to keep it running flawlessly, with updates as needed."
        images={[
          "gamer-playing-with.jpg",
          "gaming-concept-illustration_114360-7678.jpg",
        ]}
      />
    ),
  },
  {
    title: "Strategic Scaling and Monetization",
    content: (
      <Content
        description="Finally, we collaborate with you to develop strategies for scaling,
      monetizing, and maximizing user engagement to support your long-term
      growth."
        images={[
          "digital-tablet-online-learning_53876-97299.jpg",
          "high-angle-shot-lock-around-dollar-bill-black-laptop_181624-15454.jpg",
        ]}
      />
    ),
  },
];
