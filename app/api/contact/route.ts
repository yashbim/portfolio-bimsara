import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const emailResponse = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>", // Must be a verified domain in Resend
      to: "ybimsara03@gmail.com", // Replace with your email
      subject: subject || `Someone seeks your services :) - ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}