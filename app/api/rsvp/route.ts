import { NextRequest, NextResponse } from "next/server";
import { addRSVP, getRSVPs } from "@/lib/storage";

export async function GET() {
  try {
    const rsvps = await getRSVPs();

    // Calculate helpful event attendance metrics
    let totalGuestsEstimate = 0;
    let mehndiCount = 0;
    let baratCount = 0;
    let walimaCount = 0;

    for (const item of rsvps) {
      const g = parseInt(item.guests, 10) || 1;
      totalGuestsEstimate += g;
      if (item.attending?.mehndi) mehndiCount += g;
      if (item.attending?.barat) baratCount += g;
      if (item.attending?.walima) walimaCount += g;
    }

    return NextResponse.json({
      success: true,
      totalEntries: rsvps.length,
      stats: {
        totalGuestsEstimate,
        mehndiCount,
        baratCount,
        walimaCount,
      },
      rsvps,
    });
  } catch (error) {
    console.error("Error retrieving RSVPs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch RSVP entries" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, guests, dietary, attending, notes } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid guest name or family name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid WhatsApp or phone contact." },
        { status: 400 }
      );
    }

    const attendingParsed = {
      mehndi: Boolean(attending?.mehndi),
      barat: Boolean(attending?.barat),
      walima: Boolean(attending?.walima),
    };

    // If none explicitly checked, default to true for all
    if (!attendingParsed.mehndi && !attendingParsed.barat && !attendingParsed.walima) {
      attendingParsed.mehndi = true;
      attendingParsed.barat = true;
      attendingParsed.walima = true;
    }

    const record = await addRSVP({
      name: name.trim(),
      phone: phone.trim(),
      guests: guests || "2",
      dietary: dietary || "Standard Banquet",
      attending: attendingParsed,
      notes: typeof notes === "string" ? notes.trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Shukriya! Your RSVP has been graciously recorded.",
        rsvp: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving RSVP:", error);
    return NextResponse.json(
      { success: false, error: "Unable to record RSVP at this time. Please try again." },
      { status: 500 }
    );
  }
}
