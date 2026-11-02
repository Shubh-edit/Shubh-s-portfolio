/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION (KISI BHI VIDEO YA DETAIL KO YAHAN SE CHANGE KAREIN)
 * ==============================================================================
 * 
 * Namaste! Is file mein aapke saare portfolio projects, demo videos, client reviews,
 * aur personal details hain. 
 * 
 * AAP ISKO KAISE UPDATE KAR SAKTE HAIN:
 * 1. Nayi video add karni ho toh project ke andar `videoUrl` mein:
 *    - YouTube link daal sakte hain (jaise: "https://www.youtube.com/watch?v=VIDEO_ID")
 *    - Vimeo link daal sakte hain (jaise: "https://vimeo.com/123456789")
 *    - Direct MP4 video ka link daal sakte hain (jaise: "https://domain.com/video.mp4")
 * 2. Thumbnail ke liye `thumbnail` mein image ka URL daal dein.
 * 3. Client, views, category, tags aur description aap apni pasand se likh sakte hain.
 */

const PORTFOLIO_CONFIG = {
  // Personal & Brand Information
  profile: {
    name: "SHUBH JAISWAL",
    title: "Senior Cinematic Video Editor & Colorist",
    tagline: "Crafting Visual Masterpieces & High-Retention Visual Rhythm for Global Creators, Artists & Brands.",
    bio: "With 6+ years sculpting visual stories, I transform raw footage into immersive cinematic experiences. Specializing in high-impact commercial pacing, DaVinci Resolve color science, and dynamic sound architecture that captivates audiences from the first frame to the last.",
    location: "Mumbai / Worldwide Remote",
    experienceYears: "6+",
    viewsGenerated: "120M+",
    projectsCompleted: "240+",
    satisfactionRate: "99.4%",
    availabilityBadge: "AVAILABLE FOR SELECT PROJECTS",
    
    // Contact Info (Aap apna phone / email yahan badal sakte hain)
    email: "shubh.editcraft@gmail.com",
    whatsapp: "+919876543210",
    instagram: "https://instagram.com/your_handle",
    youtube: "https://youtube.com/@your_channel",
    twitter: "https://twitter.com/your_handle",
    linkedin: "https://linkedin.com/in/your_profile",

    // Featured Showreel (Jo Hero section mein play hoga)
    heroShowreel: {
      title: "2026 OFFICIAL CINEMATIC SHOWREEL",
      duration: "01:42",
      type: "direct", // 'direct' ya 'youtube' ya 'vimeo'
      // Direct high quality demo reel (Tears of Steel 4K VFX Reel)
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "ysz5S6PUM-U", // Agar youtube se chalana ho toh
      poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1920&q=80"
    }
  },

  // Categories for Filter Bar
  categories: [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercials & Ads" },
    { id: "music-video", label: "Music Videos" },
    { id: "retention", label: "YouTube & Storytelling" },
    { id: "fashion", label: "Fashion & Aesthetics" },
    { id: "vfx-color", label: "Color Grading & VFX" }
  ],

  // Projects List
  projects: [
    {
      id: "project-1",
      title: "Cyber Noir: Porsche Taycan Spec Film",
      category: "commercial",
      categoryLabel: "Commercial Film",
      client: "Porsche Studios / AutoArt",
      year: "2026",
      duration: "01:15",
      views: "3.4M+",
      featured: true,
      badge: "FEATURED WORK",
      thumbnail: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      // Demo preview video (mouse hover par auto play hota hai)
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      // Full video link for modal popup (MP4, YouTube, or Vimeo)
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0",
      description: "A high-octane commercial edit designed with hyper-precise sound foley, neon color grading, and dynamic speed ramping. Created to invoke adrenaline and futuristic luxury aesthetics.",
      software: ["Premiere Pro", "DaVinci Resolve Studio", "After Effects"],
      deliverables: ["4K DCI Master", "9:16 Social Cutdowns", "Dolby 5.1 Sound Mix"],
      metrics: {
        avgWatchTime: "92%",
        retentionLift: "+38%",
        shares: "42K+"
      }
    },
    {
      id: "project-2",
      title: "Midnight Mirage: The Electronic Odyssey",
      category: "music-video",
      categoryLabel: "Official Music Video",
      client: "Sony Music / Odesza Collective",
      year: "2026",
      duration: "03:40",
      views: "8.1M+",
      featured: true,
      badge: "AWARD WINNER",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0",
      description: "Synchronized visual rhythm cut precisely to the beat drops, custom analog glitch transitions, and dreamlike film grain emulation. Multi-camera live concert mixed with studio performance.",
      software: ["DaVinci Resolve", "After Effects", "Dehancer Pro"],
      deliverables: ["Music Video 4K Master", "Teaser Cuts", "Spotify Canvas"],
      metrics: {
        avgWatchTime: "88%",
        retentionLift: "+55%",
        shares: "95K+"
      }
    },
    {
      id: "project-3",
      title: "Lost In The Forbidden Arctic: 7-Day Survival",
      category: "retention",
      categoryLabel: "High-Retention Documentary",
      client: "Apex Explorers (2.8M Subs)",
      year: "2025",
      duration: "24:18",
      views: "14.2M+",
      featured: true,
      badge: "14M+ VIEWS",
      thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0",
      description: "Masterclass in long-form retention editing. Structured with 3-act narrative tension, customized 3D map animations, dynamic zooms, and intense orchestral sound design that kept viewers glued throughout 24 minutes.",
      software: ["Premiere Pro", "Blender 3D", "After Effects"],
      deliverables: ["Main YouTube Master", "10 Short-form Clips", "Custom Animated Titles"],
      metrics: {
        avgWatchTime: "68%",
        retentionLift: "+24% over channel avg",
        shares: "180K+"
      }
    },
    {
      id: "project-4",
      title: "VOGUE Milano: Sensorial Silk & Shadows",
      category: "fashion",
      categoryLabel: "Fashion Editorial",
      client: "Vogue Italia / Armani Exchange",
      year: "2026",
      duration: "00:58",
      views: "1.9M+",
      featured: false,
      badge: "EDITORIAL",
      thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0",
      description: "Slow-motion aesthetic film captured on ARRI Alexa Mini LF. Color-graded with a rich, sultry 35mm print profile with crushed blacks, warm highlights, and delicate texture.",
      software: ["DaVinci Resolve Studio", "FilmConvert Nitrate"],
      deliverables: ["4K DCI Film", "9:16 Vertical Cut", "Instagram Carousel Cut"],
      metrics: {
        avgWatchTime: "94%",
        retentionLift: "+41%",
        shares: "28K+"
      }
    },
    {
      id: "project-5",
      title: "Apex Protocol: Sci-Fi CGI & Visual Breakdown",
      category: "vfx-color",
      categoryLabel: "VFX & Title Sequence",
      client: "Paramount Motion Pictures Lab",
      year: "2025",
      duration: "01:45",
      views: "4.5M+",
      featured: false,
      badge: "VFX & COLOR",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&rel=0",
      description: "Complete post-production pipeline: green screen compositing, 3D hologram asset integration, color grading in ACES color space, and custom UI design for futuristic HUD displays.",
      software: ["After Effects", "Nuke", "DaVinci Resolve", "Blender"],
      deliverables: ["Full 4K ProRes 4444 Master", "Behind The Scenes Reel"],
      metrics: {
        avgWatchTime: "89%",
        retentionLift: "+32%",
        shares: "64K+"
      }
    },
    {
      id: "project-6",
      title: "Hypebeast Streetwear: 9:16 Viral Retention Reel",
      category: "retention",
      categoryLabel: "Viral Short-Form / Reel",
      client: "Nike / SNKRS Drop",
      year: "2026",
      duration: "00:28",
      views: "18.9M+",
      featured: false,
      badge: "VIRAL REEL",
      thumbnail: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
      previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0",
      description: "Engineered specifically for short-form retention: dynamic 3D camera tracking, custom kinetic typography captions, snappy audio effects on every cut, and an infinite looping outro hook.",
      software: ["Premiere Pro", "After Effects", "CapCut Pro"],
      deliverables: ["9:16 TikTok / Reel 4K Master", "Clean Clean Text Version"],
      metrics: {
        avgWatchTime: "118%",
        retentionLift: "+64%",
        shares: "320K+"
      }
    }
  ],

  // Interactive Color Grading Comparison Slider Data
  colorGradingShowcase: {
    title: "The Art of Color Science",
    subtitle: "From Raw S-Log3 / Arri Log to Cinematic Kodak 2383 Film Print",
    description: "Drag the slider to see how flat, dull raw footage is transformed into rich, emotive cinematic imagery using custom LUTs, CST (Color Space Transform), and skin tone isolation in DaVinci Resolve.",
    // Before (Flat LOG profile)
    beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=40&sat=-80",
    beforeLabel: "RAW LOG FOOTAGE",
    // After (Rich film color grade)
    afterImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=90",
    afterLabel: "FINAL KODAK 2383 GRADE",
    specs: [
      { label: "Color Science", value: "DaVinci YRGB Color Managed" },
      { label: "Color Space", value: "Arri Wide Gamut / Rec.709" },
      { label: "Look Emulation", value: "Kodak Vision3 500T 5219" },
      { label: "Monitoring", value: "10-bit HDR calibrated 1000 nits" }
    ]
  },

  // What I Do / Specialized Services
  services: [
    {
      icon: "film",
      title: "Cinematic Narrative & Pacing",
      description: "Mastering the emotional curve of your story. Every cut has intent, rhythm, and tension that commands viewer attention from the first second.",
      tools: "Premiere Pro • Final Cut Pro"
    },
    {
      icon: "palette",
      title: "Hollywood-Grade Color Grading",
      description: "Expert color grading in DaVinci Resolve Studio. Film grain emulation, skin-tone preservation, custom LUT craft, and HDR / SDR delivery.",
      tools: "DaVinci Resolve Studio • Dehancer"
    },
    {
      icon: "volume-2",
      title: "Immersive Sound Architecture",
      description: "Audio is 60% of the film experience. Custom whooshes, cinematic risers, sub-bass impacts, spatial soundscapes, and vocal mastering to -14 LUFS.",
      tools: "Soundly • iZotope RX • Audition"
    },
    {
      icon: "sparkles",
      title: "Motion Graphics & 3D VFX",
      description: "Sleek kinetic typography, 3D camera tracking, logo reveals, map animations, and seamless green-screen compositing.",
      tools: "After Effects • Blender • Boris FX Mocha"
    },
    {
      icon: "zap",
      title: "High-Retention Short-Form & Reels",
      description: "Viral hooks, retention-optimized pacing, custom sound design, and kinetic subtitles that turn casual scrollers into loyal followers.",
      tools: "9:16 Vertical Optimization • Hook Science"
    },
    {
      icon: "clock",
      title: "Rapid 48-Hour Turnarounds",
      description: "High-speed workflows with organized proxy setups and Frame.io client review pipelines for seamless feedback and instant revisions.",
      tools: "Frame.io • High-Speed Fiber Ingest"
    }
  ],

  // Workflow / Steps
  workflow: [
    {
      step: "01",
      name: "The Vision & Brief",
      desc: "We discuss your creative vision, audience goals, references, pacing style, and required deliverables."
    },
    {
      step: "02",
      name: "Assembly & Story Spine",
      desc: "Footage organization, selecting the golden takes, and crafting the initial narrative flow and story arc."
    },
    {
      step: "03",
      name: "Pacing & Sound Design",
      desc: "Adding sonic textures, foley, tension risers, and micro-edits that establish the pulse of the film."
    },
    {
      step: "04",
      name: "Color Grade & Master Polish",
      desc: "Final film print color emulation, motion graphics polish, and high-bitrate delivery in all required aspect ratios."
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      quote: "Shubh is arguably one of the most musically intuitive editors in the game right now. He took our raw festival footage and turned it into an award-winning aftermovie that got over 8M views.",
      clientName: "Marcus Vance",
      clientRole: "Creative Director, Astral Sound Records",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      projectTag: "Music Video & Festival Film",
      rating: 5
    },
    {
      quote: "Our YouTube retention jumped from 48% to 73% in just one month after hiring him. He knows exactly how to hook viewers in the first 5 seconds and maintain suspense throughout.",
      clientName: "David Sterling",
      clientRole: "Host & Creator, Sterling Odyssey (1.8M Subs)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      projectTag: "YouTube Retention Series",
      rating: 5
    },
    {
      quote: "The Porsche spec commercial blew our executive board away. His attention to sound foley, color contrast, and micro-cuts feels like a \$50,000 agency production.",
      clientName: "Elena Rostova",
      clientRole: "Head of Marketing, LuxeMedia Europe",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      projectTag: "Automotive Commercial",
      rating: 5
    }
  ],

  // Software & Tool Badges
  softwareStack: [
    { name: "Adobe Premiere Pro", icon: "video", proficiency: "Expert (6+ Yrs)" },
    { name: "DaVinci Resolve Studio", icon: "palette", proficiency: "Master Colorist" },
    { name: "Adobe After Effects", icon: "layers", proficiency: "Advanced Motion & VFX" },
    { name: "Blender 3D", icon: "box", proficiency: "3D Camera & Assets" },
    { name: "Boris FX Mocha Pro", icon: "crosshair", proficiency: "Planar Tracking" },
    { name: "Soundly / iZotope RX", icon: "volume-2", proficiency: "Pro Audio Design" }
  ],

  // Interactive Project Budget Calculator Presets
  calculatorPackages: [
    { id: "commercial", name: "High-End Commercial / Brand Film", basePrice: "₹45,000+", duration: "3-5 Days" },
    { id: "music-video", name: "Cinematic Music Video", basePrice: "₹35,000+", duration: "4-6 Days" },
    { id: "youtube", name: "High-Retention YouTube Longform", basePrice: "₹18,000+", duration: "2-3 Days" },
    { id: "reels-pack", name: "Short-Form / Reels Pack (5x Videos)", basePrice: "₹22,000+", duration: "48 Hours" },
    { id: "color-grading", name: "Standalone DaVinci Color Grade", basePrice: "₹15,000+", duration: "24-48 Hours" }
  ]
};

// Make config globally accessible
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

