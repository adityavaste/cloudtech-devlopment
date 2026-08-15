import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, plan, source = "hero_section", page = "/" } = body;

    // SCENARIO 1: Full Lead Form Submission (Name, Email, Phone, Plan)
    if (name || plan) {
      if (!name || !email || !phone || !plan) {
        return NextResponse.json(
          { error: "Missing required fields for lead submission" },
          { status: 400 }
        );
      }

      const webhookUrl = process.env.MAKE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("MAKE_WEBHOOK_URL environment variable is not defined");
      }

      const formattedDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: formattedDate,
          name,
          email,
          phone,
          plan,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed forwarding lead to Make.com webhook");
      }

      return NextResponse.json({ success: true, message: "Lead captured!" });
    }

    // SCENARIO 2: Email-only Submission (Newsletter / Audit / Free Plan signup)
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    const appsScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!appsScriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL environment variable is not defined");
    }

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, page }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        { error: `Google Script returned ${response.status}: ${responseText}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, scriptResponse: responseText });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}