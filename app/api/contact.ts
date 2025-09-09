import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>", // Must be a verified domain in Resend
      to: "ybimsara03@gmail.com", // Replace with your email
      subject: subject || `Someones seeks your services :) - ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
