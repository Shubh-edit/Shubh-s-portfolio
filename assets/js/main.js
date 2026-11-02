/**
 * ==============================================================================
 * MAIN INTERACTIVE APPLICATION ENGINE
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if Owner has saved custom updates in Admin Panel
  try {
    const savedCustomData = localStorage.getItem('PORTFOLIO_CUSTOM_DATA');
    if (savedCustomData) {
      const parsed = JSON.parse(savedCustomData);
      window.PORTFOLIO_CONFIG = { ...window.PORTFOLIO_CONFIG, ...parsed };
    }
  } catch (err) {
    console.warn("Could not load custom data from localStorage", err);
  }

  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("PORTFOLIO_CONFIG not found!");
    return;
  }

  // Initialize all subsystems
  initProfileData(config.profile);
  initHeroShowreel(config.profile.heroShowreel);
  initCategoryFilters(config.categories, config.projects);
  initProjectsGrid(config.projects);
  initColorGradingSlider(config.colorGradingShowcase);
  initServices(config.services);
  initWorkflow(config.workflow);
  initTestimonials(config.testimonials);
  initSoftwareStack(config.softwareStack);
  initProjectCalculator(config.calculatorPackages, config.profile);
  initCustomCursor();
  initCinemaModal();
  
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * 1. Populate Profile & Header Data
 */
function initProfileData(profile) {
  // Brand name & titles
  document.querySelectorAll('.profile-name').forEach(el => el.textContent = profile.name);
  document.querySelectorAll('.profile-title').forEach(el => el.textContent = profile.title);
  
  const heroTaglineEl = document.getElementById('hero-tagline');
  if (heroTaglineEl) heroTaglineEl.textContent = profile.tagline;

  const heroBioEl = document.getElementById('hero-bio');
  if (heroBioEl) heroBioEl.textContent = profile.bio;

  const availabilityEl = document.getElementById('availability-badge-text');
  if (availabilityEl) availabilityEl.textContent = profile.availabilityBadge;

  // Stats Counters
  const statViews = document.getElementById('stat-views');
  if (statViews) statViews.textContent = profile.viewsGenerated;

  const statProjects = document.getElementById('stat-projects');
  if (statProjects) statProjects.textContent = profile.projectsCompleted;

  const statExperience = document.getElementById('stat-experience');
  if (statExperience) statExperience.textContent = profile.experienceYears;

  const statSatisfaction = document.getElementById('stat-satisfaction');
  if (statSatisfaction) statSatisfaction.textContent = profile.satisfactionRate;

  // Contact Links
  const whatsappBtns = document.querySelectorAll('.whatsapp-link');
  whatsappBtns.forEach(btn => {
    btn.href = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Shubh! I saw your video editing portfolio and I'd like to discuss a project with you.")}`;
  });

  const emailBtns = document.querySelectorAll('.email-link');
  emailBtns.forEach(btn => {
    btn.href = `mailto:${profile.email}?subject=${encodeURIComponent("Video Editing Inquiry / New Project")}`;
  });

  // Socials
  const igLink = document.getElementById('social-instagram');
  if (igLink && profile.instagram) igLink.href = profile.instagram;

  const ytLink = document.getElementById('social-youtube');
  if (ytLink && profile.youtube) ytLink.href = profile.youtube;

  const twLink = document.getElementById('social-twitter');
  if (twLink && profile.twitter) twLink.href = profile.twitter;

  const liLink = document.getElementById('social-linkedin');
  if (liLink && profile.linkedin) liLink.href = profile.linkedin;
}

/**
 * 2. Hero Showreel Card Setup
 */
function initHeroShowreel(showreel) {
  const teaserWrapper = document.getElementById('hero-showreel-teaser');
  const videoEl = document.getElementById('hero-showreel-video');
  const titleEl = document.getElementById('hero-showreel-title');
  const durationEl = document.getElementById('hero-showreel-duration');

  if (titleEl) titleEl.textContent = showreel.title;
  if (durationEl) durationEl.textContent = `[${showreel.duration}]`;

  if (videoEl && showreel.videoUrl) {
    videoEl.src = showreel.videoUrl;
    if (showreel.poster) videoEl.poster = showreel.poster;
  }

  if (teaserWrapper) {
    teaserWrapper.addEventListener('click', () => {
      openCinemaModal({
        title: showreel.title,
        client: "Official Reel 2026",
        categoryLabel: "Cinematic Reel",
        fullVideoUrl: showreel.videoUrl,
        youtubeEmbedUrl: showreel.youtubeId ? `https://www.youtube.com/embed/${showreel.youtubeId}?autoplay=1&rel=0` : null,
        description: "Official compilation of selected cinematic works, high-impact commercials, music videos, and dynamic VFX edits crafted across 2025-2026.",
        software: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "After Effects", "Blender"],
        deliverables: ["4K DCI Master", "Dolby Atmos 5.1", "Social 9:16 Cuts"],
        metrics: {
          avgWatchTime: "94%",
          retentionLift: "Global Master",
          shares: "Featured"
        }
      });
    });
  }
}

/**
 * 3. Category Filter Tabs
 */
function initCategoryFilters(categories, projects) {
  const container = document.getElementById('filter-bar');
  if (!container) return;

  container.innerHTML = '';
  categories.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `filter-tab ${index === 0 ? 'active' : ''}`;
    btn.textContent = cat.label;
    btn.dataset.category = cat.id;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects(cat.id, projects);
    });

    container.appendChild(btn);
  });
}

function filterProjects(categoryId, projects) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (categoryId === 'all' || cardCat === categoryId) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

/**
 * 4. Render Project Cards & Hover Video Previews
 */
function initProjectsGrid(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  projects.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = proj.category;
    card.dataset.id = proj.id;

    const softwareChips = proj.software.map(s => `<span class="project-tool-chip">${s}</span>`).join('');

    card.innerHTML = `
      <div class="project-media-wrapper">
        <img class="project-thumbnail" src="${proj.thumbnail}" alt="${proj.title}" loading="lazy" />
        <video class="project-preview-video" src="${proj.previewVideo}" muted loop playsinline preload="metadata"></video>
        
        <div class="card-top-badges">
          <span class="badge-luxury-tag">${proj.badge || proj.categoryLabel}</span>
          <span class="badge-duration">${proj.duration}</span>
        </div>

        <div class="card-center-play-hover">
          <i data-lucide="play" style="width: 24px; height: 24px; fill: currentColor;"></i>
        </div>
      </div>

      <div class="project-card-body">
        <div class="project-meta-row">
          <span>${proj.client}</span>
          <span>${proj.year} • ${proj.views}</span>
        </div>

        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-desc">${proj.description}</p>

        <div class="project-tags-row">
          ${softwareChips}
        </div>
      </div>
    `;

    // Video preview on hover
    const videoPreview = card.querySelector('.project-preview-video');
    if (videoPreview) {
      card.addEventListener('mouseenter', () => {
        const playPromise = videoPreview.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay might be muted/safe, ignore minor catch
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        videoPreview.pause();
        videoPreview.currentTime = 0;
      });
    }

    // Click to open Cinema modal
    card.addEventListener('click', () => {
      openCinemaModal(proj);
    });

    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * 5. Interactive Before / After Color Grading Slider
 */
function initColorGradingSlider(gradingData) {
  if (!gradingData) return;

  const titleEl = document.getElementById('grading-title');
  const subtitleEl = document.getElementById('grading-subtitle');
  const descEl = document.getElementById('grading-desc');

  if (titleEl) titleEl.textContent = gradingData.title;
  if (subtitleEl) subtitleEl.textContent = gradingData.subtitle;
  if (descEl) descEl.textContent = gradingData.description;

  const sliderWrapper = document.getElementById('color-grading-slider');
  const clipLayer = document.getElementById('grading-clip-layer');
  const handleLine = document.getElementById('grading-handle-line');
  const beforeImg = document.getElementById('grading-before-img');
  const afterImg = document.getElementById('grading-after-img');

  if (beforeImg) beforeImg.src = gradingData.beforeImage;
  if (afterImg) afterImg.src = gradingData.afterImage;

  // Render Tech Specs
  const specsContainer = document.getElementById('grading-specs-grid');
  if (specsContainer && gradingData.specs) {
    specsContainer.innerHTML = gradingData.specs.map(spec => `
      <div class="glass-panel" style="padding: 1rem 1.25rem;">
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.25rem;">${spec.label}</div>
        <div style="font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: #fff;">${spec.value}</div>
      </div>
    `).join('');
  }

  if (!sliderWrapper || !clipLayer || !handleLine) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = sliderWrapper.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percent = (offsetX / rect.width) * 100;
    clipLayer.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    handleLine.style.left = `${percent}%`;
  }

  // Initial 50% split
  clipLayer.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;
  handleLine.style.left = `50%`;

  // Mouse Events
  sliderWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events (Mobile)
  sliderWrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches.length > 0) updateSliderPosition(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) updateSliderPosition(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/**
 * 6. Services & Capabilities
 */
function initServices(services) {
  const container = document.getElementById('services-grid');
  if (!container || !services) return;

  container.innerHTML = services.map(svc => `
    <div class="service-card">
      <div class="service-icon-box">
        <i data-lucide="${svc.icon}" style="width: 24px; height: 24px;"></i>
      </div>
      <h3 class="service-title">${svc.title}</h3>
      <p class="service-desc">${svc.description}</p>
      <div class="service-tools">${svc.tools}</div>
    </div>
  `).join('');
}

/**
 * 7. Workflow Steps
 */
function initWorkflow(workflow) {
  const container = document.getElementById('workflow-grid');
  if (!container || !workflow) return;

  container.innerHTML = workflow.map(w => `
    <div class="workflow-card">
      <div class="workflow-number">${w.step}</div>
      <h4 class="workflow-name">${w.name}</h4>
      <p class="workflow-desc">${w.desc}</p>
    </div>
  `).join('');
}

/**
 * 8. Client Testimonials
 */
function initTestimonials(testimonials) {
  const container = document.getElementById('testimonials-grid');
  if (!container || !testimonials) return;

  container.innerHTML = testimonials.map(t => {
    const stars = '★'.repeat(t.rating || 5);
    return `
      <div class="testimonial-card">
        <div>
          <div style="color: var(--accent-gold); font-size: 1.1rem; margin-bottom: 0.85rem; letter-spacing: 2px;">${stars}</div>
          <p class="testimonial-quote">"${t.quote}"</p>
        </div>
        <div class="testimonial-author">
          <img class="testimonial-avatar" src="${t.avatar}" alt="${t.clientName}" />
          <div>
            <div class="testimonial-name">${t.clientName}</div>
            <div class="testimonial-role">${t.clientRole} • <span style="color: var(--accent-gold);">${t.projectTag}</span></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 9. Software Stack Badges
 */
function initSoftwareStack(stack) {
  const container = document.getElementById('software-stack-row');
  if (!container || !stack) return;

  container.innerHTML = stack.map(tool => `
    <div class="glass-panel" style="padding: 0.85rem 1.4rem; display: flex; align-items: center; gap: 0.75rem; border-radius: 9999px;">
      <i data-lucide="${tool.icon}" style="width: 18px; height: 18px; color: var(--accent-gold);"></i>
      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: #fff;">${tool.name}</div>
        <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">${tool.proficiency}</div>
      </div>
    </div>
  `).join('');
}

/**
 * 10. Interactive Project Budget Calculator
 */
function initProjectCalculator(packages, profile) {
  const packagesContainer = document.getElementById('calc-packages-list');
  const totalDisplay = document.getElementById('calc-total-price');
  const turnaroundDisplay = document.getElementById('calc-turnaround');
  const bookBtn = document.getElementById('calc-book-whatsapp');
  if (!packagesContainer || !packages) return;

  let selectedPkg = packages[0];
  let selectedAddons = new Set();

  function renderPackages() {
    packagesContainer.innerHTML = packages.map((pkg, idx) => `
      <div class="package-option ${selectedPkg.id === pkg.id ? 'selected' : ''}" data-id="${pkg.id}">
        <div>
          <div style="font-weight: 600; font-size: 0.95rem; color: #fff;">${pkg.name}</div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Est. Turnaround: ${pkg.duration}</div>
        </div>
        <div style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-gold); font-size: 1rem;">${pkg.basePrice}</div>
      </div>
    `).join('');

    packagesContainer.querySelectorAll('.package-option').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        selectedPkg = packages.find(p => p.id === id);
        renderPackages();
        updateSummary();
      });
    });
  }

  function updateSummary() {
    if (totalDisplay) totalDisplay.textContent = selectedPkg.basePrice;
    if (turnaroundDisplay) turnaroundDisplay.textContent = selectedPkg.duration;

    if (bookBtn) {
      const msg = `Hello ${profile.name}! I would like to book the "${selectedPkg.name}" (${selectedPkg.basePrice}) package for my upcoming project. Let's discuss timeline & raw footage delivery.`;
      bookBtn.href = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    }
  }

  renderPackages();
  updateSummary();
}

/**
 * 11. Custom Luxury Magnetic Cursor
 */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth lerp loop for the outer luxury ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states
  document.querySelectorAll('a, button, .project-card, .showreel-teaser-wrapper').forEach(interactive => {
    interactive.addEventListener('mouseenter', () => {
      if (interactive.classList.contains('project-card') || interactive.classList.contains('showreel-teaser-wrapper')) {
        ring.classList.add('play-mode');
        dot.style.opacity = '0';
      } else {
        ring.classList.add('hovering');
      }
    });

    interactive.addEventListener('mouseleave', () => {
      ring.classList.remove('play-mode');
      ring.classList.remove('hovering');
      dot.style.opacity = '1';
    });
  });
}

/**
 * 12. Cinema Modal (Supports Direct MP4 & YouTube / Vimeo)
 */
function initCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal) return;

  const closeHandler = () => {
    modal.classList.remove('active');
    const playerWrapper = document.getElementById('modal-player-slot');
    if (playerWrapper) playerWrapper.innerHTML = ''; // Stop video playback
  };

  if (closeBtn) closeBtn.addEventListener('click', closeHandler);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeHandler();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeHandler();
    }
  });
}

function openCinemaModal(project) {
  const modal = document.getElementById('cinema-modal');
  const playerWrapper = document.getElementById('modal-player-slot');
  const titleEl = document.getElementById('modal-project-title');
  const clientEl = document.getElementById('modal-project-client');
  const descEl = document.getElementById('modal-project-desc');
  const softwareRow = document.getElementById('modal-software-tags');
  const metricsRow = document.getElementById('modal-metrics-row');

  if (!modal || !playerWrapper) return;

  // Fill in textual info
  if (titleEl) titleEl.textContent = project.title;
  if (clientEl) clientEl.textContent = `${project.client} • ${project.categoryLabel}`;
  if (descEl) descEl.textContent = project.description;

  if (softwareRow && project.software) {
    softwareRow.innerHTML = project.software.map(s => `<span class="project-tool-chip">${s}</span>`).join('');
  }

  if (metricsRow && project.metrics) {
    metricsRow.innerHTML = `
      <div style="display: flex; gap: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem;">
        <div><span style="color: var(--text-muted);">AVG RETENTION:</span> <strong style="color: var(--accent-gold);">${project.metrics.avgWatchTime}</strong></div>
        <div><span style="color: var(--text-muted);">RETENTION LIFT:</span> <strong style="color: #34d399;">${project.metrics.retentionLift}</strong></div>
        <div><span style="color: var(--text-muted);">SHARES:</span> <strong style="color: #fff;">${project.metrics.shares}</strong></div>
      </div>
    `;
  }

  // Determine media player type (YouTube vs Direct Video)
  let videoHTML = '';

  // Check if it's YouTube URL or Embed
  if (project.youtubeEmbedUrl) {
    videoHTML = `
      <iframe src="${project.youtubeEmbedUrl}" 
              title="${project.title}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
      </iframe>
    `;
  } else if (project.fullVideoUrl && (project.fullVideoUrl.includes('youtube.com') || project.fullVideoUrl.includes('youtu.be'))) {
    // Extract YouTube ID
    let ytId = '';
    if (project.fullVideoUrl.includes('youtu.be/')) {
      ytId = project.fullVideoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (project.fullVideoUrl.includes('v=')) {
      ytId = project.fullVideoUrl.split('v=')[1].split('&')[0];
    }
    videoHTML = `
      <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0" 
              title="${project.title}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
      </iframe>
    `;
  } else if (project.fullVideoUrl) {
    // Direct MP4 / WebM
    videoHTML = `
      <video controls autoplay playsinline style="width: 100%; height: 100%; object-fit: contain;">
        <source src="${project.fullVideoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  playerWrapper.innerHTML = videoHTML;
  modal.classList.add('active');
}



