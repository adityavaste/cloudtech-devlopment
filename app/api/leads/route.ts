import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

   const {
  name = "",
  email = "",
  phoneNumber = "",
  dscType = "",
  howUrgent = "",
  page = "/",
  businessType = "",
  businessSize = "",
  tradeType = "",
  state = "",
   employees = "",
} = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      throw new Error("GOOGLE_SCRIPT_URL is not configured");
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  name,
  email,
  phoneNumber,
  dscType,
  howUrgent,
  page,
  businessType,
  businessSize,
  tradeType,
  state,
   employees,
}),
    });

    const responseText = await response.text();

    console.log("Apps Script status:", response.status);
    console.log("Apps Script response:", responseText);

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      throw new Error(
        `Apps Script returned invalid JSON: ${responseText.slice(0, 500)}`
      );
    }

    if (!data.success) {
      return NextResponse.json(
        { error: data.error || "Script failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Lead save error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}