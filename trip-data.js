// ============================================================
// HAWAII TRIP 2026 — DATA FILE
// Edit this file to update the website. HTML renders from here.
//
// Place item fields:
//   status   : "pending" | "confirmed" | "watching" | "ruled-out"
//   tag.style: "res" (yellow/warning) | "free" (green) | "tip" (blue) | "veg" (warm yellow)
//   photo    : optional Unsplash URL — omit the field entirely if no photo
// ============================================================

const TRIP_DATA = {

  meta: {
    title: "Hawaii Trip 2026",
    travelers: "Priyank & Saloni",
    dates: "Aug 27 – Sep 4, 2026",
    oahu: "O'ahu: Aug 27–31",
    maui: "Maui: Aug 31–Sep 4",
    lastUpdated: "May 2026"  // update this when making changes
  },

  timezone: "HST = Columbus (EDT) − 6 hrs in summer. A 7 AM HST booking window = <strong>1 PM Columbus time.</strong> Set alarms 10 min early — these sell out in seconds.",

  // ── BOOKINGS ─────────────────────────────────────────────
  bookings: {
    urgent: [
      { what: "Mama's Fish House — Maui dinner", url: "https://www.mamasfishhouse.com", urlLabel: "mamasfishhouse.com", note: "~$80–120/person · Ask about veg options when booking" },
      { what: "⭐ Andaz Maui — Book before Jun 30!", url: "https://travel.americanexpress.com", urlLabel: "AmexTravel.com", note: "$750 property credit expires Jun 30" },
      { what: "Pearl Harbor USS Arizona", url: "https://recreation.gov", urlLabel: "recreation.gov", note: "Free + $1 fee" },
      { what: "HNL → OGG inter-island flight (Aug 31)", url: "https://www.hawaiianairlines.com", urlLabel: "Hawaiian Airlines or Southwest", note: "~$60–90 · NOT on Alaska ticket!" },
      { what: "Molokini Snorkel Tour (Sep 1)", url: "https://sailtrilogy.com", urlLabel: "Trilogy or Pride of Maui", note: "~$120–150/person" }
    ],
    timed: [
      { what: "🌅 Haleakalā Sunrise (Sep 3)", detail: "$1 + $30/vehicle · 60-day window. Also book Sep 2 backup (Jul 3).", url: "https://recreation.gov", urlLabel: "recreation.gov", when: "Jul 4 · 1 PM EDT", urgency: "asap" },
      { what: "🏨 Royal Hawaiian FHR", detail: "Book after Jul 1 to capture Jul–Dec $300 statement credit.", url: "https://travel.americanexpress.com", urlLabel: "AmexTravel.com", when: "Jul 28 · 1 PM EDT", urgency: "soon" },
      { what: "🖤 Wai'anapanapa Black Sand Beach (Sep 1)", detail: "$5/person + $10/vehicle · 30-day window.", url: "https://gostateparks.hawaii.gov", urlLabel: "gostateparks.hawaii.gov", when: "Aug 1 · 1 PM EDT", urgency: "soon" },
      { what: "🌿 Iao Valley (if reopened)", detail: "Currently CLOSED — monitor site. $5/person + $10/vehicle.", url: "https://gostateparks.hawaii.gov", urlLabel: "gostateparks.hawaii.gov", when: "Aug 1 · 1 PM EDT", urgency: "soon" },
      { what: "💎 Diamond Head Crater (Sep 3)", detail: "$5/person + $10/vehicle · Book 7–8 AM slot.", url: "https://gostateparks.hawaii.gov/diamondhead/about", urlLabel: "gostateparks.hawaii.gov", when: "Aug 2 · 1 PM EDT", urgency: "soon" },
      { what: "🐠 Hanauma Bay (Aug 28)", detail: "$25/person · 2-day window. Closed Mon & Tue.", url: "https://pros8.hnl.info/Home/Details/72", urlLabel: "pros8.hnl.info · Honolulu Parks & Rec", when: "Aug 26 · 1 PM EDT", urgency: "soon" }
    ]
  },

  // ── O'AHU ─────────────────────────────────────────────────
  oahu: {
    info: "4 nights at The Royal Hawaiian, Waikiki. Arriving ~midnight Aug 27/28.",
    sections: [
      {
        title: "Needs Reservation", icon: "🎫",
        items: [
          { status: "pending", title: "Pearl Harbor / USS Arizona Memorial",
            tags: [{ label: "Book 60+ days ahead · ASAP", style: "res" }],
            body: "Most emotionally powerful site in Hawaii. Budget 3–4 hrs. Includes boat ride to the memorial over the sunken ship. Technically free but sells out — standby line = 2–3 hr wait.",
            url: "https://recreation.gov", urlLabel: "recreation.gov · Free + $1 fee",
            photo: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Diamond Head Crater Hike",
            tags: [{ label: "Book 30 days ahead · Aug 2", style: "res" }],
            body: "1.8-mile hike, 560 ft elevation. Book 7–8 AM slot — cooler, golden light, fewer crowds. Zero shade — sunscreen, hat, water essential.",
            url: "https://gostateparks.hawaii.gov/diamondhead/about", urlLabel: "gostateparks.hawaii.gov · $5/person + $10/vehicle",
            photo: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Hanauma Bay Snorkel",
            tags: [{ label: "Book 2 days ahead · Aug 26 @ 1 PM EDT", style: "res" }],
            body: "Protected volcanic crater bay — 400+ fish species. Best snorkel on O'ahu. Tickets drop at 7 AM HST sharp. Closed Mon & Tue. Arrive early.",
            url: "https://pros8.hnl.info/Home/Details/72", urlLabel: "pros8.hnl.info · $25/person",
            photo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop" }
        ]
      },
      {
        title: "Beaches & Water", icon: "🐠",
        items: [
          { status: "pending", title: "Waikiki Beach / Kuhio Beach",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Steps from Royal Hawaiian. Great for a first morning, surfing lessons ($30–50/hr), and outrigger canoe rides. Most touristy but incredibly convenient.",
            photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Ala Moana Beach Park",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Locals' favourite — calm, protected, beautiful sunset views of Diamond Head. 10-min drive from Waikiki. Better swimming than Waikiki." },
          { status: "pending", title: "Lanikai Beach (Kailua, windward side)",
            tags: [{ label: "No reservation", style: "free" }, { label: "Very limited parking", style: "tip" }],
            body: "Many locals call it the most beautiful beach in Hawaii. Fine white sand, calm turquoise water. Arrive before 8 AM for parking. 35-min drive. Pair with Pillbox Hike.",
            photo: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Kailua Beach Park",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Long white sand beach adjacent to Lanikai. Calm, clear water. Great for kayaking and paddleboarding to the twin Mokulua Islands offshore." },
          { status: "pending", title: "Waimea Bay (North Shore)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Legendary big-wave surf spot — flat and safe for swimming in summer. ~1-hr drive. Pair with Laniakea Turtle Beach and Haleiwa town for a full North Shore day.",
            photo: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Laniakea Beach / Turtle Beach (North Shore)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Roadside pullout between Haleiwa and Waimea Bay. Green sea turtles rest on the sand nearly every afternoon. One of the easiest turtle encounters in Hawaii." }
        ]
      },
      {
        title: "History & Culture", icon: "🏛️",
        items: [
          { status: "pending", title: "Iolani Palace",
            body: "Only official royal palace on US soil. Tours Tue–Sat. ~$30/person. 1–1.5 hrs.",
            url: "https://www.iolanipalace.org", urlLabel: "iolanipalace.org" },
          { status: "pending", title: "Bishop Museum",
            body: "Hawaii's finest natural history & culture museum. $25/person. Add $3 for planetarium. Half-day activity." },
          { status: "pending", title: "Chinatown Honolulu",
            tags: [{ label: "Very veg-friendly", style: "veg" }],
            body: "Walkable historic district west of downtown. Best street food on O'ahu — multiple veg-friendly cafés, galleries, murals. Saturday morning farmers market." },
          { status: "pending", title: "Punchbowl Crater / National Memorial Cemetery",
            tags: [{ label: "Free · Open daily", style: "free" }],
            body: "Military cemetery inside an extinct volcanic crater. Panoramic views of Honolulu and Diamond Head. Solemn, beautiful, and unexpectedly moving." },
          { status: "pending", title: "USS Bowfin Submarine Museum (Pearl Harbor)",
            body: "Preserved WWII submarine you can tour below deck. $27/person. Right next to the Arizona Memorial — easy same-day add." },
          { status: "pending", title: "Battleship Missouri Memorial (Pearl Harbor)",
            body: "The 'Mighty Mo' where Japan's surrender was signed, ending WWII. $37/person. The contrast with the Arizona (start of US involvement) is profound." },
          { status: "pending", title: "Polynesian Cultural Center (La'ie, North Shore)",
            tags: [{ label: "Veg buffet available", style: "veg" }],
            body: "Six Pacific island villages with live cultural demonstrations, canoe rides, and evening luau. Full day, $70+. 45-min drive from Waikiki." }
        ]
      },
      {
        title: "Nature & Hikes", icon: "🏔️",
        items: [
          { status: "pending", title: "Pu'u 'Ualaka'a Lookout (Tantalus)",
            tags: [{ label: "Free · No reservation", style: "free" }],
            body: "Hidden local gem at 1,000 ft. 180° panorama over Honolulu, Diamond Head, and Pearl Harbor. Stunning at sunset. 15-min drive from Waikiki." },
          { status: "pending", title: "Manoa Falls Hike",
            tags: [{ label: "No reservation · $7 parking", style: "free" }],
            body: "Easy 1.6-mile hike through lush rainforest to a 150-ft waterfall. Muddy — wear shoes you can get dirty." },
          { status: "pending", title: "Pillbox Hike / Kaiwa Ridge Trail (Lanikai)",
            tags: [{ label: "Free · No reservation", style: "free" }],
            body: "2-mile round trip to two WWII concrete lookout bunkers. 360° views over Lanikai Beach and the Mokulua islands. Steep scramble at the start. Pairs with Lanikai Beach." },
          { status: "pending", title: "Koko Head Crater Trail",
            tags: [{ label: "Free", style: "free" }, { label: "Go at sunrise only", style: "tip" }],
            body: "1,048 steep railroad-tie steps up the crater rim. 30–45 min of intense cardio. Panoramic views of east O'ahu, Hanauma Bay, and Diamond Head. No shade." },
          { status: "pending", title: "Makapu'u Lighthouse Trail",
            tags: [{ label: "Free · No reservation", style: "free" }],
            body: "Easy 2-mile paved coastal path to O'ahu's easternmost lighthouse. Broad ocean views, optional tide pool scramble at the base." },
          { status: "pending", title: "Nu'uanu Pali Lookout",
            tags: [{ label: "Free", style: "free" }],
            body: "Historic cliffside viewpoint at 1,200 ft where Kamehameha I won the decisive 1795 battle for O'ahu. Dramatic windward coast views. 15-min drive." },
          { status: "pending", title: "Byodo-In Temple (Kane'ohe)",
            body: "Stunning replica of a 900-year-old Japanese temple set against the Ko'olau cliffs. Koi ponds, peacocks, 9-ft Buddha. $5/person. Pair with a Kailua/Lanikai day." },
          { status: "pending", title: "Waimea Valley (North Shore)",
            body: "1,800-acre botanical garden ending at a 45-ft waterfall swimming area. ~$20/person, life jackets provided. Great North Shore add-on." }
        ]
      },
      {
        title: "Food & Dining", icon: "🍽️",
        items: [
          { status: "pending", title: "Hau Tree Restaurant — Kaimana Beach Hotel",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Beachfront at 2863 Kalakaua Ave. Stunning sunset views. Great for a special O'ahu dinner." },
          { status: "pending", title: "Peace Café",
            tags: [{ label: "Fully Vegan/Veg", style: "veg" }],
            body: "Waikiki's best veg/vegan spot. Simple, solid, affordable. Good for a casual lunch or dinner." },
          { status: "pending", title: "Tane Vegan Izakaya (Honolulu)",
            tags: [{ label: "Fully Vegan", style: "veg" }],
            body: "Hawaii's best plant-based Japanese restaurant. Vegan sushi, izakaya small plates, creative drinks. Top pick for a special vegetarian dinner." },
          { status: "pending", title: "Govinda's (Honolulu, Nu'uanu)",
            tags: [{ label: "Fully Vegetarian", style: "veg" }],
            body: "Vegetarian lunch buffet inside a Hare Krishna temple. Indian curries, dal, sweets. Mon–Sat 11 AM–2 PM, ~$12–15. Best veg value on O'ahu." },
          { status: "pending", title: "Ganesh Dosa (Kailua)",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Excellent South Indian dosas. On the windward side — natural stop when doing a Lanikai/Kailua day." },
          { status: "pending", title: "Leonard's Bakery",
            body: "Iconic malasadas (Portuguese donuts) — get them hot. Cash preferred. ~$2 each." },
          { status: "pending", title: "Liliha Bakery",
            body: "Local institution famous for cocoa puffs (cream-filled choux pastry). 24-hr location on N Kuakini St." },
          { status: "pending", title: "Matsumoto Shave Ice (Haleiwa, North Shore)",
            body: "Hawaii's most iconic shave ice shop. Order 'with ice cream and mochi inside.' $5–7. Non-negotiable on a North Shore day." },
          { status: "pending", title: "Waialua Bakery (Haleiwa, North Shore)",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Family-run café using farm-fresh ingredients. Excellent sandwiches, smoothies, and baked goods. Great lunch in Haleiwa town." },
          { status: "pending", title: "SALT at Our Kaka'ako",
            body: "Walkable open-air neighborhood 10 min from Waikiki. Local restaurants, food trucks, street art murals. Good evening alternative to the tourist strip." },
          { status: "pending", title: "KCC Farmers Market (near Diamond Head)",
            tags: [{ label: "Many veg options", style: "veg" }],
            body: "Saturday 7:30–11 AM at Kapi'olani Community College. Best local food market on O'ahu. Natural pairing on a Diamond Head morning." }
        ]
      }
    ]
  },

  // ── MAUI ──────────────────────────────────────────────────
  maui: {
    info: "4 nights at Andaz Maui at Wailea Resort. Fly HNL→OGG Aug 31 morning. Pick up rental car at OGG.",
    sections: [
      {
        title: "Needs Reservation", icon: "🎫",
        items: [
          { status: "pending", title: "Haleakalā Sunrise",
            tags: [{ label: "60-day window · Jul 4 @ 1 PM EDT", style: "res" }],
            body: "Above-the-clouds at 10,023 ft. One of the most surreal experiences in Hawaii. 40–50°F at summit — jacket, gloves, hat required. Arrive 30+ min before sunrise. Stay for Sliding Sands Trail crater hike (2–4 hrs extra).",
            url: "https://recreation.gov", urlLabel: "recreation.gov · $1 + $30/vehicle",
            photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Wai'anapanapa Black Sand Beach",
            tags: [{ label: "30-day window · Aug 1 @ 1 PM EDT", style: "res" }],
            body: "Jet-black volcanic sand, sea caves, lava arches. One of Maui's most photogenic spots. Book the 7 AM slot for best dramatic light and fewest people.",
            url: "https://gostateparks.hawaii.gov", urlLabel: "gostateparks.hawaii.gov · $5/person + $10/vehicle",
            photo: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Molokini Crater Snorkel",
            tags: [{ label: "Book ASAP — fills weeks ahead", style: "res" }],
            body: "Submerged volcanic crater 3 miles offshore. 150-ft visibility, 250+ fish species. Half-day catamaran departing Mālaea Harbor ~7 AM. Pack a light jacket for the ocean breeze.",
            url: "https://sailtrilogy.com", urlLabel: "Trilogy or Pride of Maui · ~$120–150/person",
            photo: "https://images.unsplash.com/photo-1542397284385-6010376c5337?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Mama's Fish House",
            tags: [{ label: "Book months ahead · NOW", style: "res" }, { label: "Ask about veg options", style: "veg" }],
            body: "Legendary — consistently ranked Hawaii's best restaurant. Intimate, ocean-view setting in Paia. Very limited tables.",
            url: "https://www.mamasfishhouse.com", urlLabel: "mamasfishhouse.com · ~$80–120/person" },
          { status: "watching", title: "Iao Valley State Park",
            tags: [{ label: "30-day window · Aug 1 (IF reopened)", style: "res" }],
            body: "Sacred Hawaiian valley, iconic Iao Needle rock formation. Currently CLOSED — monitor for 2026 reopening.",
            url: "https://gostateparks.hawaii.gov", urlLabel: "gostateparks.hawaii.gov · $5/person + $10/vehicle" }
        ]
      },
      {
        title: "Beaches & Snorkelling", icon: "🐠",
        items: [
          { status: "pending", title: "Makena Beach (Big Beach)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "3,000 ft of golden sand, crystal-clear water. One of Maui's largest and most beautiful beaches. Powerful shore break — don't turn your back on the waves.",
            photo: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Kapalua Beach",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Protected northwest Maui cove. Calm, beautiful, good snorkelling near rocky edges. Turtle sightings very common. Quieter than south Maui." },
          { status: "pending", title: "Honolua Bay",
            tags: [{ label: "No reservation · No facilities", style: "free" }],
            body: "Raw and rugged. Outstanding coral reef — one of Maui's best snorkel spots. Short dirt trail to access. Bring everything you need." },
          { status: "pending", title: "Wailea Beach",
            tags: [{ label: "Walking distance from Andaz", style: "tip" }],
            body: "Premium white sand beach directly in the Wailea hotel corridor. Easy walk from Andaz. Calm, clear water. Best quick morning swim without driving." },
          { status: "pending", title: "Keawakapu Beach (Kihei)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Soft sand, calm clear water, minimal crowds. 20-min drive from Andaz. Great for morning walks and easy snorkelling near rocky outcrops." },
          { status: "pending", title: "Po'olenalena Beach (South Kihei)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Quiet, uncrowded golden sand beach south of Makena. Low-key locals' spot with good snorkeling near the rocks. 25-min drive from Andaz." },
          { status: "pending", title: "Dragon's Teeth Rock Formation (Kapalua)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Dramatic jagged lava rock spires at the end of the Kapalua Coastal Trail. Very photogenic. Pair with Kapalua Beach on a west Maui day." }
        ]
      },
      {
        title: "Landmarks & Nature", icon: "🌿",
        items: [
          { status: "pending", title: "Road to Hāna (Hwy 360)",
            body: "All-day drive: 64 miles, 620 curves, 59 bridges. Leave Andaz by 6:30–7 AM to stay ahead of traffic. Key stops: Twin Falls, Wailua Falls, Aunty Sandy's banana bread, Wai'anapanapa, Hana town, Pipiwai Trail. Consider the full loop back via Ulupalakua.",
            photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" },
          { status: "pending", title: "Twin Falls (Hana Hwy, Mile ~2)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "The first waterfall stop on Road to Hana: two beautiful cascades with a swimming pool, 20-min walk. Perfect warm-up before the bigger stops ahead." },
          { status: "pending", title: "Wailua Falls",
            tags: [{ label: "No reservation · Roadside stop", style: "free" }],
            body: "Stunning 80-ft twin falls. Easy roadside stop on Road to Hana — no hike required." },
          { status: "pending", title: "Pua'a Ka'a State Wayside (Hana Hwy, Mile ~22)",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Two small waterfalls with swimmable pools. Very underrated — much less crowded than Twin Falls. Easy pull-off stop mid–Hana drive." },
          { status: "pending", title: "Pipiwai Trail (Haleakalā NP — Kipahulu)",
            tags: [{ label: "Same $30 NP vehicle pass", style: "tip" }],
            body: "One of Maui's best hikes. 4 miles round trip through a towering bamboo forest to 400-ft Waimoku Falls. 2.5–4 hrs. No separate reservation needed. At the end of Road to Hana — a must-do on Hana day." },
          { status: "pending", title: "Ohe'o Gulch / Seven Sacred Pools (Haleakalā NP)",
            tags: [{ label: "Same $30 NP vehicle pass", style: "tip" }],
            body: "Tiered freshwater pools cascading to the ocean at the end of Road to Hana. Swimming depends on water conditions — check at Kipahulu Visitor Center. Pair with Pipiwai Trail." },
          { status: "pending", title: "Ho'okipa Beach Park",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "World-famous windsurfing beach. 40+ green sea turtles haul out on the beach in the evening (after ~3 PM). Perfect stop when visiting Paia." },
          { status: "pending", title: "Nakalele Blowhole",
            body: "Volcanic blowhole shooting water 50+ ft. Dramatic north Maui coastal scenery. Moderate 20-min hike. Don't get too close — sneaker waves are dangerous." },
          { status: "pending", title: "Upcountry Maui / Kula",
            tags: [{ label: "No reservation · Free", style: "free" }],
            body: "Cool highlands at 2,000–3,000 ft above the coast. Sweeping ocean views, lavender farms (Ali'i Kula Lavender), pineapple fields. Completely different feel. Great afternoon drive after a Haleakalā sunrise." },
          { status: "pending", title: "Lahaina Town (West Maui)",
            tags: [{ label: "⚠️ Check access before visiting", style: "res" }],
            body: "Historic whaling village rebuilding from 2023 wildfire. Banyan Tree Park still closed as of May 2026 (late 2026 reopening anticipated — tree survived). Front Street area partially open. Check mauicounty.gov before visiting.",
            url: "https://www.mauicounty.gov", urlLabel: "mauicounty.gov" },
          { status: "pending", title: "Maui Ocean Center (Mālaea Harbor)",
            body: "Hawaii's largest aquarium with a glass tunnel through a 750,000-gallon open ocean tank. $35/person. Right at Mālaea Harbor — natural pairing on Molokini day. Good rainy-day option." }
        ]
      },
      {
        title: "Food & Dining", icon: "🍽️",
        items: [
          { status: "pending", title: "Café des Amis — Paia Town",
            tags: [{ label: "Excellent veg options", style: "veg" }],
            body: "French-Indian-Mediterranean café on Baldwin Ave. Outstanding vegetarian and vegan options: crêpes, curries, fresh bowls. Great stop alongside Mama's or Flatbread." },
          { status: "pending", title: "Choice Health Bar — Paia Town",
            tags: [{ label: "Fully Vegan/Veg", style: "veg" }],
            body: "Award-winning vegan/vegetarian café. Acai bowls, smoothies, cold-pressed juices. Great pre–Road to Hana fuel stop in Paia." },
          { status: "pending", title: "Flatbread Company — Paia",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Wood-fired pizza, great vegetarian options. Paia combo: Flatbread for lunch, Mama's for dinner." },
          { status: "pending", title: "Café Mambo — Paia Town",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Casual, eclectic menu in charming hippie surf town. No reservation needed. Great casual stop." },
          { status: "pending", title: "Nuka Restaurant — Hana",
            tags: [{ label: "Veg options", style: "veg" }],
            body: "Best restaurant in Hana for a Road to Hana lunch. Reservation recommended. Scenic location." },
          { status: "pending", title: "Aunty Sandy's Banana Bread — Hana Hwy",
            body: "The most famous roadside stop in Hawaii near mile marker 18. Get it warm from the foil. A must on Road to Hana." },
          { status: "pending", title: "Pita Paradise — Wailea Village",
            tags: [{ label: "Excellent veg options", style: "veg" }],
            body: "Mediterranean restaurant 5 min from Andaz. Falafel, hummus, veggie pitas, Greek salad. Best nearby veg-friendly dinner when you don't want to drive far." },
          { status: "pending", title: "Ka'ana Kitchen — Andaz Wailea",
            tags: [{ label: "Veg-friendly", style: "veg" }],
            body: "Andaz's own farm-to-table restaurant. Breakfast included with FHR. Worth trying for one dinner too." },
          { status: "pending", title: "Leoda's Kitchen & Pie Shop — Olowalu",
            body: "Famous sweet and savory pies and sandwiches on the road between Mālaea Harbor and Lahaina. Essential pit stop on any west Maui day." },
          { status: "pending", title: "Nutcharee's Thai — South Kihei",
            tags: [{ label: "Many vegan options", style: "veg" }],
            body: "Thai restaurant with many vegan and gluten-free options. Good for an easy lunch or dinner in the Kihei area near Andaz." },
          { status: "pending", title: "Earth Aloha Eats — South Kihei",
            tags: [{ label: "Fully Vegan", style: "veg" }],
            body: "Popular vegan food truck with creative tacos, bowls, and wraps. Loved by locals." },
          { status: "pending", title: "Tin Roof — Kahului",
            body: "Chef Sheldon Simeon's casual local favourite near OGG airport. Great last-meal option before departure flight." }
        ]
      }
    ]
  },

  // ── ITINERARY ─────────────────────────────────────────────
  itinerary: [
    { day: 1,  date: "Aug 27", dow: "Thu", island: "✈️ Travel",       title: "CMH → SEA → HNL",                    desc: "Depart Columbus 5:35 PM. 74-min SEA layover. Arrive Honolulu ~midnight. Check in Royal Hawaiian." },
    { day: 2,  date: "Aug 28", dow: "Fri", island: "🌺 O'ahu",         title: "Easy arrival day",                   desc: "Rest morning after late arrival. Afternoon: Waikiki Beach walk, explore Ala Moana. Leonard's Bakery for malasadas." },
    { day: 3,  date: "Aug 29", dow: "Sat", island: "🌺 O'ahu",         title: "Pearl Harbor + Sunset Lookout",      desc: "Pearl Harbor morning (3–4 hrs). Afternoon: Pu'u 'Ualaka'a Lookout for sunset panorama." },
    { day: 4,  date: "Aug 30", dow: "Sun", island: "🌺 O'ahu",         title: "Hanauma Bay + Diamond Head",         desc: "Early morning: Hanauma Bay snorkel. Afternoon: Diamond Head hike — or split over two days." },
    { day: 5,  date: "Aug 31", dow: "Mon", island: "🌺→🌋 Island Hop", title: "Iolani Palace → Fly to Maui",        desc: "Morning: Iolani Palace or Bishop Museum. Afternoon: fly HNL→OGG. Pick up rental car. Andaz Maui check-in." },
    { day: 6,  date: "Sep 1",  dow: "Tue", island: "🌋 Maui",          title: "Molokini + Black Sand Beach",        desc: "Early morning: Molokini Crater snorkel catamaran (depart Mālaea ~7 AM). Afternoon: Wai'anapanapa Black Sand Beach." },
    { day: 7,  date: "Sep 2",  dow: "Wed", island: "🌋 Maui",          title: "Road to Hāna — Full Day",           desc: "Leave Andaz by 6:30 AM. Twin Falls, Wailua Falls, Aunty Sandy's banana bread, Pipiwai Trail, Hana town." },
    { day: 8,  date: "Sep 3",  dow: "Thu", island: "🌋 Maui",          title: "🌅 Haleakalā + Mama's Dinner",      desc: "3 AM wake-up for Haleakalā summit sunrise. Stay for Sliding Sands Trail crater hike. Rest afternoon. Mama's Fish House dinner." },
    { day: 9,  date: "Sep 4",  dow: "Fri", island: "🌋→✈️ Departure",  title: "Beach morning → Depart",            desc: "Morning: Makena Beach or Kapalua. Tin Roof lunch near OGG. Depart Maui 9:20 PM." },
    { day: 10, date: "Sep 5",  dow: "Sat", island: "✈️ Travel",        title: "SEA → CMH · Home",                  desc: "Seattle layover 59 min. Arrive Columbus 4:37 PM." }
  ],

  // ── LOGISTICS ─────────────────────────────────────────────
  logistics: {
    flights: [
      { num: "AS 450", route: "CMH → SEA", time: "Thu Aug 27 · 5:35 PM → 7:38 PM", note: "74-min layover — stay near gate", alert: false },
      { num: "AS 901", route: "SEA → HNL", time: "Thu Aug 27 · 8:52 PM → 11:59 PM HST", note: "Arrive late night", alert: false },
      { num: "⚠️ BOOK", route: "HNL → OGG (Maui)", time: "Aug 31 · Time TBD · ~35 min flight", note: "NOT on Alaska ticket! ~$60–90", alert: true },
      { num: "AS 122", route: "OGG → HNL → SEA", time: "Fri Sep 4 · 9:20 PM → Sat 6:11 AM", note: "Via HNL", alert: false },
      { num: "AS 450", route: "SEA → CMH", time: "Sat Sep 5 · 9:10 AM → 4:37 PM", note: "59-min layover", alert: false }
    ],
    hotels: [
      { name: "The Royal Hawaiian, Luxury Collection", island: "O'ahu", dates: "Aug 27–31 · 4 nights · Waikiki", nightly: "~$500–700", star: false,
        perks: ["💳 $100 property credit", "🥐 Breakfast for 2 daily (included)", "⬆️ Room upgrade (subject to availability)", "🕓 4 PM late checkout", "⚠️ Arriving ~1 AM Aug 28 — email hotel to confirm late-night hold"] },
      { name: "⭐ Andaz Maui at Wailea Resort", island: "Maui", dates: "Aug 31–Sep 4 · 4 nights · Wailea", nightly: "~$700–900", star: true,
        perks: ["💳 $750 property credit — expires Jun 30, book NOW", "🥐 Breakfast for 2 daily (included)", "⬆️ Room upgrade (subject to availability)", "🕓 4 PM late checkout"] }
    ],
    amexTip: "Book <strong>Andaz Maui NOW</strong> → Jan–Jun $300 statement credit + $750 property credit before Jun 30 deadline. Book <strong>Royal Hawaiian after Jul 1</strong> → Jul–Dec $300 statement credit.<br>Total value: $600 statement + $850 property + ~$480 breakfast (FHR, 8 nights) = <strong>~$1,930</strong>",
    car: "Pick up at OGG on Aug 31 arrival. <strong>Book NOW</strong> — Maui cars sell out in summer. Budget/Alamo/National tend to have best rates. Get a <strong>standard SUV</strong> (not economy) — roads to Haleakalā and Hana Hwy benefit from extra clearance. Most rental agreements prohibit driving Pi'ilani Hwy 31 (back road of Hana) — check your policy. Rental car <strong>not needed on O'ahu</strong> — Waikiki is walkable; Uber/Lyft fine for Pearl Harbor, Hanauma Bay, etc."
  },

  // ── TIPS ──────────────────────────────────────────────────
  tips: [
    { section: "Timezone", icon: "🕐", color: "blue",
      title: "HST is always UTC−10 (no daylight saving)",
      body: "Columbus (EDT) in August = UTC−4. So HST = Columbus − 6 hours. A 7 AM HST booking window opens at 1 PM Columbus time. Set alarms 10 min early — bookings sell out in seconds." },
    { section: "Vegetarian", icon: "🥗", color: "green",
      title: "Best vegetarian hubs",
      body: "O'ahu: Chinatown Honolulu and Ala Moana area — multiple Japanese, Indian, and health-food spots. Walk one block inland from Kalakaua Ave (Waikiki main strip) for better food and lower prices.\n\nMaui: Paia Town is the jackpot — Café des Amis, Café Mambo, Flatbread Co., Choice Health Bar, and Mana Foods grocery. Stock up for Road to Hana here." },
    { section: "Money", icon: "💵", color: "coral",
      title: "Carry cash ($100–150 in small bills)",
      body: "Essential for: roadside banana bread stands, shave ice carts, beach parking, tips. Most major spots accept cards but cash wins at local roadside stops." },
    { section: "Money", icon: "🏪", color: "blue",
      title: "Costco saves serious money",
      body: "Costco Iwilei (Honolulu, near airport): Snorkel gear (~$25), sunscreen, snacks on arrival day.\nCostco Maui (Kahului, near OGG): Water, snacks, sunscreen — resort prices are brutal." },
    { section: "Money", icon: "🎁", color: "blue",
      title: "Souvenirs — buy at the grocery store",
      body: "Kona coffee, macadamia nuts, Maui Brewing Co. drinks — Costco or Safeway/Foodland have the same items 40% cheaper than resort gift shops." },
    { section: "Packing", icon: "🧥", color: "blue",
      title: "Haleakalā summit — it's genuinely cold",
      body: "40–50°F at sunrise. Bring a proper jacket, gloves, and warm layers. Non-negotiable — don't let the 80°F beach weather fool you." },
    { section: "Packing", icon: "☀️", color: "blue",
      title: "Sun protection",
      body: "Reef-safe mineral sunscreen only — required by law at Hanauma Bay. Hawaii's UV is more intense than the mainland. Add a rashguard for snorkelling." },
    { section: "Packing", icon: "👟", color: "blue",
      title: "Footwear",
      body: "Water shoes for lava rocks (Wai'anapanapa), hiking shoes for Diamond Head & Haleakalā, flip-flops for beach. Three pairs covers everything." },
    { section: "Practical", icon: "📱", color: "blue",
      title: "Cell coverage on Road to Hana",
      body: "Spotty to nonexistent once you leave Paia. Download offline Google Maps for the entire Hana Hwy before leaving Wailea in the morning." },
    { section: "Practical", icon: "💳", color: "coral",
      title: "Amex FHR phone tip",
      body: "Call 1-800-297-2977 (the FHR dedicated line) rather than booking online — agents can sometimes secure better room categories and flag unadvertised upgrades." }
  ]
};
