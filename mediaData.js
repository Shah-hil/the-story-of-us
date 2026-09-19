// =========================================================================
// PHOTOS & VIDEO MEMORIES REEL - AUTHENTIC GALLERY CONFIGURATION
// Real couple memories, travel moments, and live video clips.
// =========================================================================

const MEDIA_REEL_DATA = [
  {
    id: "media-korean-booth",
    type: "video",
    title: "Korean Photobooth Live 🎬",
    date: "February 1, 2026",
    location: "Noida Photobooth",
    videoUrl: "videos/korean_photobooth.mp4",
    poster: "images/chapters/chapter_11.jpg",
    caption: "Our first official date inside the Korean photobooth. That sweet shy smile, the giggles, and our very first day as us.",
    sticker: "📸"
  },
  {
    id: "media-first-date",
    type: "photo",
    title: "Day 1 — First Official Date",
    date: "February 1, 2026",
    location: "Noida",
    url: "images/gallery/PXL_20260201_142802819.MP.jpg",
    caption: "I was so nervous waiting for you. Then you arrived in that blue dress, and everything became effortless and right.",
    sticker: "🌹"
  },
  {
    id: "media-day-2",
    type: "photo",
    title: "Our Second Day Together",
    date: "February 2, 2026",
    location: "Majnu ka Tila",
    url: "images/gallery/PXL_20260202_145455961.jpg",
    caption: "Watching Marty Supreme, walking through Majnu ka Tila, and realizing one day apart was already too much.",
    sticker: "🍿"
  },
  {
    id: "media-feb9",
    type: "photo",
    title: "Winter Sun & Warm Smiles",
    date: "February 9, 2026",
    location: "Campus Walk",
    url: "images/gallery/PXL_20260209_124713037.jpg",
    caption: "Midday sunshine, comfortable silence, and that look in your eyes that always makes time slow down.",
    sticker: "☀️"
  },
  {
    id: "media-valentine-portrait",
    type: "photo",
    title: "Our First Valentine's Portrait",
    date: "February 14, 2026",
    location: "Valentine's Day",
    url: "images/gallery/PXL_20260214_093015431.PORTRAIT.jpg",
    caption: "Our first Valentine's Day together. Dressed up, hearts racing, and completely sure of what we found in each other.",
    sticker: "💖"
  },
  {
    id: "media-valentine-candid",
    type: "photo",
    title: "Valentine's Glow",
    date: "February 14, 2026",
    location: "Special Celebration",
    url: "images/gallery/PXL_20260214_093053368.PORTRAIT.jpg",
    caption: "That radiant smile of yours that lit up the entire room.",
    sticker: "✨"
  },
  {
    id: "media-udaipur-roadtrip",
    type: "video",
    title: "The Udaipur Road Trip 🚌",
    date: "February 19, 2026",
    location: "En Route to Udaipur",
    videoUrl: "images/gallery/PXL_20260219_084748556.mp4",
    poster: "images/gallery/IMG20260219085019.jpg",
    caption: "Sitting side by side on the journey to Udaipur. The endless highway, music playing, and you leaning close.",
    sticker: "🚌"
  },
  {
    id: "media-udaipur-arrival",
    type: "photo",
    title: "First Sights of Udaipur",
    date: "February 19, 2026",
    location: "City of Lakes",
    url: "images/gallery/IMG_2784.jpg",
    caption: "Stepping out into Udaipur together. The gentle breeze off the lakes and the thrill of exploring somewhere new with you.",
    sticker: "🏰"
  },
  {
    id: "media-udaipur-palace",
    type: "photo",
    title: "Lakeside Architectural Wonder",
    date: "February 19, 2026",
    location: "Udaipur Palace View",
    url: "images/gallery/IMG_2788.jpg",
    caption: "Centuries of history and marble courtyards, but all I wanted to look at was you.",
    sticker: "🏛️"
  },
  {
    id: "media-udaipur-afternoon",
    type: "photo",
    title: "Afternoon Light Across the Water",
    date: "February 19, 2026",
    location: "Lake Pichola",
    url: "images/gallery/IMG_2865.jpg",
    caption: "The calm waters of Lake Pichola glistening under the afternoon sun as we walked together.",
    sticker: "🌊"
  },
  {
    id: "media-udaipur-day2",
    type: "photo",
    title: "Golden Hour in Udaipur",
    date: "February 20, 2026",
    location: "Udaipur Courtyards",
    url: "images/gallery/PXL_20260220_124150193.MP.jpg",
    caption: "Golden light filtering through heritage arches. Felt genuinely like our own private fairytale.",
    sticker: "🌅"
  },
  {
    id: "media-udaipur-steps",
    type: "photo",
    title: "Wandering Ancient Corridors",
    date: "February 20, 2026",
    location: "Historic Udaipur",
    url: "images/gallery/PXL_20260220_130652804.MP.jpg",
    caption: "Getting lost together in the stone passages and laughing at how neither of us had a sense of direction.",
    sticker: "👣"
  },
  {
    id: "media-udaipur-day3",
    type: "photo",
    title: "Rooftop Views & Sunlit Skies",
    date: "February 21, 2026",
    location: "Udaipur Rooftop",
    url: "images/gallery/PXL_20260221_111531294.MP.jpg",
    caption: "Looking out over the city together. Peaceful, beautiful, and completely unforgettable.",
    sticker: "🕊️"
  },
  {
    id: "media-udaipur-morning",
    type: "photo",
    title: "Crisp Morning in the Valley",
    date: "February 22, 2026",
    location: "Udaipur Sunrise",
    url: "images/gallery/PXL_20260222_072348952.MP.jpg",
    caption: "Early morning calm before the city woke up. Just the cool morning air and your presence beside me.",
    sticker: "🌄"
  },
  {
    id: "media-udaipur-lakefront",
    type: "photo",
    title: "By the Glistening Water",
    date: "February 22, 2026",
    location: "Lakefront Ghats",
    url: "images/gallery/PXL_20260222_122155535.MP.jpg",
    caption: "Sitting near the ripples of the water, not caring what time it was, just glad we were here together.",
    sticker: "💧"
  },
  {
    id: "media-march-spring",
    type: "photo",
    title: "Spring Morning Laughter",
    date: "March 14, 2026",
    location: "Morning Sunshine",
    url: "images/gallery/PXL_20260314_110755956.MP.jpg",
    caption: "When winter faded into spring and every ordinary morning started feeling like a blessing.",
    sticker: "🌸"
  },
  {
    id: "media-march-candid",
    type: "photo",
    title: "Unfiltered Midday Joy",
    date: "March 20, 2026",
    location: "Campus Corners",
    url: "images/gallery/PXL_20260320_112021229.MP.jpg",
    caption: "The kind of candid happiness you can't fake or pose for. Pure, effortless comfort.",
    sticker: "🌿"
  },
  {
    id: "media-march-motion",
    type: "video",
    title: "A Candid Fleeting Second 🎞️",
    date: "March 31, 2026",
    location: "Our Secret Spot",
    videoUrl: "images/gallery/PXL_20260331_111108530.LS.mp4",
    poster: "images/gallery/PXL_20260331_111056129.MP.jpg",
    caption: "A live micro-clip capturing a brief spontaneous moment between us in motion.",
    sticker: "💫"
  },
  {
    id: "media-april-golden",
    type: "photo",
    title: "Golden Afternoon Warmth",
    date: "April 17, 2026",
    location: "Spring Sun",
    url: "images/gallery/PXL_20260417_113152486.MP.jpg",
    caption: "Soft afternoon sun, your hair catching the light, and that sweet laugh I will never get tired of hearing.",
    sticker: "🌻"
  },
  {
    id: "media-may-always",
    type: "photo",
    title: "To Everyday and Every Tomorrow",
    date: "May 8, 2026",
    location: "Side by Side",
    url: "images/gallery/PXL_20260508_090848747.MP.jpg",
    caption: "Every single day that passes only makes it clearer: you're my favorite person in the entire world.",
    sticker: "♾️"
  }
];
