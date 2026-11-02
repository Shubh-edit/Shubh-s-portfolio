# Luxury Video Editor Portfolio Website & Owner Admin Panel 🎬✨

A world-class, ultra-luxury cinematic portfolio designed specifically for professional Video Editors, Colorists, and Motion Designers to showcase high-ticket commercial, music video, YouTube retention, and narrative projects.

## 🌟 Key Highlights
- **Cinematic Dark Luxury Aesthetic**: Deep obsidian background with champagne gold accents, subtle film grain texture, and ambient backlight glows.
- **Dedicated Password-Protected Admin Panel (`admin.html`)**: Only the owner can access, add, edit, or delete projects and customize profile info.
- **Instant Live Synchronization**: Any changes made in the Admin Panel immediately reflect on the live portfolio (`index.html`) using local state persistence.
- **Interactive Showreel & Cinema Modal**: Instant fullscreen cinema playback supporting Direct MP4, YouTube, and Vimeo embeds with complete project metadata.
- **Hover Video Previews**: Smooth Netflix-style silent video preview on mouse hover over project cards.
- **Interactive Color Grading Slider**: Draggable Before / After split-screen slider showcasing Raw S-Log3 / Arri Log vs. Kodak 2383 Film Print Emulation in DaVinci Resolve.
- **Project Estimator & 1-Click WhatsApp Booking**: Clients can pick editing packages and send pre-filled WhatsApp messages or email briefs.
- **Zero Build Dependencies**: Pure HTML5, CSS3, ES6 JavaScript, and Lucide icons. Works offline and in any modern browser.

## 📁 File Structure
```
repo/
├── index.html                  # Main public portfolio website (Clean, no public edit buttons)
├── admin.html                  # Password-protected Owner Admin Panel
├── HOW_TO_CUSTOMIZE.md         # Detailed owner instructions (Hindi & English)
├── README.md                   # Project overview
└── assets/
    ├── css/
    │   └── style.css           # Luxury styles, custom cursor, animations, layout
    └── js/
        ├── projects-data.js    # Central config & fallback demo projects
        └── main.js             # Live rendering engine, video modal & slider logic
```

## 🔒 Owner Access
- Open `admin.html` in your browser.
- Default Passcode: `admin123` (Changeable inside Settings).
