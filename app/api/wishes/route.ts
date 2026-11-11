import { NextRequest, NextResponse } from "next/server";
import { addWish, getWishes } from "@/lib/storage";

export async function GET() {
  try {
    const wishes = await getWishes();
    return NextResponse.json(wishes);
  } catch (error) {
    console.error("Error retrieving wishes:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blessings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, event, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please share a heartfelt prayer or dua message." },
        { status: 400 }
      );
    }

    const created = await addWish({
      name: name.trim(),
      event: event || "All Events",
      message: message.trim(),
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Error creating wish:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit your blessing at this time." },
      { status: 500 }
    );
  }
}
