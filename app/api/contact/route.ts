import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { generateContactEmailHtml } from "@/lib/emailTemplate";

// Helper to reliably retrieve environment variable even if dev server started before .env.local was created
function getEnvVariable(key: string): string | undefined {
  if (process.env[key]) {
    return process.env[key];
  }
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(new RegExp(`^${key}=(.*)$`, "m"));
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  } catch (err) {
    console.error(`Failed to read ${key} from .env.local:`, err);
  }
  return undefined;
}

// Standard RFC 5322 compatible email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const apiKey = getEnvVariable("RESEND_API_KEY");
    if (!apiKey) {
      console.error("[Contact API] Missing RESEND_API_KEY.");
      return NextResponse.json(
        { error: "Server email configuration is missing. Please check your setup." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validate Name
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    // 2. Validate Email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@company.com)." },
        { status: 400 }
      );
    }

    // 3. Validate Message
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter your message." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    const recipientEmail =
      getEnvVariable("CONTACT_RECEIVER_EMAIL") || "rahulnimbalkar8421@gmail.com";
    const cleanedName = name.trim().slice(0, 100);
    const cleanedSubject =
      subject && typeof subject === "string" && subject.trim()
        ? subject.trim().slice(0, 200)
        : "Portfolio Contact Inquiry";
    const cleanedMessage = trimmedMessage.slice(0, 5000);

    // Generate responsive HTML template
    const htmlEmail = generateContactEmailHtml({
      name: cleanedName,
      email: trimmedEmail,
      subject: cleanedSubject,
      message: cleanedMessage,
    });

    // Send email using Resend
    const response = await resend.emails.send({
      from: "Rahul Portfolio <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: `[Portfolio] ${cleanedSubject} - from ${cleanedName}`,
      html: htmlEmail,
      text: `New Portfolio Message\n\nFrom: ${cleanedName} (${trimmedEmail})\nSubject: ${cleanedSubject}\n\nMessage:\n${cleanedMessage}`,
    });

    if (response.error) {
      console.error("[Contact API] Resend error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Failed to send message via Resend." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        id: response.data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorDetails = err instanceof Error ? err.message : String(err);
    console.error("[Contact API] Unexpected error:", errorDetails);
    return NextResponse.json(
      { error: `An unexpected error occurred: ${errorDetails}` },
      { status: 500 }
    );
  }
}
