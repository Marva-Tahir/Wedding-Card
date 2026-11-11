"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  Send,
  CalendarPlus,
  ChevronRight,
  X,
  CheckCircle2,
  Share2,
  Music2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

// ─── Hanging Brass Lantern (Fanoos) with glowing warm candle light ─────────────
interface HangingFanoosProps {
  chainLength?: number;
  size?: "md" | "lg";
  glowDelay?: string;
  className?: string;
}

const HangingFanoos: React.FC<HangingFanoosProps> = ({
  chainLength = 120,
  size = "md",
  glowDelay = "0s",
  className = "",
}) => {
  const isLg = size === "lg";
  const lanternW = isLg ? 42 : 32;
  const lanternH = isLg ? 74 : 58;

  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`}>
      {/* Delicate Golden Chain */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-[#C49B55] via-[#DEBA7E] to-[#9A7332] shadow-[0_0_3px_rgba(212,175,55,0.5)]"
        style={{ height: `${chainLength}px` }}
      />
      {/* Top Cap */}
      <div className="w-2.5 h-2 rounded-t-full bg-gradient-to-b from-[#E7C888] to-[#997230]" />

      {/* Ornate Lantern Body */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${lanternW}px`, height: `${lanternH}px` }}
      >
        {/* Warm Radiant Golden Glow Aura */}
        <div
          className="absolute -inset-4 rounded-full bg-amber-400/40 blur-xl animate-pulse"
          style={{ animationDuration: "3.5s", animationDelay: glowDelay }}
        />

        {/* Lantern Glass Frame */}
        <svg
          viewBox="0 0 50 90"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(217,119,6,0.35)]"
          fill="none"
        >
          {/* Top finial loop */}
          <circle cx="25" cy="5" r="3.5" stroke="#BF903A" strokeWidth="1.5" />
          <path d="M25 8.5 L25 12" stroke="#BF903A" strokeWidth="1.5" />

          {/* Dome cap */}
          <path
            d="M10 24 C10 14, 20 12, 25 12 C30 12, 40 14, 40 24 Z"
            fill="url(#goldGrad)"
            stroke="#916422"
            strokeWidth="1"
          />

          {/* Glass chamber */}
          <path
            d="M10 24 L14 70 L36 70 L40 24 Z"
            fill="#FEF3C7"
            fillOpacity="0.45"
            stroke="#A37326"
            strokeWidth="1.2"
          />

          {/* Glass facets & ribs */}
          <line x1="20" y1="24" x2="22" y2="70" stroke="#BF903A" strokeWidth="0.8" opacity="0.8" />
          <line x1="30" y1="24" x2="28" y2="70" stroke="#BF903A" strokeWidth="0.8" opacity="0.8" />

          {/* Bottom base & finial */}
          <path d="M13 70 L25 84 L37 70 Z" fill="url(#goldGrad)" stroke="#916422" strokeWidth="1" />
          <circle cx="25" cy="86" r="2" fill="#D4AF37" />

          {/* Internal Candle Flame */}
          <circle cx="25" cy="46" r="6" fill="#F59E0B" opacity="0.85" />
          <circle cx="25" cy="45" r="3" fill="#FFFBEB" />

          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5D77F" />
              <stop offset="50%" stopColor="#C99738" />
              <stop offset="100%" stopColor="#784E11" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// ─── Cascading Floral Vines & Ivory/Blush Roses ───────────────────────────────
const FloralGarland = ({ orientation = "left" }: { orientation?: "left" | "right" }) => {
  const isLeft = orientation === "left";
  return (
    <svg
      viewBox="0 0 280 400"
      className={`w-44 sm:w-64 md:w-80 pointer-events-none select-none drop-shadow-md ${
        isLeft ? "" : "scale-x-[-1]"
      }`}
      fill="none"
    >
      <path
        d="M20 10 Q 70 80 50 160 T 40 280 T 25 380"
        stroke="#4A5D44"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M60 20 Q 120 110 80 200 T 70 320"
        stroke="#596D52"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />

      {[
        { cx: 35, cy: 60, r: 12, rot: 35, col: "#4D6345" },
        { cx: 55, cy: 110, r: 14, rot: -25, col: "#5E7854" },
        { cx: 45, cy: 170, r: 13, rot: 40, col: "#4A5D44" },
        { cx: 65, cy: 230, r: 11, rot: -30, col: "#68845E" },
        { cx: 35, cy: 290, r: 10, rot: 20, col: "#506647" },
        { cx: 28, cy: 340, r: 9, rot: -15, col: "#5E7854" },
      ].map((leaf, idx) => (
        <path
          key={idx}
          d={`M ${leaf.cx} ${leaf.cy} C ${leaf.cx + 10} ${leaf.cy - 12}, ${
            leaf.cx + 18
          } ${leaf.cy + 4}, ${leaf.cx} ${leaf.cy + 16} C ${leaf.cx - 8} ${
            leaf.cy + 8
          }, ${leaf.cx} ${leaf.cy}, ${leaf.cx} ${leaf.cy}`}
          fill={leaf.col}
          transform={`rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`}
          opacity="0.9"
        />
      ))}

      {/* Big Rose 1 */}
      <g transform="translate(65, 45)">
        <circle cx="0" cy="0" r="22" fill="#E8D5CE" opacity="0.6" />
        <circle cx="0" cy="0" r="18" fill="#FDF7F4" />
        <circle cx="0" cy="0" r="13" fill="#F5E3DC" />
        <path
          d="M -6 -4 Q 0 -11 6 -4 Q 10 3 0 8 Q -10 3 -6 -4"
          fill="#E7C6BB"
          stroke="#D8A99B"
          strokeWidth="1"
        />
        <circle cx="0" cy="0" r="4" fill="#C58E7E" />
      </g>

      {/* Ivory Hydrangea Cluster */}
      <g transform="translate(130, 30)">
        <circle cx="-10" cy="-6" r="12" fill="#FCF9F6" stroke="#E8E0D7" strokeWidth="0.8" />
        <circle cx="8" cy="-8" r="11" fill="#FFFDFB" stroke="#E8E0D7" strokeWidth="0.8" />
        <circle cx="2" cy="8" r="13" fill="#F5EDE4" stroke="#E4D8CD" strokeWidth="0.8" />
        <circle cx="-6" cy="4" r="9" fill="#FFF" />
      </g>

      {/* Dusty Pink English Rose */}
      <g transform="translate(100, 95)">
        <circle cx="0" cy="0" r="17" fill="#F7ECE9" stroke="#E6D0CA" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="12" fill="#F1D7D0" />
        <circle cx="0" cy="0" r="7" fill="#DEB0A5" />
        <circle cx="0" cy="0" r="3" fill="#B87D70" />
      </g>

      {/* Trailing Small Blossoms */}
      <g transform="translate(48, 205)">
        <circle cx="0" cy="0" r="11" fill="#FDFBF9" stroke="#E5DDD3" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="6" fill="#F6E4DE" />
      </g>

      <g transform="translate(38, 265)">
        <circle cx="0" cy="0" r="9" fill="#F9F4EE" stroke="#E5D9CC" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="4" fill="#EBD2C7" />
      </g>
    </svg>
  );
};

// ─── Data Types ───────────────────────────────────────────────────────────────
interface Wish {
  id: number;
  name: string;
  event: string;
  note: string;
  date: string;
  accent: string;
}

interface WeddingEvent {
  id: "mehndi" | "barat" | "walima";
  title: string;
  subtitle: string;
  urduTitle: string;
  dateStr: string;
  time: string;
  venue: string;
  city: string;
  mapQuery: string;
  calendarDate: string;
  themeAccent: string;
  headerColor: string;
  tagColor: string;
  badge: string;
  tagline: string;
  dressCode: string;
  swatches: string[];
  bgStyle: string;
  bgImage: string;
  bannerGradient: string;
  archBorder: string;
  buttonBg: string;
  schedule: { time: string; activity: string }[];
  highlights: string;
}

interface RSVPRecord {
  id: string;
  name: string;
  phone: string;
  guests: string;
  dietary?: string;
  attending: { mehndi: boolean; barat: boolean; walima: boolean };
  createdAt: string;
}

// ─── Main Application Component ───────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedEventModal, setSelectedEventModal] = useState<WeddingEvent | null>(null);
  const [rsvpOpen, setRsvpOpen] = useState<boolean>(false);
  const [guestlistOpen, setGuestlistOpen] = useState<boolean>(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // ── Live Countdown Timer ──
  const weddingDate = new Date("2026-11-26T19:00:00+05:00");
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ── Web Audio Sitar / Tanpura Harmonic Drone ──
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<(OscillatorNode)[]>([]);

  const toggleMusic = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (isPlayingMusic) {
      nodesRef.current.forEach((n) => {
        try {
          n.stop();
        } catch {}
      });
      nodesRef.current = [];
      setIsPlayingMusic(false);
    } else {
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      playRegalSitarChord();
      setIsPlayingMusic(true);
    }
  };

  const playRegalSitarChord = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const baseFreqs = [146.83, 220.0, 293.66, 369.99, 440.0, 587.33];
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.045, ctx.currentTime);
    masterGain.connect(ctx.destination);

    baseFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.16 + idx * 0.035;
      lfoGain.gain.value = 0.85;
      lfo.connect(osc.frequency);
      lfo.start();

      if (pan) {
        pan.pan.value = idx % 2 === 0 ? -0.3 : 0.3;
        osc.connect(pan);
        pan.connect(masterGain);
      } else {
        osc.connect(masterGain);
      }
      osc.start();
      nodesRef.current.push(osc, lfo);
    });
  };

  // ── Guestbook Duas State ──
  const defaultWishes: Wish[] = [
    {
      id: 1,
      name: "Tariq & Nighat Begum",
      event: "All Celebrations",
      note: "Barakallahu Lakuma wa Baraka Alaikuma. May Allah swt bless this sacred union with peace, laughter and eternal mercy.",
      date: "Nov 12",
      accent: "border-[#C99738]/50",
    },
    {
      id: 2,
      name: "Chachi Begum & Family",
      event: "Barat & Walima",
      note: "Daniyal and Ayla, praying for an eternity of tranquility and mutual kindness. So thrilled for both noble families!",
      date: "Nov 14",
      accent: "border-[#9E2A2B]/40",
    },
    {
      id: 3,
      name: "Sahar & The Cousins Gang",
      event: "Mehndi Night",
      note: "All set with mustard yellow dupattas, fresh motia gazras, and dance routines for our gorgeous bride!",
      date: "Nov 15",
      accent: "border-[#D97706]/40",
    },
  ];

  const [wishes, setWishes] = useState<Wish[]>(defaultWishes);
  const [newNote, setNewNote] = useState({ name: "", event: "All Events", message: "" });
  const [noteSent, setNoteSent] = useState(false);
  const [wishSubmitting, setWishSubmitting] = useState(false);

  // Load live wishes from backend API
  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWishes(data);
        }
      })
      .catch((err) => console.log("Using cached wishes:", err));
  }, []);

  const handleNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.name.trim() || !newNote.message.trim()) return;
    setWishSubmitting(true);

    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });

      if (res.ok) {
        const created = await res.json();
        setWishes((prev) => [created, ...prev]);
      } else {
        const fallbackWish: Wish = {
          id: Date.now(),
          name: newNote.name.trim(),
          event: newNote.event,
          note: newNote.message.trim(),
          date: "Just now",
          accent: "border-[#C99738]/60",
        };
        setWishes((prev) => [fallbackWish, ...prev]);
      }
    } catch {
      const fallbackWish: Wish = {
        id: Date.now(),
        name: newNote.name.trim(),
        event: newNote.event,
        note: newNote.message.trim(),
        date: "Just now",
        accent: "border-[#C99738]/60",
      };
      setWishes((prev) => [fallbackWish, ...prev]);
    } finally {
      setNewNote({ name: "", event: "All Events", message: "" });
      setNoteSent(true);
      setWishSubmitting(false);
      setTimeout(() => setNoteSent(false), 3800);
    }
  };

  // ── RSVP Form State ──
  const [rsvpData, setRsvpData] = useState({
    name: "",
    phone: "",
    guests: "2",
    dietary: "Standard Banquet",
    attending: { mehndi: true, barat: true, walima: true },
  });
  const [rsvpDone, setRsvpDone] = useState(false);
  const [rsvpSubmitting, setRsvpSubmitting] = useState(false);
  const [rsvpError, setRsvpError] = useState("");

  // Host RSVP Guestlist state
  const [hostRsvps, setHostRsvps] = useState<RSVPRecord[]>([]);
  const [hostStats, setHostStats] = useState({
    totalGuestsEstimate: 0,
    mehndiCount: 0,
    baratCount: 0,
    walimaCount: 0,
  });

  const loadGuestlist = async () => {
    try {
      const res = await fetch("/api/rsvp");
      if (res.ok) {
        const data = await res.json();
        if (data.rsvps) setHostRsvps(data.rsvps);
        if (data.stats) setHostStats(data.stats);
      }
    } catch (err) {
      console.error("Failed to load RSVP guestlist:", err);
    }
  };

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitting(true);
    setRsvpError("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvpData),
      });

      if (res.ok) {
        setRsvpDone(true);
        setTimeout(() => {
          setRsvpDone(false);
          setRsvpOpen(false);
        }, 2800);
      } else {
        const errData = await res.json();
        setRsvpError(errData.error || "Failed to confirm RSVP. Please try again.");
      }
    } catch {
      setRsvpDone(true);
      setTimeout(() => {
        setRsvpDone(false);
        setRsvpOpen(false);
      }, 2800);
    } finally {
      setRsvpSubmitting(false);
    }
  };

  const copyPageShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ You are cordially invited to celebrate the wedding ceremonies of Ayla Noor & Daniyal Qureshi! 🌸\n\n` +
      `📅 Mehndi: 26th Nov 2026 (Haveli Barood Khana)\n` +
      `👑 Barat: 27th Nov 2026 (Royal Palm)\n` +
      `💎 Walima: 29th Nov 2026 (Serena)\n\n` +
      `Kindly view the card & confirm your RSVP here: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  // ── 3 Distinct Wedding Events (Mehndi, Barat, Walima) ──
  const events: WeddingEvent[] = [
    {
      id: "mehndi",
      title: "Rasm-e-Henna & Mehndi",
      subtitle: "The Night of Saffron, Henna & Folk Rhythms",
      urduTitle: "رسمِ حنا و مہندی",
      dateStr: "Thursday, 26th November 2026",
      time: "07:00 PM Onwards",
      venue: "The Courtyard at Haveli Barood Khana",
      city: "Walled City, Lahore",
      mapQuery: "Haveli Barood Khana, Lahore",
      calendarDate: "20261126T190000Z/20261126T233000Z",
      themeAccent: "from-[#D97706] to-[#B45309]",
      headerColor: "text-[#854D0E]",
      tagColor: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      badge: "The Mehndi Celebration",
      tagline:
        "A vibrant celebratory evening steeped in yellow marigolds, mustard silk, dholak beats, and aromatic motia flowers.",
      dressCode: "Haldi Saffron, Mustard Gold, Parrot Green & Brocade Choli",
      swatches: ["#F59E0B", "#D97706", "#84CC16", "#FEF08A"],
      bgStyle: "border-[#FDE68A] hover:border-[#D97706]/70",
      bgImage: "/images/mehndi.jpg",
      bannerGradient: "from-[#92400E]/90 via-[#D97706]/85 to-[#B45309]/95",
      archBorder: "border-[#D97706]/40",
      buttonBg:
        "bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white shadow-[#D97706]/20",
      schedule: [
        { time: "07:00 PM", activity: "Guest Welcome with Saffron Cardamom Sharbat" },
        { time: "08:00 PM", activity: "Dua-e-Khair & Rasm-e-Henna Ceremony" },
        { time: "09:00 PM", activity: "Traditional Tappay, Luddi, Dholak & Dance Showdowns" },
        { time: "10:30 PM", activity: "Live BBQ, Hot Jalebis & Midnight Masala Chai" },
      ],
      highlights:
        "Live Dholak Master, Henna Artists from Anarkali, Haldi Bar, Authentic Street Kulfi",
    },
    {
      id: "barat",
      title: "Barat & Rukhsati",
      subtitle: "The Royal Union & Sacred Nikah Ceremony",
      urduTitle: "بارات و رخصتی",
      dateStr: "Friday, 27th November 2026",
      time: "08:00 PM Sharp",
      venue: "Bab-ul-Shams Pavilion, Royal Palm",
      city: "Canal Bank Road, Lahore",
      mapQuery: "Royal Palm Golf and Country Club, Lahore",
      calendarDate: "20261127T200000Z/20261128T000000Z",
      themeAccent: "from-[#881337] to-[#4C0519]",
      headerColor: "text-[#881337]",
      tagColor: "bg-[#FFE4E6] text-[#9F1239] border-[#FECDD3]",
      badge: "The Barat Ceremony",
      tagline:
        "An evening of imperial grandeur enveloped in deep crimson velvets, hand-woven Jamawar, and glowing brass lanterns.",
      dressCode: "Velvet Mulberry, Deep Crimson Maroon, Jamawar & Antique Gold",
      swatches: ["#881337", "#4C0519", "#C59B4B", "#FFF1F2"],
      bgStyle: "border-[#FECDD3] hover:border-[#881337]/70",
      bgImage: "/images/barat.jpg",
      bannerGradient: "from-[#4C0519]/95 via-[#881337]/85 to-[#380412]/95",
      archBorder: "border-[#881337]/40",
      buttonBg:
        "bg-gradient-to-r from-[#881337] to-[#50071C] hover:from-[#700F2C] hover:to-[#380412] text-white shadow-[#881337]/20",
      schedule: [
        { time: "08:00 PM", activity: "Baraat Caravan Arrival & Rosewater Spray Istaqbaal" },
        { time: "08:45 PM", activity: "Sacred Nikah Sermon & Signing of the Nikahnama" },
        { time: "09:30 PM", activity: "Royal Awadhi & Dum Pukht Banquet" },
        { time: "11:15 PM", activity: "Doodh Pilai Ceremony & Emotional Rukhsati" },
      ],
      highlights:
        "Traditional Shehnai Recital, Royal Rose Archway, Calligraphed Nikahnama, Kashmiri Chai",
    },
    {
      id: "walima",
      title: "Dawat-e-Walima",
      subtitle: "The Ethereal Slate & Pearlescent Reception",
      urduTitle: "دعوتِ ولیمہ",
      dateStr: "Sunday, 29th November 2026",
      time: "07:30 PM to 11:30 PM",
      venue: "The Grand Crystal Pavilion, Serena",
      city: "Islamabad / Lahore",
      mapQuery: "Serena Hotel",
      calendarDate: "20261129T193000Z/20261129T233000Z",
      themeAccent: "from-[#1E3A5F] to-[#0F1E33]",
      headerColor: "text-[#1E3A5F]",
      tagColor: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
      badge: "The Walima Reception",
      tagline:
        "A refined celebration adorned with soft slate blues, silver filigree, crystal chandeliers, and subtle floral sprays.",
      dressCode: "Powder Blue, Slate Mist, Diamond Silver & Frosted Champagne",
      swatches: ["#1E3A5F", "#4A6B82", "#94A3B8", "#E2E8F0"],
      bgStyle: "border-[#BAE6FD] hover:border-[#1E3A5F]/70",
      bgImage: "/images/walima.jpg",
      bannerGradient: "from-[#0F1E33]/95 via-[#1E3A5F]/85 to-[#0A1422]/95",
      archBorder: "border-[#1E3A5F]/40",
      buttonBg:
        "bg-gradient-to-r from-[#1E3A5F] to-[#0F1E33] hover:from-[#172E4C] hover:to-[#0A1422] text-white shadow-[#1E3A5F]/20",
      schedule: [
        { time: "07:30 PM", activity: "Welcome Reception with Flute & Harp Harmonies" },
        { time: "08:30 PM", activity: "Grand Entrance of Newlyweds under Crystal Chandelier" },
        { time: "09:30 PM", activity: "Artisanal Continental & Royal Mughlai Dawat" },
        { time: "10:45 PM", activity: "Family Portraitures & Parting Souvenirs" },
      ],
      highlights:
        "Ambient String Ensemble, Ice Sculptures, White Orchid Displays, Pistachio Kulfi",
    },
  ];

  const displayedEvents =
    activeTab === "all" ? events : events.filter((e) => e.id === activeTab);

  return (
    <div className="min-h-screen text-[#2C241E] font-sans antialiased selection:bg-[#EAD0A2] selection:text-[#2C241E] relative overflow-x-hidden">
      
      {/* 🏛️ MUGHAL ARCHITECTURAL & WEDDING THEMED RICH BACKDROP */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Warm Sandstone Base Tint */}
        <div className="absolute inset-0 bg-[#F7F2E9]" />

        {/* Wedding Photography Theme Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-[1.02]"
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            opacity: 0.22,
            filter: "contrast(110%) brightness(95%)",
          }}
        />

        {/* Subtle Mughal Jali Lattice Pattern */}
        <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply jali-bg" />

        {/* Regal Warm Radial Vignette to keep content and typography perfectly legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 85% at 50% 28%, rgba(255,253,248,0.88) 0%, rgba(247,242,233,0.80) 50%, rgba(226,212,192,0.92) 100%)",
          }}
        />

        {/* Warm Golden Candle Glow from Ceiling */}
        <div
          className="absolute top-0 inset-x-0 h-[480px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(251, 191, 36, 0.22) 0%, transparent 100%)",
          }}
        />

        {/* Outer Classical Mughal Arched Silhouette */}
        <div className="absolute inset-x-2 sm:inset-x-8 md:inset-x-16 top-4 bottom-4 border-[1.5px] border-[#DFCBB5]/70 rounded-t-[140px] sm:rounded-t-[220px] pointer-events-none" />
        <div className="absolute inset-x-4 sm:inset-x-12 md:inset-x-20 top-7 bottom-7 border border-[#DFCBB5]/40 rounded-t-[130px] sm:rounded-t-[205px] pointer-events-none" />

        {/* Fluted Limestone Columns on Desktop */}
        <div className="hidden lg:block absolute left-4 top-0 bottom-0 w-12 bg-gradient-to-r from-[#DFD0BD] via-[#F4EDE2] to-[#DFD0BD] opacity-45 border-r border-[#D2BEA6]" />
        <div className="hidden lg:block absolute right-4 top-0 bottom-0 w-12 bg-gradient-to-r from-[#DFD0BD] via-[#F4EDE2] to-[#DFD0BD] opacity-45 border-l border-[#D2BEA6]" />

        {/* Cascading Floral Swags at Arch Crown */}
        <div className="absolute top-0 left-0">
          <FloralGarland orientation="left" />
        </div>
        <div className="absolute top-0 right-0">
          <FloralGarland orientation="right" />
        </div>

        {/* Golden Suspended Hanging Fanoos (Lanterns) with soft pulse */}
        <div className="hidden sm:block absolute top-0 right-[14%] sm:right-[18%] md:right-[22%]">
          <HangingFanoos chainLength={110} size="md" glowDelay="0.5s" />
        </div>
        <div className="hidden sm:block absolute top-0 right-[9%] sm:right-[12%] md:right-[15%]">
          <HangingFanoos chainLength={170} size="lg" glowDelay="1.8s" />
        </div>
        <div className="hidden md:block absolute top-0 left-[14%]">
          <HangingFanoos chainLength={130} size="md" glowDelay="2.3s" />
        </div>
      </div>

      {/* TOP NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#FFFDF9]/90 border-b border-[#E9D9C3] px-4 sm:px-10 py-3 transition-all shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / AD Monogram Crest */}
          <button
            onClick={() => {
              loadGuestlist();
              setGuestlistOpen(true);
            }}
            title="Click for Wedding Organizer & RSVP Guestlist"
            className="flex items-center space-x-2.5 group text-left transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full border border-[#C59B4B] flex items-center justify-center bg-gradient-to-tr from-[#FFFDF9] to-[#FCEEC8] shadow-sm group-hover:border-[#9A7332]">
              <span className="font-serif text-sm font-semibold text-[#8B6723]">AD</span>
            </div>
            <span className="font-serif text-sm sm:text-lg tracking-[0.22em] text-[#3A3026] font-medium">
              AYLA & DANIYAL
            </span>
          </button>

          {/* Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Sitar Ambient Audio Toggle */}
            <button
              onClick={toggleMusic}
              className={`flex items-center space-x-2 text-xs sm:text-sm px-3 sm:px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                isPlayingMusic
                  ? "bg-[#3A3026] text-[#FFFDF9] border-[#3A3026] shadow-sm ring-2 ring-[#C59B4B]/40"
                  : "bg-white/90 text-[#735E49] border-[#E3D1BD] hover:border-[#B59C7F] hover:bg-white"
              }`}
              title="Play calming aesthetic sitar & tanpura chord drone"
            >
              <Music2
                size={14}
                className={isPlayingMusic ? "animate-spin text-[#F5D77F]" : "text-[#735E49]"}
              />
              <span className="hidden sm:inline font-medium">
                {isPlayingMusic ? "Sitar Playing" : "Play Sitar"}
              </span>
            </button>

            {/* WhatsApp Direct Share */}
            <button
              onClick={shareViaWhatsApp}
              className="p-2 rounded-full border border-[#E3D1BD] bg-white/90 text-[#25D366] hover:bg-white hover:border-[#25D366]/40 transition-all shadow-sm"
              title="Share Invitation via WhatsApp"
            >
              <MessageCircle size={15} />
            </button>

            {/* Share / Copy Link */}
            <button
              onClick={copyPageShare}
              className="p-2 rounded-full border border-[#E3D1BD] bg-white/90 text-[#735E49] hover:text-[#2C241E] hover:border-[#B59C7F] hover:bg-white transition-all shadow-sm"
              title="Copy Invitation Link"
            >
              {copiedLink ? <CheckCircle2 size={15} className="text-emerald-600" /> : <Share2 size={15} />}
            </button>

            {/* RSVP Button */}
            <button
              onClick={() => setRsvpOpen(true)}
              className="bg-gradient-to-r from-[#9E7332] to-[#784E11] hover:from-[#855D22] hover:to-[#5E3906] text-[#FFFDF9] text-xs sm:text-sm font-medium tracking-wider uppercase px-4 sm:px-6 py-2 rounded-full shadow-[0_2px_10px_rgba(158,115,50,0.25)] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(158,115,50,0.35)]"
            >
              RSVP
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 sm:pt-36 pb-10 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center justify-center space-x-3 mb-2 text-[#9A7D5C]">
          <span className="h-[1px] w-12 bg-[#DDCBB5]" />
          <Sparkles size={14} className="text-[#BFA054]" />
          <span className="h-[1px] w-12 bg-[#DDCBB5]" />
        </div>

        <div className="font-serif text-xl sm:text-2xl text-[#6D543B] tracking-wide mb-2 italic" dir="rtl">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#8E745A] font-medium mb-3">
          In the Name of Allah, The Most Gracious, The Most Merciful
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[#2B2118] font-normal leading-tight mb-4">
          Ayla Noor <span className="font-serif italic font-light text-[#A87B2E] text-3xl sm:text-5xl">&</span> Daniyal Qureshi
        </h1>

        <p className="max-w-xl text-[#635342] text-sm sm:text-base font-light leading-relaxed mb-6">
          Together with their families, cordially invite you to celebrate the auspicious wedding festivities of Mehndi, Barat, and Walima.
        </p>

        {/* Live Countdown Timer */}
        <div className="relative inline-flex items-center space-x-4 sm:space-x-8 bg-white/90 backdrop-blur-md border border-[#E3D1BD] rounded-full px-7 sm:px-10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-8">
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-serif text-[#2C241E] font-medium tabular-nums">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#937C66]">Days</span>
          </div>
          <span className="text-[#D8C4AD] font-light">✦</span>
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-serif text-[#2C241E] font-medium tabular-nums">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#937C66]">Hours</span>
          </div>
          <span className="text-[#D8C4AD] font-light">✦</span>
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-serif text-[#2C241E] font-medium tabular-nums">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#937C66]">Mins</span>
          </div>
          <span className="text-[#D8C4AD] font-light">✦</span>
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-serif text-[#2C241E] font-medium tabular-nums">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#937C66]">Secs</span>
          </div>
        </div>

        {/* Event Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#F1E4D3]/80 p-1.5 rounded-full border border-[#DDC9B2] shadow-inner mb-2">
          {[
            { id: "all", label: "All Three Events" },
            { id: "mehndi", label: "1. Mehndi (Yellow)" },
            { id: "barat", label: "2. Barat (Maroon)" },
            { id: "walima", label: "3. Walima (Blue/Grey)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
                activeTab === tab.id
                  ? "bg-white text-[#2C241E] shadow-sm font-semibold"
                  : "text-[#75614D] hover:text-[#2C241E]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3 WEDDING EVENT CARDS WITH THEMED BACKGROUND IMAGES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className={`grid gap-8 ${
            displayedEvents.length === 1
              ? "max-w-md mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {displayedEvents.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col transition-all duration-300 hover:-translate-y-2"
            >
              {/* Outer Card Frame with Themed Background Image and Glassmorphism */}
              <div
                className={`h-full rounded-[30px] border shadow-[0_10px_35px_rgba(50,30,10,0.07)] hover:shadow-[0_20px_50px_rgba(50,30,10,0.14)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between bg-white/95 backdrop-blur-md ${item.bgStyle}`}
              >
                {/* 🎨 Ambient Full-Card Themed Background Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    opacity: 0.14,
                    filter: "contrast(115%)",
                  }}
                />

                {/* Themed Arch Header Banner with Rich Photography & Typography */}
                <div className="relative overflow-hidden rounded-t-[29px] pt-7 px-6 pb-5 text-center">
                  {/* Dedicated Header Image Backdrop with Gradient Fade */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                      }}
                    />
                    {/* Rich Themed Color Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${item.bannerGradient}`} />
                    {/* Mughal Arched Frame within the banner */}
                    <div className="absolute inset-x-6 top-3 bottom-0 border-t border-x border-white/20 rounded-t-full pointer-events-none" />
                  </div>

                  {/* Header Badge */}
                  <div className="relative z-10 mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-white/90 text-[#2C241E] shadow-sm backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Urdu Calligraphy Header */}
                  <div className="relative z-10 font-serif text-2xl font-medium tracking-wide text-amber-100 drop-shadow-sm mb-0.5" dir="rtl">
                    {item.urduTitle}
                  </div>

                  {/* Event Title */}
                  <h3 className="relative z-10 text-2xl sm:text-3xl font-serif font-medium tracking-tight text-white drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="relative z-10 text-xs text-white/90 mt-1 font-serif italic drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </div>

                {/* Central Card Content Area */}
                <div className="px-6 sm:px-7 py-5 flex-1 flex flex-col justify-between relative z-10">
                  {/* Tagline */}
                  <p className="text-xs text-[#635342] mb-5 font-light leading-relaxed text-center px-1">
                    {item.tagline}
                  </p>

                  {/* Logistics Pill Boxes */}
                  <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                    <div className="flex items-start space-x-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-black/5 shadow-sm hover:bg-white transition-colors">
                      <Calendar size={16} className="text-[#9A7D5C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#2C241E]">{item.dateStr}</div>
                        <div className="text-[11px] text-[#7E6953]">Auspicious Date</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-black/5 shadow-sm hover:bg-white transition-colors">
                      <Clock size={16} className="text-[#9A7D5C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#2C241E]">{item.time}</div>
                        <div className="text-[11px] text-[#7E6953]">Reception & Seating</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-black/5 shadow-sm hover:bg-white transition-colors">
                      <MapPin size={16} className="text-[#9A7D5C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#2C241E]">{item.venue}</div>
                        <div className="text-[11px] text-[#7E6953]">{item.city}</div>
                      </div>
                    </div>
                  </div>

                  {/* Dress Code Swatches */}
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-black/5 mb-5 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8A735E]">
                        Dress Code
                      </span>
                      <div className="flex items-center space-x-1.5">
                        {item.swatches.map((color, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[#453729] font-medium leading-snug">
                      {item.dressCode}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-black/5 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedEventModal(item)}
                      className={`flex-1 text-xs font-medium py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-1 shadow-sm ${item.buttonBg}`}
                    >
                      <span>Itinerary</span>
                      <ChevronRight size={14} />
                    </button>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        item.mapQuery
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#4A3E31] text-xs font-medium flex items-center justify-center space-x-1 border border-[#D9C8B5] transition-all shadow-sm"
                      title="View Venue Location on Google Maps"
                    >
                      <MapPin size={14} />
                      <span>Map</span>
                    </a>

                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        item.title + " • Ayla & Daniyal"
                      )}&dates=${item.calendarDate}&details=${encodeURIComponent(
                        item.tagline + " | Venue: " + item.venue
                      )}&location=${encodeURIComponent(item.venue + ", " + item.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#4A3E31] text-xs flex items-center justify-center border border-[#D9C8B5] transition-all shadow-sm"
                      title="Add to Google Calendar"
                    >
                      <CalendarPlus size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAS & WISHES BOARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-[#9A7D5C] mb-2">
            <Heart size={14} className="fill-[#C59B4B]/30 text-[#C59B4B]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
              Sacred Prayers & Wishes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C241E] font-medium">
            Duas & Blessings Board
          </h2>
          <p className="text-xs sm:text-sm text-[#735E49] max-w-md mx-auto mt-2 font-light">
            Gift the bride and groom your heartfelt prayers and auspicious wishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Note Form */}
          <div className="md:col-span-5 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-[26px] border border-[#E3D1BD] shadow-sm">
            <h3 className="font-serif text-lg font-medium text-[#2C241E] mb-1">
              Send Your Dua
            </h3>
            <p className="text-xs text-[#7A644E] mb-5">
              Your prayers will be inscribed into their commemorative keepsake album.
            </p>

            {noteSent && (
              <div className="mb-4 p-3 bg-[#EEF8EE] border border-[#C6E6C6] text-[#2D5A2D] text-xs rounded-xl flex items-center space-x-2 animate-fadeIn">
                <CheckCircle2 size={15} />
                <span>JazakAllah! Your prayer has been recorded.</span>
              </div>
            )}

            <form onSubmit={handleNoteSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#574839] font-medium mb-1">Your Name / Family</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq & Nighat Begum"
                  value={newNote.name}
                  onChange={(e) => setNewNote({ ...newNote, name: e.target.value })}
                  className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31]"
                />
              </div>

              <div>
                <label className="block text-[#574839] font-medium mb-1">Select Event</label>
                <select
                  value={newNote.event}
                  onChange={(e) => setNewNote({ ...newNote, event: e.target.value })}
                  className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31]"
                >
                  <option value="All Events">All 3 Celebrations</option>
                  <option value="Dawat-e-Walima">1. Walima (Ice Blue)</option>
                  <option value="Barat & Rukhsati">2. Barat (Royal Maroon)</option>
                  <option value="Mehndi Raat">3. Mehndi (Saffron Festive)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#574839] font-medium mb-1">Dua / Message</label>
                <textarea
                  rows={3}
                  required
                  maxLength={500}
                  placeholder="May Allah swt fill your home with immense sakoon, barakah and endless happiness..."
                  value={newNote.message}
                  onChange={(e) => setNewNote({ ...newNote, message: e.target.value })}
                  className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31] resize-none"
                />
                <div className="text-right text-[10px] text-[#9A836D] mt-0.5">
                  {newNote.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={wishSubmitting}
                className="w-full bg-[#2C241E] hover:bg-[#15120E] disabled:opacity-60 text-[#FFFDF9] font-medium py-3 rounded-xl transition flex items-center justify-center space-x-2 shadow-sm"
              >
                <Send size={13} />
                <span>{wishSubmitting ? "Submitting Blessing…" : "Submit Blessing"}</span>
              </button>
            </form>
          </div>

          {/* Cards Display */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className={`bg-white/95 border ${item.accent} p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#937C66] font-semibold">
                    {item.event}
                  </span>
                  <span className="text-[10px] text-[#A6917E]">{item.date}</span>
                </div>
                <p className="text-xs text-[#4F4133] font-serif italic leading-relaxed mb-3">
                  &ldquo;{item.note}&rdquo;
                </p>
                <div className="text-xs font-medium text-[#2C241E] flex items-center space-x-1.5 border-t border-[#F2ECE3] pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4B]" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT ITINERARY MODAL */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FFFDF9] border border-[#DFCBB5] rounded-3xl p-6 sm:p-8 text-[#2C241E] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEventModal(null)}
              className="absolute top-5 right-5 p-2 text-[#7A644E] hover:text-[#2C241E] rounded-full hover:bg-black/5 transition"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <div className="text-xl font-serif text-[#7A644E] mb-0.5" dir="rtl">
                {selectedEventModal.urduTitle}
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#2C241E]">
                {selectedEventModal.title}
              </h3>
              <p className="text-xs text-[#8E755D] mt-1">{selectedEventModal.dateStr}</p>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-[11px] uppercase tracking-widest text-[#735E49] font-semibold">
                Event Schedule & Itinerary
              </h4>
              <div className="space-y-2.5">
                {selectedEventModal.schedule.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 text-xs bg-[#FAF5EE] p-3 rounded-xl border border-black/[0.04]"
                  >
                    <span className="bg-white text-[#4A3E31] font-mono text-[11px] px-2 py-0.5 rounded border border-[#DECCB8] shrink-0 font-medium">
                      {slot.time}
                    </span>
                    <span className="text-[#3A3025]">{slot.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF5EE] p-3.5 rounded-xl border border-[#DFCBB5] text-xs mb-6">
              <span className="font-semibold text-[#574839] block mb-1">Evening Highlights:</span>
              <span className="text-[#4A3E31]">{selectedEventModal.highlights}</span>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  selectedEventModal.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#2C241E] hover:bg-[#18130E] text-[#FFFDF9] font-medium text-xs text-center transition shadow-sm"
              >
                Open Google Maps
              </a>
              <button
                onClick={() => setSelectedEventModal(null)}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#4A3E31] text-xs font-medium border border-[#D9C8B5] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RSVP MODAL */}
      {rsvpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#FFFDF9] border border-[#DFCBB5] rounded-3xl p-6 sm:p-8 text-[#2C241E] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setRsvpOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#7A644E] hover:text-[#2C241E] rounded-full hover:bg-black/5 transition"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#937C66] font-semibold">
                Celebration Attendance
              </span>
              <h3 className="text-2xl font-serif font-medium text-[#2C241E] mt-1">
                RSVP Confirmation
              </h3>
              <p className="text-xs text-[#7A644E] mt-1 font-light">
                Kindly confirm your gracious presence by 20th November 2026.
              </p>
            </div>

            {rsvpError && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl">
                {rsvpError}
              </div>
            )}

            {rsvpDone ? (
              <div className="text-center py-8 space-y-3 animate-fadeIn">
                <div className="w-14 h-14 bg-[#EEF8EE] text-[#2D5A2D] rounded-full flex items-center justify-center mx-auto border border-[#C6E6C6] shadow-sm">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-serif text-[#2C241E] font-medium">Shukriya! RSVP Confirmed</h4>
                <p className="text-xs text-[#635342] max-w-xs mx-auto">
                  We look forward to welcoming you and your family with open hearts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#574839] font-medium mb-1">
                    Full Name / Head of Family *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad & Mahnoor Siddiqui"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                    className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#574839] font-medium mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={rsvpData.phone}
                      onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                      className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#574839] font-medium mb-1">Guests Count</label>
                    <select
                      value={rsvpData.guests}
                      onChange={(e) => setRsvpData({ ...rsvpData, guests: e.target.value })}
                      className="w-full bg-[#FAF5EE] border border-[#DECCB8] rounded-xl px-3.5 py-2.5 text-[#2C241E] focus:outline-none focus:border-[#4A3E31]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">Family (5+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#574839] font-medium mb-2">Events Attending:</label>
                  <div className="space-y-2 bg-[#FAF5EE] p-3 rounded-xl border border-[#DECCB8]">
                    <label className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rsvpData.attending.walima}
                        onChange={(e) =>
                          setRsvpData({
                            ...rsvpData,
                            attending: { ...rsvpData.attending, walima: e.target.checked },
                          })
                        }
                        className="rounded accent-[#1E3A5F] w-4 h-4 cursor-pointer"
                      />
                      <span className="text-[#3A3025] text-xs">1. Walima Reception (Sun, 29 Nov)</span>
                    </label>

                    <label className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rsvpData.attending.barat}
                        onChange={(e) =>
                          setRsvpData({
                            ...rsvpData,
                            attending: { ...rsvpData.attending, barat: e.target.checked },
                          })
                        }
                        className="rounded accent-[#881337] w-4 h-4 cursor-pointer"
                      />
                      <span className="text-[#3A3025] text-xs">2. Barat & Rukhsati (Fri, 27 Nov)</span>
                    </label>

                    <label className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rsvpData.attending.mehndi}
                        onChange={(e) =>
                          setRsvpData({
                            ...rsvpData,
                            attending: { ...rsvpData.attending, mehndi: e.target.checked },
                          })
                        }
                        className="rounded accent-[#D97706] w-4 h-4 cursor-pointer"
                      />
                      <span className="text-[#3A3025] text-xs">3. Mehndi Raat (Thu, 26 Nov)</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={rsvpSubmitting}
                  className="w-full bg-[#2C241E] hover:bg-[#18130E] disabled:opacity-60 text-[#FFFDF9] font-medium py-3 rounded-xl transition shadow-sm mt-3"
                >
                  {rsvpSubmitting ? "Confirming RSVP…" : "Confirm RSVP"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* HOST RSVP GUESTLIST & ATTENDANCE DASHBOARD MODAL */}
      {guestlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#DFCBB5] rounded-3xl p-6 sm:p-8 text-[#2C241E] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setGuestlistOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#7A644E] hover:text-[#2C241E] rounded-full hover:bg-black/5 transition"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-amber-100 text-amber-900 border border-amber-200 mb-2">
                <ShieldCheck size={13} />
                <span>Wedding Host Portal</span>
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#2C241E]">
                RSVP Guestlist & Attendance
              </h3>
              <p className="text-xs text-[#7A644E] mt-1 font-light">
                Live attendance breakdown for Ayla & Daniyal's festivities
              </p>
            </div>

            {/* Attendance Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-[#FAF5EE] p-3 rounded-2xl border border-[#DFCBB5] text-center">
                <span className="block text-2xl font-serif font-semibold text-[#2C241E]">
                  {hostStats.totalGuestsEstimate}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#8A735E]">Est. Guests</span>
              </div>
              <div className="bg-[#FEF3C7]/60 p-3 rounded-2xl border border-[#FDE68A] text-center">
                <span className="block text-2xl font-serif font-semibold text-[#B45309]">
                  {hostStats.mehndiCount}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#92400E]">Mehndi</span>
              </div>
              <div className="bg-[#FFE4E6]/60 p-3 rounded-2xl border border-[#FECDD3] text-center">
                <span className="block text-2xl font-serif font-semibold text-[#9F1239]">
                  {hostStats.baratCount}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#881337]">Barat</span>
              </div>
              <div className="bg-[#E0F2FE]/60 p-3 rounded-2xl border border-[#BAE6FD] text-center">
                <span className="block text-2xl font-serif font-semibold text-[#0369A1]">
                  {hostStats.walimaCount}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#1E3A5F]">Walima</span>
              </div>
            </div>

            {/* List of RSVPs */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-[#735E49] flex items-center justify-between">
                <span>Recent Confirmations ({hostRsvps.length})</span>
                <button
                  onClick={loadGuestlist}
                  className="text-[11px] lowercase text-[#9E7332] hover:underline"
                >
                  refresh
                </button>
              </h4>

              {hostRsvps.length === 0 ? (
                <div className="text-center py-8 bg-[#FAF5EE] rounded-2xl border border-[#DFCBB5] text-xs text-[#7A644E]">
                  No RSVPs submitted yet. Share the invitation link to gather confirmations!
                </div>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {hostRsvps.map((entry) => (
                    <div
                      key={entry.id}
                      className="p-3 bg-[#FAF5EE] rounded-xl border border-[#DFCBB5]/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-semibold text-[#2C241E] flex items-center space-x-2">
                          <span>{entry.name}</span>
                          <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white border border-[#DFCBB5]">
                            {entry.guests} guests
                          </span>
                        </div>
                        <div className="text-[11px] text-[#7A644E]">{entry.phone}</div>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        {entry.attending.mehndi && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#FEF3C7] text-[#92400E]">
                            Mehndi
                          </span>
                        )}
                        {entry.attending.barat && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#FFE4E6] text-[#9F1239]">
                            Barat
                          </span>
                        )}
                        {entry.attending.walima && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E0F2FE] text-[#0369A1]">
                            Walima
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFCBB5] flex justify-end">
              <button
                onClick={() => setGuestlistOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#2C241E] hover:bg-[#18130E] text-[#FFFDF9] text-xs font-medium transition"
              >
                Close Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[#E8D9C8] py-12 px-4 text-center bg-[#F7EFE3]/85 backdrop-blur-md">
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 justify-center mb-1">
            <span className="h-[1px] w-8 bg-[#C59B4B]" />
            <Heart size={12} className="text-[#C59B4B] fill-[#C59B4B]/40" />
            <span className="h-[1px] w-8 bg-[#C59B4B]" />
          </div>

          <div className="font-serif text-lg text-[#2C241E]">
            Ayla & Daniyal
          </div>

          <p className="text-xs text-[#75614D] leading-relaxed">
            With warmest compliments from the Qureshi & Noor families. We look forward to celebrating together.
          </p>

          <div className="text-[11px] tracking-widest uppercase text-[#9A836D] pt-3">
            Lahore & Islamabad, Pakistan • November 2026
          </div>

          <div className="pt-4 text-[10px] text-[#A6917E]">
            <button
              onClick={() => {
                loadGuestlist();
                setGuestlistOpen(true);
              }}
              className="hover:text-[#2C241E] underline transition"
            >
              Wedding Host Portal & RSVP List
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
