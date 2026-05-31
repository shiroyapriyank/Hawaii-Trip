# CLAUDE.md — Hawaii Trip Project Instructions

This file governs how Claude should behave in this project. Read it at the start of every session.

---

## Project Purpose

This is a living research and planning document for **Priyank & Saloni's Hawaii Trip (Aug 27 – Sep 4, 2026)**.

The project has two parts:
1. **`Hawaii_Trip_2026_Places.md`** — the source-of-truth research file with all places, bookings, and notes.
2. **`index.html`** — a mobile-friendly web page deployed to GitHub Pages so the trip list can be viewed from a phone at any time.

---

## Core Rules

### Never Assume — Always Ask
If the user adds a place or makes a request that is ambiguous (missing date, location, category, etc.), **ask before writing**. Do not guess or fill in placeholder data.

### MD File Is the Source of Truth
All additions, updates, and status changes happen in `Hawaii_Trip_2026_Places.md`. The `index.html` must always be regenerated/updated to reflect the current state of the MD file whenever the MD changes.

### When Adding a New Place
Always include:
- **Category** — which section it belongs to (Beach, Nature, Food, History, etc.) and which island (O'ahu or Maui)
- **Status** — default to 🔲 unless told otherwise
- **Reservation required?** — if yes, add:
  - Earliest reservation date & time (in both HST and Columbus/EDT)
  - Reservation link (official booking URL)
  - Cost per person and/or per vehicle
  - Any blackout days or special notes
- **Description** — 1–2 sentences: what makes it worth visiting, insider tip if known
- **Add to Booking Action Calendar** if reservation is time-sensitive

### Status Symbols
| Symbol | Meaning |
|--------|---------|
| 🔲 | Under consideration |
| ✅ | Confirmed / Booked |
| ❌ | Ruled out |
| ⏳ | Waitlisted / Monitoring |

Update status whenever the user confirms a booking or rules something out.

---

## Deployment Setup

### GitHub Repository
- **Repo:** `hawaii-trip-2026` (public)
- **Owner:** `shiroyapriyank`
- **URL:** `https://shiroyapriyank.github.io/hawaii-trip-2026/`
- **Branch:** `main`
- **GitHub Pages source:** root `/` on `main` branch

### Files in Repo
| File | Purpose |
|------|---------|
| `index.html` | Mobile-friendly web view — the page visitors (Priyank) see |
| `Hawaii_Trip_2026_Places.md` | Source of truth — kept in sync |
| `README.md` | Minimal — just points to the live site |
| `CLAUDE.md` | This file — not deployed, stays in local project folder only |

### Custom Subdomain
- **Domain:** `prinisatechsolution.com` (managed in Squarespace)
- **Subdomain:** `trip.prinisatechsolution.com`
- **DNS record:** CNAME `trip` → `shiroyapriyank.github.io`
- **GitHub Pages custom domain setting:** `trip.prinisatechsolution.com`
- **CNAME file in repo root:** contains `trip.prinisatechsolution.com`

---

## Workflow When User Adds a New Place

1. Ask any clarifying questions needed (island? category? reservation details?)
2. Add the place to the correct section in `Hawaii_Trip_2026_Places.md`
3. If reservation required → add to the Booking Action Calendar table too
4. Regenerate / update `index.html` to reflect the change
5. Tell the user: "Updated the MD and the web page. Push to GitHub to go live."

---

## Traveler Profile

- **Travelers:** Priyank & Saloni
- **Diet:** Strictly vegetarian — no meat, seafood, eggs, or alcohol. Always flag veg-friendliness when adding restaurants.
- **Base timezone for booking alarms:** Columbus, Ohio (EDT in summer = UTC−4). HST = EDT − 6.
- **Travel style:** Mix of adventure (hikes, snorkel) and relaxation. Appreciate insider tips and avoiding tourist traps.
- **Hotels:** Amex Fine Hotels & Resorts bookings — always note FHR perks when relevant.

---

## GitHub Push Reminder

Claude cannot push to GitHub directly. After making changes, remind the user:
> "Files updated locally. To go live, open Terminal and run: `cd` to your project folder, then `git add . && git commit -m 'your message' && git push`"

Or provide the exact git commands based on what changed.

---

*This file is for Claude's use only — not deployed to the web.*
