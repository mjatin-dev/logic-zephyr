import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, purpose, message } = body;

    if (!name || !phone || !email || !purpose || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your-gmail-username@gmail.com",
        pass: "your-gmail-app-password",
      },
    });

    const mailOptions = {
      from: `"Contact Form" <your-gmail-username@gmail.com>`,
      to: "kmxhit@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Purpose: ${purpose}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
