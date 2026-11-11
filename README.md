# ⚜️ Ayla & Daniyal — Pakistani Royal Wedding Invitation

A luxury Pakistani wedding card web application crafted with Next.js (App Router), React, Tailwind CSS, and full-stack backend APIs for RSVPs and Duas. Built for seamless one-click deployment on **Vercel**.

---

## 🌟 Features & Highlights

1. **Royal Mughal Architectural Theme:**
   - **Wedding Theme Background Image:** Warm, regal wedding hall and floral archway backdrop with warm candle glow, fluted columns, cascading floral swags, and suspended golden *Fanoos* (lanterns) with radiant animated pulse.
   - **Themed Event Card Background Images:**
     - 🟡 **Mehndi (Rasm-e-Henna):** Saffron, yellow marigold garlands (*genda phool*), and henna artistry backdrop with warm amber glassmorphism.
     - 🔴 **Barat & Rukhsati:** Imperial ruby crimson velvet, red roses, and gold zari bridal embroidery backdrop with regal maroon glassmorphism.
     - 🔵 **Dawat-e-Walima:** Ice blue, silver filigree, and crystal chandelier reception backdrop with frosted slate sapphire glassmorphism.

2. **Full-Stack Backend (Ready for Vercel):**
   - `POST /api/rsvp`: Validates and saves guest RSVPs (Name, Phone, Guests count, Events attending, Dietary preferences).
   - `GET /api/rsvp`: Computes attendance metrics (Total estimated guests, count for Mehndi, Barat, Walima) and returns the guest list.
   - `GET /api/wishes`: Retrieves heartfelt duas and blessings for the couple.
   - `POST /api/wishes`: Records new blessings with automatic event tagging and timestamps.
   - **Storage Engine:** Built-in hybrid storage engine (`lib/storage.ts`) supporting project file storage locally, `/tmp` in serverless/Vercel environments, and in-memory fallback. Optional Redis/KV integration ready.

3. **Interactive Guest Experience:**
   - **Sitar & Tanpura Drone:** Calming royal sitar chord synthesizer with Web Audio API (LFO vibrato, stereo panning, zero external audio loading required).
   - **Live Countdown Timer:** Real-time countdown to Thursday, 26th November 2026.
   - **Event Filtering:** Switch between All Events, Mehndi, Barat, or Walima.
   - **Itinerary & Highlights Modal:** Detailed timeline of each function.
   - **1-Click Google Calendar & Google Maps:** Add events to Google Calendar with pre-filled details; open exact venue locations on Google Maps.
   - **WhatsApp & Link Sharing:** Direct WhatsApp share with pre-formatted invitation text.
   - **Host Portal / RSVP List:** Click on the **AD** crest in the navbar or the footer link to view confirmed RSVPs and total guest counts.

---

## 🚀 How to Deploy on Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ayla & Daniyal Pakistani Wedding Website"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

2. Open [Vercel Dashboard](https://vercel.com/new).
3. Select your repository and click **Import**.
4. Framework Preset: **Next.js** (auto-detected).
5. Click **Deploy**. Vercel will build and deploy your website in less than 60 seconds!

---

### Option 2: Deploy directly with Vercel CLI

1. Install the Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Run in the project directory:
   ```bash
   vercel
   ```

3. Follow the CLI prompts (default settings work out of the box), and for production:
   ```bash
   vercel --prod
   ```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your wedding website.
