import fs from "fs";
import path from "path";

export interface RSVPRecord {
  id: string;
  name: string;
  phone: string;
  guests: string;
  dietary?: string;
  attending: {
    mehndi: boolean;
    barat: boolean;
    walima: boolean;
  };
  notes?: string;
  createdAt: string;
}

export interface WishRecord {
  id: number;
  name: string;
  event: string;
  note: string;
  date: string;
  accent: string;
  createdAt: string;
}

// Initial default duas & blessings
const INITIAL_WISHES: WishRecord[] = [
  {
    id: 1,
    name: "Tariq & Nighat Begum",
    event: "All Celebrations",
    note: "Barakallahu Lakuma wa Baraka Alaikuma. May Allah swt bless this sacred union with peace, laughter and eternal mercy.",
    date: "Nov 12",
    accent: "border-[#C99738]/50",
    createdAt: new Date("2026-11-12T10:00:00Z").toISOString(),
  },
  {
    id: 2,
    name: "Chachi Begum & Family",
    event: "Barat & Walima",
    note: "Daniyal and Ayla, praying for an eternity of tranquility and mutual kindness. So thrilled for both noble families!",
    date: "Nov 14",
    accent: "border-[#9E2A2B]/40",
    createdAt: new Date("2026-11-14T14:30:00Z").toISOString(),
  },
  {
    id: 3,
    name: "Sahar & The Cousins Gang",
    event: "Mehndi Night",
    note: "All set with mustard yellow dupattas, fresh motia gazras, and dance routines for our gorgeous bride!",
    date: "Nov 15",
    accent: "border-[#D97706]/40",
    createdAt: new Date("2026-11-15T18:00:00Z").toISOString(),
  },
  {
    id: 4,
    name: "Uncle Junaid & Fam (London)",
    event: "All Events",
    note: "Heartiest congratulations to both the Noor and Qureshi families. Counting down the days to celebrate in Lahore!",
    date: "Nov 16",
    accent: "border-[#1E3A5F]/40",
    createdAt: new Date("2026-11-16T12:00:00Z").toISOString(),
  },
];

// In-memory cache for fast serverless responses
declare global {
  // eslint-disable-next-line no-var
  var __wedding_rsvps: RSVPRecord[] | undefined;
  // eslint-disable-next-line no-var
  var __wedding_wishes: WishRecord[] | undefined;
}

const memoryRSVPs: RSVPRecord[] = global.__wedding_rsvps || [];
global.__wedding_rsvps = memoryRSVPs;

const memoryWishes: WishRecord[] = global.__wedding_wishes || [...INITIAL_WISHES];
global.__wedding_wishes = memoryWishes;

// Determine writable data file paths (works in local dev and Vercel /tmp)
function getDataFilePath(filename: string): string {
  // Check if local project data directory is writable
  const localDir = path.join(process.cwd(), "data");
  try {
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    return path.join(localDir, filename);
  } catch {
    // In Vercel serverless environment, use /tmp
    const tmpDir = path.join("/tmp", "wedding-data");
    try {
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      return path.join(tmpDir, filename);
    } catch {
      return path.join("/tmp", filename);
    }
  }
}

// ─── RSVPs ─────────────────────────────────────────────────────────────
export async function getRSVPs(): Promise<RSVPRecord[]> {
  const filePath = getDataFilePath("rsvps.json");
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        global.__wedding_rsvps = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Storage read fallback to memory:", err);
  }
  return global.__wedding_rsvps || [];
}

export async function addRSVP(data: Omit<RSVPRecord, "id" | "createdAt">): Promise<RSVPRecord> {
  const newRecord: RSVPRecord = {
    ...data,
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  const current = await getRSVPs();
  const updated = [newRecord, ...current];
  global.__wedding_rsvps = updated;

  const filePath = getDataFilePath("rsvps.json");
  try {
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write RSVP to filesystem (running in memory):", err);
  }

  return newRecord;
}

// ─── WISHES ────────────────────────────────────────────────────────────
export async function getWishes(): Promise<WishRecord[]> {
  const filePath = getDataFilePath("wishes.json");
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        global.__wedding_wishes = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Wishes storage read fallback to memory:", err);
  }
  return global.__wedding_wishes || [...INITIAL_WISHES];
}

export async function addWish(data: { name: string; event: string; message: string }): Promise<WishRecord> {
  let accent = "border-[#C99738]/50";
  if (data.event.includes("Walima")) accent = "border-[#1E3A5F]/50";
  else if (data.event.includes("Barat")) accent = "border-[#881337]/50";
  else if (data.event.includes("Mehndi")) accent = "border-[#D97706]/50";

  const newWish: WishRecord = {
    id: Date.now(),
    name: data.name.trim(),
    event: data.event,
    note: data.message.trim(),
    date: "Just now",
    accent,
    createdAt: new Date().toISOString(),
  };

  const current = await getWishes();
  const updated = [newWish, ...current];
  global.__wedding_wishes = updated;

  const filePath = getDataFilePath("wishes.json");
  try {
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write wishes to filesystem (running in memory):", err);
  }

  return newWish;
}
