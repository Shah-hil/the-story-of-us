// =========================================================================
// TWILIGHT STARLIGHT KEEPSAKE - APPLICATION LOGIC
// Cover Gate Unwrap, 18 Chapters of The Story of Us, Korean Photobooth & 3D Flips
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initPresentationHero();
  initStardust();
  initFloatingPetalsCanvas();
  initMusicPlayer();
  initCelebrationButton();
  initChapterPageTurner();
  initLifetimeTimer();
  initCelestialStarMap();
  renderMemoriesVault('all');
  initReasonsScroll();
  renderMediaReel();
  initEnvelope();
  initLightbox();
  initNavScroll();
});

const ASSET_CACHE_KEY = '20260920_v17';

function getMediaUrl(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}v=${ASSET_CACHE_KEY}`;
}

/* -------------------------------------------------------------------------
   1. PRESENTATION SCROLLYTELLING HERO (Inspired by LxL Creative)
   ------------------------------------------------------------------------- */
function initPresentationHero() {
  const heroTrack = document.getElementById('hero-track');
  const heroCard = document.getElementById('hero-card');
  const stage = document.getElementById('storybook-stage');
  const bookCover = document.getElementById('book-cover');
  const bookRibbon = document.getElementById('book-ribbon');
  const bookRadiance = document.getElementById('book-radiance');
  const heroPrompt = document.getElementById('hero-scroll-prompt');
  const heroHeader = document.querySelector('.hero-header-banner');
  const mainNav = document.getElementById('main-nav');

  if (!heroTrack || !heroCard) return;

  let hasStartedMusic = false;

  // 1. GSAP ScrollTrigger implementation (matching lxlcreative.co.uk)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth > 768;
    const targetScale = isDesktop ? 0.72 : 0.88;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTrack,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          if (self.progress > 0.12 && !hasStartedMusic && !musicPlaying) {
            hasStartedMusic = true;
            playAcousticMelody();
          }
        }
      }
    });

    // Step A: Hero Card shrinks from 1.0 to 0.72 ("gets small") with rounded gilded edges
    tl.to(heroCard, {
      scale: targetScale,
      borderRadius: 28,
      borderColor: 'rgba(230, 184, 92, 0.45)',
      boxShadow: '0 45px 120px rgba(0, 0, 0, 0.95), 0 0 50px rgba(230, 184, 92, 0.25)',
      ease: 'power2.inOut',
      duration: 0.55
    }, 0);

    // Step B: Header banner condenses gracefully
    if (heroHeader) {
      tl.to(heroHeader, {
        y: -15,
        opacity: 0.85,
        duration: 0.4,
        ease: 'power1.out'
      }, 0);
    }

    // Step C: Scroll prompt fades out early
    if (heroPrompt) {
      tl.to(heroPrompt, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power1.in'
      }, 0.05);
    }

    // Step D: Leather wrap strap slides off
    if (bookRibbon) {
      tl.to(bookRibbon, {
        x: 75,
        rotation: 15,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in'
      }, 0.25);
    }

    // Step E: 3D Leather Cover turns open 180 degrees
    if (bookCover) {
      tl.to(bookCover, {
        rotateY: -180,
        boxShadow: '-35px 35px 80px rgba(0, 0, 0, 0.85)',
        duration: 0.65,
        ease: 'power2.inOut'
      }, 0.3);
    }

    // Step F: Soft golden bloom inside the book
    if (bookRadiance) {
      tl.to(bookRadiance, {
        scale: 6,
        opacity: 0.85,
        filter: 'blur(30px)',
        duration: 0.45,
        ease: 'power1.out'
      }, 0.5);
    }

    // Step G: Navigation docks into view as book finishes opening
    if (mainNav) {
      tl.fromTo(mainNav,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power1.out' },
        0.75
      );
    }
  } else {
    // 2. High-performance vanilla scroll fallback
    const onScrollFallback = () => {
      const rect = heroTrack.getBoundingClientRect();
      const trackHeight = heroTrack.offsetHeight - window.innerHeight;
      if (trackHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / trackHeight));
      const isDesktop = window.innerWidth > 768;
      const targetScale = isDesktop ? 0.72 : 0.88;
      const currentScale = 1 - (1 - targetScale) * Math.min(1, progress * 1.6);
      const currentRadius = Math.min(28, progress * 40);

      heroCard.style.transform = `scale(${currentScale})`;
      heroCard.style.borderRadius = `${currentRadius}px`;
      if (progress > 0.1) {
        heroCard.style.borderColor = 'rgba(230, 184, 92, 0.45)';
        heroCard.style.boxShadow = '0 45px 120px rgba(0, 0, 0, 0.95), 0 0 50px rgba(230, 184, 92, 0.25)';
      } else {
        heroCard.style.borderColor = 'transparent';
        heroCard.style.boxShadow = 'none';
      }

      if (bookCover) {
        const bookRot = Math.min(180, Math.max(0, (progress - 0.25) / 0.6 * 180));
        bookCover.style.transform = `rotateY(-${bookRot}deg)`;
      }

      if (bookRibbon) {
        const ribbonP = Math.min(1, Math.max(0, (progress - 0.15) / 0.3));
        bookRibbon.style.transform = `translateY(-50%) translateX(${ribbonP * 75}px) rotate(${ribbonP * 15}deg)`;
        bookRibbon.style.opacity = `${1 - ribbonP}`;
      }

      if (heroPrompt) {
        heroPrompt.style.opacity = `${Math.max(0, 1 - progress * 4)}`;
      }

      if (progress > 0.12 && !hasStartedMusic && !musicPlaying) {
        hasStartedMusic = true;
        playAcousticMelody();
      }
    };

    window.addEventListener('scroll', onScrollFallback, { passive: true });
    onScrollFallback();
  }

  // 3. Click / Tap to Open Shortcut
  const handleStageClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    playBookOpenSound();
    if (!musicPlaying) playAcousticMelody();

    const targetY = heroTrack.offsetTop + heroTrack.offsetHeight - window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  if (stage) {
    stage.addEventListener('click', handleStageClick);
  }
}

function playBookOpenSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Warm gentle acoustic chord: D4, F#4, A4, D5, F#5
  const freqs = [293.66, 369.99, 440.00, 587.33, 739.99];
  freqs.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.09);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime + idx * 0.09);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.09 + 1.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + idx * 0.09);
    osc.stop(audioCtx.currentTime + idx * 0.09 + 1.2);
  });
}

function triggerGentleStardust() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 65,
      spread: 70,
      ticks: 240,
      gravity: 0.6,
      origin: { y: 0.55, x: 0.5 },
      colors: ['#F7D070', '#E8989E', '#FFFFFF', '#FAF3E3', '#C8B6FF']
    });
  }
}

/* -------------------------------------------------------------------------
   2. FLOATING STARDUST & SPARKLING PARTICLES
   ------------------------------------------------------------------------- */
function initStardust() {
  const container = document.getElementById('stardust-bg');
  if (!container) return;

  const stars = ['✨', '⭐', '🌟', '✦', '✧', '💖'];
  const count = 24;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'floating-star';
    star.innerText = stars[Math.floor(Math.random() * stars.length)];
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${6 + Math.random() * 8}s`;
    star.style.animationDelay = `${Math.random() * 6}s`;
    star.style.fontSize = `${0.75 + Math.random() * 0.75}rem`;
    container.appendChild(star);
  }
}

/* -------------------------------------------------------------------------
   2.5 PILLAR 2: FLOATING ROSE PETALS & CELESTIAL STARDUST CANVAS
   ------------------------------------------------------------------------- */
function initFloatingPetalsCanvas() {
  const canvas = document.getElementById('celestial-petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Velvety Rose Petals
  const petals = [];
  const petalCount = Math.min(26, Math.floor(width / 50));

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 12,
      speedY: 0.6 + Math.random() * 0.9,
      speedX: -0.3 + Math.random() * 0.6,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02,
      oscillationSpeed: 0.01 + Math.random() * 0.02,
      oscillationDistance: 25 + Math.random() * 35,
      baseX: Math.random() * width,
      color: Math.random() > 0.4 ? 'rgba(185, 35, 60, 0.72)' : 'rgba(215, 75, 95, 0.68)'
    });
  }

  // Glowing Golden Embers
  const embers = [];
  const emberCount = 32;
  for (let i = 0; i < emberCount; i++) {
    embers.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2,
      speedY: -(0.3 + Math.random() * 0.5),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: 0.2 + Math.random() * 0.7,
      pulseSpeed: 0.02 + Math.random() * 0.03
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    // Beautiful organic petal shape using cubic bezier curves
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(p.size / 2, -p.size / 1.5, p.size, -p.size / 3, 0, p.size);
    ctx.bezierCurveTo(-p.size, -p.size / 3, -p.size / 2, -p.size / 1.5, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Render Embers
    for (let i = 0; i < embers.length; i++) {
      const e = embers[i];
      e.y += e.speedY;
      e.x += e.speedX;
      e.alpha += Math.sin(Date.now() * e.pulseSpeed) * 0.015;

      if (e.y < -10) {
        e.y = height + 10;
        e.x = Math.random() * width;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247, 215, 136, ${Math.max(0.1, Math.min(0.9, e.alpha))})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#F7D788';
      ctx.fill();
      ctx.restore();
    }

    // Render Petals
    const time = Date.now() * 0.001;
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.speedY;
      p.x = p.baseX + Math.sin(time + i) * p.oscillationDistance;
      p.angle += p.angularSpeed;

      if (p.y > height + 25) {
        p.y = -25;
        p.baseX = Math.random() * width;
      }

      drawPetal(p);
    }

    requestAnimationFrame(render);
  }

  render();
}

/* -------------------------------------------------------------------------
   3. ROMANTIC ACOUSTIC MELODY PLAYER (HTML5 Audio with Smooth Fade)
   ------------------------------------------------------------------------- */
let audioCtx = null;
let bgAudio = null;
let musicPlaying = false;
let audioFadeTimer = null;

function initMusicPlayer() {
  const musicBtn = document.getElementById('music-btn');
  bgAudio = document.getElementById('bg-acoustic-audio');
  if (!musicBtn || !bgAudio) return;

  // Set default initial volume for gentle background ambience (whisper level)
  bgAudio.volume = 0.14;

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAcousticMelody();
  });
}

function toggleAcousticMelody(forcePlay = null) {
  const shouldPlay = forcePlay !== null ? forcePlay : !musicPlaying;
  if (shouldPlay) {
    playAcousticMelody();
  } else {
    pauseAcousticMelody();
  }
}

function playAcousticMelody() {
  if (!bgAudio) bgAudio = document.getElementById('bg-acoustic-audio');
  if (!bgAudio) return;

  const musicBtn = document.getElementById('music-btn');
  const eq = document.getElementById('music-eq');

  if (audioFadeTimer) {
    clearInterval(audioFadeTimer);
    audioFadeTimer = null;
  }

  // Ensure AudioContext is initialized for interactive SFX
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  bgAudio.play().then(() => {
    musicPlaying = true;
    if (musicBtn) {
      const label = musicBtn.querySelector('.music-label');
      if (label) label.innerText = 'Acoustic Melody: ON ✨';
      const icon = musicBtn.querySelector('.music-icon');
      if (icon) icon.classList.add('spinning');
      musicBtn.classList.add('playing');
    }
    if (eq) eq.classList.remove('hidden');

    // Smooth volume fade-in to gentle ambient 0.14
    let targetVol = 0.14;
    let currentVol = bgAudio.volume;
    audioFadeTimer = setInterval(() => {
      if (currentVol < targetVol) {
        currentVol = Math.min(targetVol, currentVol + 0.02);
        bgAudio.volume = currentVol;
      } else {
        clearInterval(audioFadeTimer);
        audioFadeTimer = null;
      }
    }, 60);
  }).catch(err => {
    console.warn('Audio playback waiting for user interaction:', err);
  });
}

function pauseAcousticMelody() {
  if (!bgAudio) bgAudio = document.getElementById('bg-acoustic-audio');
  if (!bgAudio) return;

  const musicBtn = document.getElementById('music-btn');
  const eq = document.getElementById('music-eq');

  if (audioFadeTimer) {
    clearInterval(audioFadeTimer);
    audioFadeTimer = null;
  }

  // Smooth fade-out before pausing
  let currentVol = bgAudio.volume;
  audioFadeTimer = setInterval(() => {
    if (currentVol > 0.02) {
      currentVol = Math.max(0, currentVol - 0.03);
      bgAudio.volume = currentVol;
    } else {
      bgAudio.pause();
      bgAudio.volume = 0.14;
      clearInterval(audioFadeTimer);
      audioFadeTimer = null;
      musicPlaying = false;
      if (musicBtn) {
        const label = musicBtn.querySelector('.music-label');
        if (label) label.innerText = 'Acoustic Melody: OFF';
        const icon = musicBtn.querySelector('.music-icon');
        if (icon) icon.classList.remove('spinning');
        musicBtn.classList.remove('playing');
      }
      if (eq) eq.classList.add('hidden');
    }
  }, 40);
}

function playJoySound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const freqs = [554.37, 698.46, 830.61, 1108.73]; // C#5, F5, G#5, C#6
  freqs.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);

    gain.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 1.0);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + idx * 0.08);
    osc.stop(audioCtx.currentTime + idx * 0.08 + 1.0);
  });
}

function triggerGoldenConfetti() {
  if (typeof confetti !== 'function') return;

  // Center golden & romantic velvet confetti burst
  confetti({
    particleCount: 75,
    spread: 85,
    origin: { y: 0.6 },
    colors: ['#FFECA8', '#FFD700', '#F7D278', '#A32338', '#FFFFFF', '#FF6B8B']
  });

  // Staggered side cannon bursts
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#FF6B8B', '#FFD700', '#FFECA8', '#FF3366']
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#FF6B8B', '#FFD700', '#FFECA8', '#FF3366']
    });
  }, 160);
}

function initCelebrationButton() {
  const btn = document.getElementById('celebrate-btn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    triggerGoldenConfetti();
    try {
      playJoySound();
    } catch (err) {
      console.log('AudioContext notification:', err);
    }
  });
}

/* -------------------------------------------------------------------------
   4. INTERACTIVE 3D CHAPTER STORYBOOK FOLIO PAGE-TURNER
   ------------------------------------------------------------------------- */
let currentChapterIndex = 0;
let isPageTurning = false;

function initChapterPageTurner() {
  if (typeof STORY_CHAPTERS === 'undefined' || !STORY_CHAPTERS.length) return;

  renderChapterIndexChips();
  displayChapter(currentChapterIndex, false);

  const prevBtn = document.getElementById('btn-prev-chapter');
  const nextBtn = document.getElementById('btn-next-chapter');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentChapterIndex > 0 && !isPageTurning) {
        turnToChapter(currentChapterIndex - 1, 'backward');
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentChapterIndex < STORY_CHAPTERS.length - 1 && !isPageTurning) {
        turnToChapter(currentChapterIndex + 1, 'forward');
      }
    });
  }

  // Keyboard navigation (Arrow keys)
  window.addEventListener('keydown', (e) => {
    if (isPageTurning) return;
    if (e.key === 'ArrowRight' && currentChapterIndex < STORY_CHAPTERS.length - 1) {
      turnToChapter(currentChapterIndex + 1, 'forward');
    } else if (e.key === 'ArrowLeft' && currentChapterIndex > 0) {
      turnToChapter(currentChapterIndex - 1, 'backward');
    }
  });

  // Touch Swipe for Mobile Readers
  const folio = document.getElementById('storybook-folio');
  if (folio) {
    let touchStartX = 0;
    let touchEndX = 0;

    folio.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    folio.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 45;
      if (touchEndX < touchStartX - threshold && currentChapterIndex < STORY_CHAPTERS.length - 1) {
        turnToChapter(currentChapterIndex + 1, 'forward');
      } else if (touchEndX > touchStartX + threshold && currentChapterIndex > 0) {
        turnToChapter(currentChapterIndex - 1, 'backward');
      }
    }
  }
}

function renderChapterIndexChips() {
  const chipsContainer = document.getElementById('story-nav-chips');
  if (!chipsContainer) return;

  chipsContainer.innerHTML = STORY_CHAPTERS.map((ch, idx) => `
    <button class="chapter-chip ${idx === currentChapterIndex ? 'active' : ''}" 
            data-index="${idx}" 
            onclick="turnToChapter(${idx}, ${idx > currentChapterIndex ? "'forward'" : "'backward'"})">
      <span class="chip-sticker">${ch.sticker || '📖'}</span>
      <span class="chip-num">Ch. ${ch.chapterNumber}</span>
      <span class="chip-short">${ch.title.split('—')[0].replace('It started with a ', '').replace('Then we went back to being ', '').replace('Summer vacation ', 'Summer ').slice(0, 18)}</span>
    </button>
  `).join('');
}

function turnToChapter(targetIndex, direction = 'forward') {
  if (isPageTurning || targetIndex === currentChapterIndex || targetIndex < 0 || targetIndex >= STORY_CHAPTERS.length) return;
  isPageTurning = true;

  const diff = Math.abs(targetIndex - currentChapterIndex);

  // If jumping across multiple chapters (> 1 chapter away), trigger multi-page flutter animation!
  if (diff > 1) {
    performMultiPageFlutter(targetIndex, direction);
  } else {
    performSinglePageTurn(targetIndex, direction);
  }
}

/* -------------------------------------------------------------------------
   REALISTIC SINGLE 3D PAGE TURN
   ------------------------------------------------------------------------- */
function performSinglePageTurn(targetIndex, direction) {
  const folio = document.getElementById('storybook-folio');
  const flipper = document.getElementById('folio-flipper');
  const flipperFront = document.getElementById('flipper-front');
  const flipperBack = document.getElementById('flipper-back');
  const leftPage = document.getElementById('folio-left-page');
  const rightPage = document.getElementById('folio-right-page');

  if (!flipper || !flipperFront || !flipperBack || !leftPage || !rightPage) {
    currentChapterIndex = targetIndex;
    displayChapter(currentChapterIndex);
    isPageTurning = false;
    return;
  }

  playPageTurnSound();

  if (direction === 'forward') {
    // 1. Prepare flipping leaf on the right side
    flipperFront.innerHTML = generateRightPageHtml(currentChapterIndex);
    flipperBack.innerHTML = generateLeftPageHtml(targetIndex);

    // 2. Incoming right page renders underneath immediately
    rightPage.innerHTML = generateRightPageHtml(targetIndex);

    // 3. Reset and trigger 3D forward flip animation
    flipper.className = 'folio-flipper flipper-right-start flipping-forward';

    setTimeout(() => {
      // 4. Halfway through, update left page underneath
      leftPage.innerHTML = generateLeftPageHtml(targetIndex);
      const polaroidImg = leftPage.querySelector('.polaroid-photo-box img');
      if (polaroidImg) {
        if (polaroidImg.complete && polaroidImg.naturalWidth > 0) {
          applyDynamicPhotoFraming(polaroidImg);
        } else {
          polaroidImg.addEventListener('load', () => applyDynamicPhotoFraming(polaroidImg), { once: true });
        }
      }
    }, 320);

    setTimeout(() => {
      // 5. Complete flip: clean up flipper
      flipper.className = 'folio-flipper';
      flipperFront.innerHTML = '';
      flipperBack.innerHTML = '';
      currentChapterIndex = targetIndex;
      updateChapterControls();
      isPageTurning = false;
    }, 650);

  } else {
    // Turning backward (left to right)
    flipperFront.innerHTML = generateRightPageHtml(targetIndex);
    flipperBack.innerHTML = generateLeftPageHtml(currentChapterIndex);

    // Incoming left page renders underneath immediately
    leftPage.innerHTML = generateLeftPageHtml(targetIndex);
    const polaroidImg = leftPage.querySelector('.polaroid-photo-box img');
    if (polaroidImg) {
      if (polaroidImg.complete && polaroidImg.naturalWidth > 0) {
        applyDynamicPhotoFraming(polaroidImg);
      } else {
        polaroidImg.addEventListener('load', () => applyDynamicPhotoFraming(polaroidImg), { once: true });
      }
    }

    // Reset and trigger 3D backward flip animation
    flipper.className = 'folio-flipper flipper-left-start flipping-backward';

    setTimeout(() => {
      rightPage.innerHTML = generateRightPageHtml(targetIndex);
    }, 320);

    setTimeout(() => {
      flipper.className = 'folio-flipper';
      flipperFront.innerHTML = '';
      flipperBack.innerHTML = '';
      currentChapterIndex = targetIndex;
      updateChapterControls();
      isPageTurning = false;
    }, 650);
  }
}

/* -------------------------------------------------------------------------
   MULTI-PAGE FLUTTER ANIMATION (JUMPING BETWEEN MULTIPLE CHAPTERS)
   ------------------------------------------------------------------------- */
function performMultiPageFlutter(targetIndex, direction) {
  const flutterContainer = document.getElementById('folio-flutter-container');
  const trackerNum = document.getElementById('tracker-chapter-num');
  const trackerTitle = document.getElementById('tracker-chapter-title');

  playMultiPageFlutterSound();

  if (flutterContainer) {
    // Generate 4 cascading paper flutter leaves
    flutterContainer.innerHTML = `
      <div class="flutter-leaf ${direction} leaf-1"></div>
      <div class="flutter-leaf ${direction} leaf-2"></div>
      <div class="flutter-leaf ${direction} leaf-3"></div>
      <div class="flutter-leaf ${direction} leaf-4"></div>
    `;
    flutterContainer.classList.add('active');
  }

  // Rapid counter step animation for intermediate chapters
  const steps = 4;
  const stepDiff = (targetIndex - currentChapterIndex) / steps;
  let curStep = 0;

  const stepInterval = setInterval(() => {
    curStep++;
    const intermediateIdx = Math.round(currentChapterIndex + stepDiff * curStep);
    const intermediateCh = STORY_CHAPTERS[intermediateIdx];
    if (intermediateCh && trackerNum && trackerTitle) {
      trackerNum.innerText = `Turning to Chapter ${intermediateCh.chapterNumber}...`;
      trackerTitle.innerText = `${intermediateCh.sticker || '📖'} ${intermediateCh.tag}`;
    }
    if (curStep >= steps) {
      clearInterval(stepInterval);
    }
  }, 130);

  setTimeout(() => {
    currentChapterIndex = targetIndex;
    displayChapter(currentChapterIndex, false);
    if (flutterContainer) {
      flutterContainer.innerHTML = '';
      flutterContainer.classList.remove('active');
    }
    updateChapterControls();
    isPageTurning = false;
  }, 680);
}

function updateChapterControls() {
  const prevBtn = document.getElementById('btn-prev-chapter');
  const nextBtn = document.getElementById('btn-next-chapter');
  const trackerNum = document.getElementById('tracker-chapter-num');
  const trackerTitle = document.getElementById('tracker-chapter-title');
  const ch = STORY_CHAPTERS[currentChapterIndex];

  if (prevBtn) prevBtn.disabled = (currentChapterIndex === 0);
  if (nextBtn) nextBtn.disabled = (currentChapterIndex >= STORY_CHAPTERS.length - 1);

  if (ch) {
    if (trackerNum) trackerNum.innerText = `Chapter ${ch.chapterNumber} of 18`;
    if (trackerTitle) trackerTitle.innerText = `${ch.sticker || '✨'} ${ch.tag}`;
  }

  // Update chapter index ribbon chips active state
  document.querySelectorAll('.chapter-chip').forEach((chip, i) => {
    chip.classList.toggle('active', i === currentChapterIndex);
  });

  // Smoothly scroll active chapter chip into view in the ribbon bar
  const activeChip = document.querySelector(`.chapter-chip[data-index="${currentChapterIndex}"]`);
  if (activeChip) {
    activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function displayChapter(index, autoScroll = false) {
  const ch = STORY_CHAPTERS[index];
  if (!ch) return;

  const leftPage = document.getElementById('folio-left-page');
  const rightPage = document.getElementById('folio-right-page');
  const trackerNum = document.getElementById('tracker-chapter-num');
  const trackerTitle = document.getElementById('tracker-chapter-title');

  // Update Toolbar Tracker
  if (trackerNum) trackerNum.innerText = `Chapter ${ch.chapterNumber} of 18`;
  if (trackerTitle) trackerTitle.innerText = `${ch.sticker || '✨'} ${ch.tag}`;

  // Highlight active chip
  document.querySelectorAll('.chapter-chip').forEach((chip, i) => {
    chip.classList.toggle('active', i === index);
  });

  if (leftPage) leftPage.innerHTML = generateLeftPageHtml(index);
  if (rightPage) rightPage.innerHTML = generateRightPageHtml(index);

  // Apply dynamic adaptive framing to chapter polaroid
  const polaroidImg = leftPage ? leftPage.querySelector('.polaroid-photo-box img') : null;
  if (polaroidImg) {
    if (polaroidImg.complete && polaroidImg.naturalWidth > 0) {
      applyDynamicPhotoFraming(polaroidImg);
    } else {
      polaroidImg.addEventListener('load', () => applyDynamicPhotoFraming(polaroidImg), { once: true });
    }
  }

  // Auto-play Korean photobooth video seamlessly like a GIF / Live Photo
  const boothVideo = leftPage ? leftPage.querySelector('.photobooth-video-player') : null;
  if (boothVideo) {
    boothVideo.muted = true;
    boothVideo.playsInline = true;
    const playPromise = boothVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const triggerPlay = () => {
          boothVideo.play().catch(() => {});
          document.removeEventListener('click', triggerPlay);
          document.removeEventListener('touchstart', triggerPlay);
        };
        document.addEventListener('click', triggerPlay, { once: true });
        document.addEventListener('touchstart', triggerPlay, { once: true });
      });
    }
  }

  updateChapterControls();

  if (autoScroll) {
    const folioSection = document.getElementById('our-story');
    if (folioSection) {
      const rect = folioSection.getBoundingClientRect();
      if (rect.top < -50 || rect.top > 300) {
        const targetY = rect.top + window.pageYOffset - 80;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  }
}

function togglePhotoboothPlayback(videoElem) {
  if (!videoElem) return;
  if (videoElem.paused) {
    videoElem.play().catch(() => {});
  } else {
    videoElem.pause();
  }
}

function togglePhotoboothAudio(btnElem, event) {
  if (event) event.stopPropagation();
  const wrapper = btnElem ? btnElem.closest('.photobooth-video-wrapper') : null;
  const video = wrapper ? wrapper.querySelector('video') : null;
  if (!video) return;

  video.muted = !video.muted;
  const icon = btnElem.querySelector('i');
  const text = btnElem.querySelector('span');

  if (video.muted) {
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    if (text) text.innerText = 'Muted';
  } else {
    if (icon) icon.className = 'fa-solid fa-volume-high';
    if (text) text.innerText = 'Sound On';
    video.play().catch(() => {});
  }
}

/* -------------------------------------------------------------------------
   DYNAMIC ADAPTIVE PHOTO FRAMING
   Guarantees 100% full-aspect ratio preservation for any uploaded photo
   (Tall phone portraits, standard portraits, 1:1 square, landscape 4:3/16:9)
   Polaroid white card dynamically hugs the photo without ANY cropping.
   ------------------------------------------------------------------------- */
function applyDynamicPhotoFraming(img) {
  if (!img) return;
  const frame = img.closest('.folio-polaroid-frame');
  const box = img.closest('.polaroid-photo-box');
  if (!frame || !box) return;

  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  if (!w || !h) return;

  const aspect = w / h;

  // Clear previous frame orientation classes
  frame.classList.remove('frame-tall-portrait', 'frame-portrait', 'frame-square', 'frame-landscape');

  // Determine available width on folio page without overflowing
  const folioPage = frame.closest('.folio-page-left');
  const availableW = folioPage ? Math.min(410, folioPage.clientWidth - 52) : 410;
  const maxW = Math.max(250, availableW);
  const maxH = 360;

  let targetW, targetH;

  if (aspect < 0.72) {
    // Tall portrait (e.g. 9:16 phone photos, 2:3 portraits)
    frame.classList.add('frame-tall-portrait');
    targetH = Math.min(h, maxH);
    targetW = Math.round(targetH * aspect);
    if (targetW > maxW) {
      targetW = maxW;
      targetH = Math.round(targetW / aspect);
    }
  } else if (aspect < 0.92) {
    // Standard portrait (e.g. 3:4, 4:5 photos)
    frame.classList.add('frame-portrait');
    targetH = Math.min(h, maxH);
    targetW = Math.round(targetH * aspect);
    if (targetW > maxW) {
      targetW = maxW;
      targetH = Math.round(targetW / aspect);
    }
  } else if (aspect <= 1.15) {
    // Square (e.g. 1:1 photos)
    frame.classList.add('frame-square');
    targetH = Math.min(h, 340);
    targetW = targetH;
    if (targetW > maxW) {
      targetW = maxW;
      targetH = targetW;
    }
  } else {
    // Landscape (e.g. 4:3, 16:9, widescreen photos)
    frame.classList.add('frame-landscape');
    targetW = Math.min(w, maxW);
    targetH = Math.round(targetW / aspect);
    if (targetH > maxH) {
      targetH = maxH;
      targetW = Math.round(targetH * aspect);
    }
  }

  // Polaroid card width hugs the photo with 24px padding (12px each side), min-width 260px
  const frameW = Math.max(260, Math.min(maxW + 24, targetW + 24));
  frame.style.maxWidth = `${frameW}px`;
  box.style.width = `${targetW}px`;
  box.style.height = `${targetH}px`;
  img.style.width = `${targetW}px`;
  img.style.height = `${targetH}px`;
}

function generateLeftPageHtml(index) {
  const ch = STORY_CHAPTERS[index];
  if (!ch) return '';

  let mediaHtml = '';
  if (ch.hasVideo) {
    mediaHtml = `
      <div class="korean-photobooth-box">
        <div class="photobooth-header-bar">
          <span class="booth-korean">인생네컷</span>
          <span class="booth-title">LIFE 4 CUTS • Korean Photobooth Live</span>
          <span class="booth-hearts">💖💖💖</span>
        </div>
        <div class="photobooth-video-wrapper">
          <video class="photobooth-video-player" autoplay loop muted playsinline poster="${ch.poster || ch.image}" preload="auto" onclick="togglePhotoboothPlayback(this)">
            <source src="${ch.videoUrl}" type="video/mp4">
            <source src="videos/korean_photobooth.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <div class="photobooth-live-badge">
            <span class="live-dot"></span> LIVE PHOTO
          </div>
          <button class="photobooth-audio-toggle" onclick="togglePhotoboothAudio(this, event)" title="Toggle Sound">
            <i class="fa-solid fa-volume-xmark"></i> <span>Muted</span>
          </button>
        </div>
        <div class="photobooth-footer-bar">
          <div class="photobooth-caption">
            <strong>${ch.videoTitle || 'Our Korean Photobooth Moment 🎬'}</strong>
            <p>${ch.videoSubtitle || 'Playing automatically like a moving keepsake memory. Tap for sound!'}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    mediaHtml = `
      <div class="folio-polaroid-frame" onclick="openImageLightbox('${ch.image}', '${escapeQuotes(ch.title)}', '${ch.date}', '${escapeQuotes(ch.quote)}')">
        <div class="polaroid-washi-tape"></div>
        <div class="polaroid-photo-box">
          <img src="${getMediaUrl(ch.image)}" alt="${ch.title}" loading="lazy" onerror="handleImgError(this)" onload="applyDynamicPhotoFraming(this)">
          <div class="polaroid-enlarge-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> Tap to View</div>
        </div>
        <div class="polaroid-handwritten-tag">
          <span>${ch.sticker || '🌸'} ${ch.tag}</span>
        </div>
        <div class="vintage-postal-stamp">
          <span class="stamp-city">${ch.location ? escapeQuotes(ch.location.split(',')[0].slice(0, 9).toUpperCase()) : 'KEEPSAKE'}</span>
          <span class="stamp-date">${escapeQuotes(ch.date || '2026')}</span>
          <span class="stamp-star">✦ OFFICIAL ✦</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-corner-ornament ornament-tl"></div>
    <div class="page-corner-ornament ornament-bl"></div>

    <div class="folio-left-inner">
      <!-- Chapter Wax Seal Header -->
      <div class="folio-seal-header">
        <div class="wax-seal-badge">
          <span class="wax-seal-num">${ch.chapterNumber}</span>
        </div>
        <div class="folio-seal-meta">
          <span class="seal-meta-date"><i class="fa-regular fa-calendar"></i> ${ch.date}</span>
          <span class="seal-meta-loc"><i class="fa-solid fa-location-dot"></i> ${ch.location}</span>
        </div>
      </div>

      <!-- Main Keepsake Media (Photobooth Live Video or Polaroid Photo) -->
      ${mediaHtml}

      <!-- Romantic Handwritten Pull Quote Card -->
      <div class="folio-quote-card">
        <span class="quote-symbol-start">“</span>
        <p class="folio-quote-text">${ch.quote}</p>
        <span class="quote-symbol-end">”</span>
      </div>
    </div>
  `;
}

function generateRightPageHtml(index) {
  const ch = STORY_CHAPTERS[index];
  if (!ch) return '';

  const paragraphs = ch.paragraphs || (ch.story ? [ch.story] : []);
  let paragraphsHtml = '';

  if (paragraphs.length > 0) {
    const firstPara = paragraphs[0];
    const firstChar = firstPara.charAt(0);
    const restFirstPara = firstPara.slice(1);

    paragraphsHtml = `
      <p class="story-p first-p">
        <span class="illuminated-dropcap">${firstChar}</span>${restFirstPara}
      </p>
      ${paragraphs.slice(1).map(p => `<p class="story-p">${p}</p>`).join('')}
    `;
  }

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"];
  const roman = romanNumerals[index] || ch.chapterNumber;

  return `
    <div class="page-corner-ornament ornament-tr"></div>
    <div class="page-corner-ornament ornament-br"></div>

    <div class="folio-right-inner">
      <!-- Chapter Header Banner -->
      <div class="folio-chapter-banner">
        <div class="chapter-roman">CHAPTER ${roman}</div>
        <div class="chapter-ornament-divider">❧ ─── ❦ ─── ☙</div>
        <h3 class="folio-chapter-title">${ch.title}</h3>
      </div>

      <!-- Chapter Inscription Scrollable Body -->
      <div class="folio-text-scrollbox">
        ${paragraphsHtml}
      </div>

      <!-- Chapter Footer Folio Stamp -->
      <div class="folio-page-footer">
        <span class="folio-footer-ornament">❦</span>
        <span class="folio-page-count">— Inscribed into Our Story • Page ${index + 1} of 18 —</span>
        <span class="folio-footer-ornament">❧</span>
      </div>
    </div>
  `;
}

function updateChapterControls() {
  const prevBtn = document.getElementById('btn-prev-chapter');
  const nextBtn = document.getElementById('btn-next-chapter');

  if (prevBtn) {
    prevBtn.disabled = currentChapterIndex === 0;
    prevBtn.classList.toggle('disabled', currentChapterIndex === 0);
  }

  if (nextBtn) {
    nextBtn.disabled = currentChapterIndex === STORY_CHAPTERS.length - 1;
    nextBtn.classList.toggle('disabled', currentChapterIndex === STORY_CHAPTERS.length - 1);
  }
}

function playPageTurnSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Gentle acoustic page harp: D4 -> A4 -> F#5
  const chords = [293.66, 440.00, 739.99];
  chords.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.05);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime + idx * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.05 + 0.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + idx * 0.05);
    osc.stop(audioCtx.currentTime + idx * 0.05 + 0.6);
  });
}

function playMultiPageFlutterSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Cascading paper flutter arpeggio (rapid swish sequence)
  const flutterNotes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
  flutterNotes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.06);

    gain.gain.setValueAtTime(0.035, audioCtx.currentTime + idx * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.06 + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + idx * 0.06);
    osc.stop(audioCtx.currentTime + idx * 0.06 + 0.35);
  });
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* -------------------------------------------------------------------------
   4.5 SECTION: 80-YEAR LIFETIME LOADING SCREEN & REAL-TIME RELATIONSHIP TIMER
   ------------------------------------------------------------------------- */
let activeMilestoneId = 'milestone-day1';
let lifetimeTickInterval = null;
let currentLoadingMsgIndex = 0;

function initLifetimeTimer() {
  if (typeof LIFETIME_CONFIG === 'undefined') return;

  renderMilestoneChips();
  selectLifetimeMilestone('milestone-day1');
  initFullscreenLifetimeMode();

  // Run immediate tick and start interval
  updateLifetimeTick();
  if (lifetimeTickInterval) clearInterval(lifetimeTickInterval);
  lifetimeTickInterval = setInterval(updateLifetimeTick, 1000);

  // Rotate romantic loading messages
  const quoteElem = document.getElementById('loader-status-quote');
  const fsQuoteElem = document.getElementById('fs-loading-quote');
  if (LIFETIME_CONFIG.loadingMessages && LIFETIME_CONFIG.loadingMessages.length > 0) {
    setInterval(() => {
      currentLoadingMsgIndex = (currentLoadingMsgIndex + 1) % LIFETIME_CONFIG.loadingMessages.length;
      const nextMsg = LIFETIME_CONFIG.loadingMessages[currentLoadingMsgIndex];
      if (quoteElem) {
        quoteElem.style.opacity = '0';
        setTimeout(() => {
          quoteElem.innerText = nextMsg;
          quoteElem.style.opacity = '1';
        }, 300);
      }
      if (fsQuoteElem) {
        fsQuoteElem.innerText = nextMsg;
      }
    }, 6500);
  }
}

function updateLifetimeTick() {
  if (typeof LIFETIME_CONFIG === 'undefined') return;

  const startDate = new Date(LIFETIME_CONFIG.startDateString);
  const endDate = new Date(LIFETIME_CONFIG.endDateString);
  const now = new Date();

  // Total duration of 80-year journey in ms
  const totalDurationMs = endDate.getTime() - startDate.getTime();
  const elapsedMs = Math.max(0, now.getTime() - startDate.getTime());

  // High precision progress percentage: 0% to 100%
  const progressPercent = Math.min(100, Math.max(0, (elapsedMs / totalDurationMs) * 100));
  const percentFormatted = progressPercent.toFixed(6) + '%';

  // Update loading progress bar fills
  const barFill = document.getElementById('progress-fluid-fill');
  const fsBarFill = document.getElementById('fs-progress-fill');
  const percentText = document.getElementById('loader-percent-number');
  const fsPercentText = document.getElementById('fs-percent-number');

  if (barFill) barFill.style.width = Math.max(0.4, progressPercent) + '%';
  if (fsBarFill) fsBarFill.style.width = Math.max(0.4, progressPercent) + '%';
  if (percentText) percentText.innerText = percentFormatted;
  if (fsPercentText) fsPercentText.innerText = percentFormatted;

  // Calendar difference breakdown
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  // Update timer orbs
  const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

  const elYears = document.getElementById('time-years');
  const elMonths = document.getElementById('time-months');
  const elDays = document.getElementById('time-days');
  const elHours = document.getElementById('time-hours');
  const elMinutes = document.getElementById('time-minutes');
  const elSeconds = document.getElementById('time-seconds');

  if (elYears) elYears.innerText = pad(years);
  if (elMonths) elMonths.innerText = pad(months);
  if (elDays) elDays.innerText = pad(days);
  if (elHours) elHours.innerText = pad(hours);
  if (elMinutes) elMinutes.innerText = pad(minutes);
  if (elSeconds) elSeconds.innerText = pad(seconds);

  // Update full-screen timer numbers
  const fsYears = document.getElementById('fs-years');
  const fsMonths = document.getElementById('fs-months');
  const fsDays = document.getElementById('fs-days');
  const fsHours = document.getElementById('fs-hours');
  const fsMinutes = document.getElementById('fs-minutes');
  const fsSeconds = document.getElementById('fs-seconds');

  if (fsYears) fsYears.innerText = pad(years);
  if (fsMonths) fsMonths.innerText = pad(months);
  if (fsDays) fsDays.innerText = pad(days);
  if (fsHours) fsHours.innerText = pad(hours);
  if (fsMinutes) fsMinutes.innerText = pad(minutes);
  if (fsSeconds) fsSeconds.innerText = pad(seconds);

  // Micro stats
  const totalDays = Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(elapsedMs / (1000 * 60 * 60));
  const totalHeartbeats = Math.floor((elapsedMs / 1000) * 1.2); // ~72 bpm

  const elStatDays = document.getElementById('stat-total-days');
  const elStatHours = document.getElementById('stat-total-hours');
  const elStatHeartbeats = document.getElementById('stat-total-heartbeats');

  if (elStatDays) elStatDays.innerText = totalDays.toLocaleString();
  if (elStatHours) elStatHours.innerText = totalHours.toLocaleString();
  if (elStatHeartbeats) elStatHeartbeats.innerText = totalHeartbeats.toLocaleString();
}

function renderMilestoneChips() {
  const container = document.getElementById('milestones-chips-grid');
  if (!container || !LIFETIME_CONFIG.milestones) return;

  const now = new Date();

  container.innerHTML = LIFETIME_CONFIG.milestones.map(m => {
    const isUnlocked = now >= new Date(m.unlockTimestamp);
    const isActive = m.id === activeMilestoneId;
    const lockClass = isUnlocked ? 'unlocked-milestone' : 'locked-milestone';

    return `
      <button class="milestone-chip-btn ${isActive ? 'active' : ''} ${lockClass}" data-id="${m.id}" onclick="selectLifetimeMilestone('${m.id}')" title="${isUnlocked ? 'Unlocked Memory' : 'Locked until ' + m.targetDate}">
        ${isUnlocked ? `
          <span class="chip-sticker">${m.sticker || '✨'}</span>
          <span class="chip-year-tag">${m.timeTag}</span>
          <span class="chip-title-text">${escapeHtml(m.title)}</span>
        ` : `
          <span class="chip-lock-icon"><i class="fa-solid fa-lock"></i></span>
          <span class="chip-year-tag">${m.timeTag}</span>
          <span class="chip-title-text">🔒 Locked</span>
        `}
      </button>
    `;
  }).join('');
}

function selectLifetimeMilestone(id) {
  if (!LIFETIME_CONFIG.milestones) return;
  const milestone = LIFETIME_CONFIG.milestones.find(m => m.id === id);
  if (!milestone) return;

  activeMilestoneId = id;

  // Update chip active states
  document.querySelectorAll('.milestone-chip-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === id);
  });

  const now = new Date();
  const unlockDate = new Date(milestone.unlockTimestamp);
  const isUnlocked = now >= unlockDate;

  // Update detail card
  const card = document.getElementById('milestone-active-card');
  if (card) {
    if (isUnlocked) {
      // UNLOCKED VIEW: Full Letter / Message
      const paras = (milestone.description || '').split('\n\n');
      const paragraphsHtml = paras.map(p => `<p>${escapeHtml(p)}</p>`).join('');

      card.innerHTML = `
        <div class="milestone-card-header">
          <div class="card-title-group">
            <span class="card-sticker">${milestone.sticker}</span>
            <div>
              <div class="card-title-text">${escapeHtml(milestone.title)}</div>
              <div class="card-subtitle-text">${escapeHtml(milestone.subtitle)}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="unlocked-status-pill"><i class="fa-solid fa-lock-open"></i> Unlocked</span>
            <div class="card-date-badge">
              <i class="fa-regular fa-calendar"></i> ${milestone.targetDate}
            </div>
          </div>
        </div>
        <div class="card-description-text">${paragraphsHtml}</div>
      `;
    } else {
      // LOCKED VIEW: Strictly Sealed Time Capsule (CANNOT BE OPENED AT ANY COST BEFORE DATE)
      const diffMs = Math.max(0, unlockDate.getTime() - now.getTime());
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const diffMins = Math.floor((diffMs / (1000 * 60)) % 60);

      card.innerHTML = `
        <div class="locked-capsule-view">
          <div class="milestone-card-header">
            <div class="card-title-group">
              <span class="card-sticker" style="color: #C8963E;"><i class="fa-solid fa-lock"></i></span>
              <div>
                <div class="card-title-text">${escapeHtml(milestone.title)} (Strictly Locked)</div>
                <div class="card-subtitle-text">Sealed in the Stars • Unlocks on ${milestone.targetDate}</div>
              </div>
            </div>
            <div class="card-date-badge" style="background: rgba(180, 130, 40, 0.15); border-color: #C8963E; color: #8A4B10;">
              <i class="fa-solid fa-lock"></i> Locked Until ${milestone.targetDate}
            </div>
          </div>

          <!-- Live Unlock Countdown Banner -->
          <div class="milestone-countdown-banner">
            <i class="fa-regular fa-clock countdown-clock-icon"></i>
            <span>Unlocks in: <strong>${diffDays} Days, ${diffHours} Hours, ${diffMins} Minutes</strong> on ${milestone.targetDate}</span>
          </div>

          <!-- Sealed Love Capsule Graphic Card -->
          <div class="sealed-capsule-card">
            <div class="capsule-wax-seal" onclick="rattleCapsuleLock(this)" title="Locked until ${milestone.targetDate}">
              <i class="fa-solid fa-lock"></i>
            </div>
            <h4>Sealed Love Capsule • Written by Vishal</h4>
            <p>
              This message is sealed under lock and key. It is strictly time-locked and <strong>cannot be opened at any cost</strong> until <strong>${milestone.targetDate}</strong>.
            </p>
            <p style="margin-top: 8px; font-size: 0.88rem; color: #8A4B10; font-style: italic;">
              When our relationship reaches that exact day, the celestial seal will automatically dissolve to reveal what Vishal wrote for you!
            </p>
            <div class="locked-security-note">
              <i class="fa-solid fa-shield-halved"></i>
              <span>Strict Time-Lock Active • Sealed Until ${milestone.targetDate}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Update fullscreen preview teaser
  const fsPreview = document.getElementById('fs-milestone-preview');
  if (fsPreview) {
    if (isUnlocked) {
      fsPreview.innerHTML = `
        <strong>${milestone.sticker} ${escapeHtml(milestone.title)}</strong> (${milestone.targetDate}): 
        <em>"${escapeHtml(milestone.description.slice(0, 140))}..."</em>
      `;
    } else {
      fsPreview.innerHTML = `
        <strong>🔒 ${escapeHtml(milestone.title)}</strong>: 
        <em>Sealed in the stars until ${milestone.targetDate}. Automatically unlocks on that day!</em>
      `;
    }
  }
}

function rattleCapsuleLock(elem) {
  if (!elem) return;
  elem.classList.remove('rattling');
  void elem.offsetWidth; // trigger DOM reflow to re-play animation
  elem.classList.add('rattling');
  
  // Play subtle metallic lock chime if audio enabled
  if (audioCtx && audioEnabled) {
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.18);
    } catch (e) {}
  }
}

function initFullscreenLifetimeMode() {
  const modal = document.getElementById('fullscreen-eternity-modal');
  const openBtn = document.getElementById('btn-fullscreen-lifetime');
  const closeBtn = document.getElementById('btn-close-fullscreen-eternity');
  const backdrop = document.getElementById('eternity-modal-backdrop');

  const openModal = () => {
    if (modal) {
      modal.classList.remove('hidden');
      playScrollChimeSound();
      triggerScrollStardust();
    }
  };

  const closeModal = () => {
    if (modal) modal.classList.add('hidden');
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------
   4.8 PILLAR 4: THE REAL CELESTIAL STAR MAP OF JAN 30, 2026 (8:50 PM)
   ------------------------------------------------------------------------- */
function initCelestialStarMap() {
  const canvas = document.getElementById('starmap-canvas');
  const container = document.getElementById('starmap-container');
  const tooltip = document.getElementById('starmap-tooltip');
  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);

  window.addEventListener('resize', () => {
    if (!container) return;
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
  });

  // Authentic constellations visible in winter sky on late January nights
  const CONSTELLATIONS = [
    {
      id: "anniversary-zenith",
      name: "The January 30 Zenith ✨",
      tagline: "Our Anniversary Origin • Jan 30, 2026, 8:50 PM",
      story: "The exact moment Vishal asked you out. Coordinates: Jan 30, 2026, 8:50 PM • Magnitude: Eternal Love.",
      isZenith: true,
      stars: [{ x: 0.50, y: 0.46, mag: 4.8, name: "Anniversary Zenith (8:50 PM)" }],
      lines: []
    },
    {
      id: "orion",
      name: "Orion the Hunter 🏹",
      tagline: "High in the Southern Winter Sky",
      story: "The famous constellation that looked over our first date. Belt stars: Alnitak, Alnilam, Mintaka.",
      stars: [
        { x: 0.38, y: 0.30, mag: 3.8, name: "Betelgeuse (Red Supergiant)", color: "#FF9E79" },
        { x: 0.45, y: 0.33, mag: 3.0, name: "Bellatrix" },
        { x: 0.40, y: 0.42, mag: 3.0, name: "Alnitak (Belt)" },
        { x: 0.42, y: 0.41, mag: 3.0, name: "Alnilam (Belt)" },
        { x: 0.44, y: 0.40, mag: 3.0, name: "Mintaka (Belt)" },
        { x: 0.37, y: 0.53, mag: 2.8, name: "Saiph" },
        { x: 0.46, y: 0.51, mag: 4.0, name: "Rigel (Blue-White Supergiant)", color: "#BAE6FD" }
      ],
      lines: [[0, 1], [0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6], [5, 6]]
    },
    {
      id: "taurus",
      name: "Taurus the Bull 🐂",
      tagline: "Golden Eye Aldebaran",
      story: "Steadfast and devoted—a reminder that no matter where life leads us, we stand together.",
      stars: [
        { x: 0.29, y: 0.34, mag: 3.6, name: "Aldebaran (Eye of Taurus)", color: "#FBBF24" },
        { x: 0.25, y: 0.27, mag: 2.6, name: "Elnath" },
        { x: 0.27, y: 0.38, mag: 2.3, name: "Hyades" },
        { x: 0.31, y: 0.40, mag: 2.3, name: "Ain" }
      ],
      lines: [[0, 1], [0, 2], [2, 3], [3, 0]]
    },
    {
      id: "pleiades",
      name: "The Pleiades (Seven Sisters) 💎",
      tagline: "The Sparkling Open Cluster",
      story: "Seven shimmering sister stars—one for every milestone love letter written for you.",
      stars: [
        { x: 0.21, y: 0.24, mag: 2.4, name: "Alcyone" },
        { x: 0.218, y: 0.23, mag: 2.1, name: "Atlas" },
        { x: 0.205, y: 0.245, mag: 2.0, name: "Electra" },
        { x: 0.222, y: 0.25, mag: 2.1, name: "Maia" },
        { x: 0.20, y: 0.235, mag: 1.9, name: "Merope" },
        { x: 0.224, y: 0.225, mag: 1.8, name: "Taygeta" },
        { x: 0.228, y: 0.24, mag: 1.8, name: "Pleione" }
      ],
      lines: [[0, 1], [1, 2], [2, 4], [0, 3], [3, 5], [1, 6]]
    },
    {
      id: "sirius",
      name: "Canis Major & Sirius ⭐",
      tagline: "The Brightest Star in the Heavens",
      story: "Shining with supreme brilliance, just like your smile across that photoshoot room.",
      stars: [
        { x: 0.52, y: 0.65, mag: 4.4, name: "Sirius (Dog Star)", color: "#E0F2FE" },
        { x: 0.50, y: 0.73, mag: 2.5, name: "Murzim" },
        { x: 0.55, y: 0.75, mag: 2.7, name: "Wezen" },
        { x: 0.57, y: 0.80, mag: 2.6, name: "Adhara" }
      ],
      lines: [[0, 1], [0, 2], [2, 3]]
    },
    {
      id: "cassiopeia",
      name: "Cassiopeia the Queen 👑",
      tagline: "The Northern Celestial Crown",
      story: "Five stars formed into a queen's celestial crown watching over the northern horizon.",
      stars: [
        { x: 0.73, y: 0.22, mag: 2.7, name: "Schedar" },
        { x: 0.76, y: 0.27, mag: 2.9, name: "Caph" },
        { x: 0.80, y: 0.20, mag: 2.8, name: "Gamma Cas" },
        { x: 0.83, y: 0.24, mag: 2.6, name: "Ruchbah" },
        { x: 0.86, y: 0.19, mag: 2.5, name: "Segin" }
      ],
      lines: [[1, 0], [0, 2], [2, 3], [3, 4]]
    }
  ];

  // Random background field stars
  const fieldStars = [];
  for (let i = 0; i < 90; i++) {
    fieldStars.push({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.3,
      alpha: 0.25 + Math.random() * 0.65,
      twinkle: 0.02 + Math.random() * 0.04
    });
  }

  let hoveredConstellation = null;
  let hoveredStar = null;

  function drawMap() {
    ctx.clearRect(0, 0, width, height);

    // Draw Celestial Coordinate Grid Rings
    ctx.save();
    ctx.strokeStyle = 'rgba(200, 150, 62, 0.14)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);

    [0.2, 0.35, 0.48].forEach(factor => {
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.5, Math.min(width, height) * factor, 0, Math.PI * 2);
      ctx.stroke();
    });

    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.moveTo(0, height * 0.5);
    ctx.lineTo(width, height * 0.5);
    ctx.stroke();
    ctx.restore();

    // Draw Field Stars
    fieldStars.forEach(s => {
      const sx = s.x * width;
      const sy = s.y * height;
      const pulse = Math.sin(Date.now() * s.twinkle) * 0.2;
      const a = Math.max(0.1, Math.min(0.9, s.alpha + pulse));

      ctx.save();
      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
      ctx.fill();
      ctx.restore();
    });

    // Draw Constellation Lines
    CONSTELLATIONS.forEach(c => {
      const isHovered = hoveredConstellation && hoveredConstellation.id === c.id;
      ctx.save();
      ctx.strokeStyle = isHovered 
        ? 'rgba(255, 215, 120, 0.9)' 
        : 'rgba(180, 150, 220, 0.35)';
      ctx.lineWidth = isHovered ? 2 : 1.2;
      if (!isHovered) ctx.setLineDash([2, 3]);

      c.lines.forEach(([i1, i2]) => {
        const s1 = c.stars[i1];
        const s2 = c.stars[i2];
        if (s1 && s2) {
          ctx.beginPath();
          ctx.moveTo(s1.x * width, s1.y * height);
          ctx.lineTo(s2.x * width, s2.y * height);
          ctx.stroke();
        }
      });
      ctx.restore();
    });

    // Draw Anniversary Zenith Pulsing Gold Rings
    const zenith = CONSTELLATIONS.find(c => c.isZenith);
    if (zenith) {
      const zStar = zenith.stars[0];
      const zx = zStar.x * width;
      const zy = zStar.y * height;

      const pulseRadius = 14 + Math.sin(Date.now() * 0.004) * 5;
      ctx.save();
      ctx.beginPath();
      ctx.arc(zx, zy, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 215, 100, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(zx, zy, pulseRadius + 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 180, 60, 0.28)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    // Draw Constellation Stars
    CONSTELLATIONS.forEach(c => {
      const isHovered = hoveredConstellation && hoveredConstellation.id === c.id;

      c.stars.forEach(s => {
        const sx = s.x * width;
        const sy = s.y * height;
        const isThisStar = hoveredStar && hoveredStar.name === s.name;

        ctx.save();
        ctx.beginPath();
        const r = isThisStar ? s.mag + 3 : (isHovered ? s.mag + 1.5 : s.mag);
        ctx.arc(sx, sy, r, 0, Math.PI * 2);

        if (c.isZenith) {
          ctx.fillStyle = '#FFE066';
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 18;
        } else {
          ctx.fillStyle = s.color || (isHovered ? '#FFFDF0' : '#E0F2FE');
          ctx.shadowColor = s.color || '#AEE2FF';
          ctx.shadowBlur = isHovered ? 14 : 8;
        }
        ctx.fill();
        ctx.restore();

        // Star Name Label
        if (s.mag >= 3.2 || isHovered || c.isZenith) {
          ctx.save();
          ctx.font = c.isZenith ? 'bold 12px Outfit, sans-serif' : '10px Outfit, sans-serif';
          ctx.fillStyle = c.isZenith ? '#FFE27A' : 'rgba(240, 230, 210, 0.85)';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 4;
          ctx.fillText(s.name.split(' (')[0], sx + r + 5, sy + 4);
          ctx.restore();
        }
      });
    });
  }

  function loop() {
    drawMap();
    requestAnimationFrame(loop);
  }
  loop();

  // Mouse Interaction
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let foundConstellation = null;
    let foundStar = null;

    CONSTELLATIONS.forEach(c => {
      c.stars.forEach(s => {
        const sx = s.x * width;
        const sy = s.y * height;
        const dist = Math.hypot(mx - sx, my - sy);
        if (dist < 22) {
          foundConstellation = c;
          foundStar = s;
        }
      });
    });

    hoveredConstellation = foundConstellation;
    hoveredStar = foundStar;

    if (foundConstellation && tooltip) {
      tooltip.classList.remove('hidden');
      tooltip.innerHTML = `
        <div style="font-weight: 700; color: #F7D788; font-size: 0.88rem; margin-bottom: 2px;">
          ${foundConstellation.name}
        </div>
        <div style="font-size: 0.74rem; color: #BAE6FD; margin-bottom: 6px;">
          ${foundConstellation.tagline}
        </div>
        <div style="font-family: var(--font-serif); font-size: 0.8rem; color: #E8DCC4; line-height: 1.4;">
          ${foundConstellation.story}
        </div>
      `;

      const tipX = Math.min(width - 240, Math.max(10, mx + 15));
      const tipY = Math.min(height - 110, Math.max(10, my - 30));
      tooltip.style.left = `${tipX}px`;
      tooltip.style.top = `${tipY}px`;
    } else if (tooltip) {
      tooltip.classList.add('hidden');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredConstellation = null;
    hoveredStar = null;
    if (tooltip) tooltip.classList.add('hidden');
  });
}

/* -------------------------------------------------------------------------
   5. RENDER SECTION 2: GIFTS & CARDS MEMORY VAULT (3D FLIP POLAROIDS)
   ------------------------------------------------------------------------- */
function renderMemoriesVault(filterCategory = 'all') {
  const grid = document.getElementById('memories-grid');
  if (!grid || typeof MEMORIES_DATA === 'undefined') return;

  const counts = {
    all: MEMORIES_DATA.length,
    gifts: MEMORIES_DATA.filter(m => m.category === 'gifts').length,
    cards: MEMORIES_DATA.filter(m => m.category === 'cards').length,
    notes: MEMORIES_DATA.filter(m => m.category === 'notes').length
  };

  document.getElementById('count-all').innerText = counts.all;
  document.getElementById('count-gifts').innerText = counts.gifts;
  document.getElementById('count-cards').innerText = counts.cards;
  document.getElementById('count-notes').innerText = counts.notes;

  const items = filterCategory === 'all' 
    ? MEMORIES_DATA 
    : MEMORIES_DATA.filter(m => m.category === filterCategory);

  grid.innerHTML = items.map(m => `
    <div class="polaroid-card" data-id="${m.id}">
      <div class="polaroid-inner">
        <!-- FRONT SIDE -->
        <div class="polaroid-front">
          <div class="polaroid-tape"></div>
          <div class="polaroid-img-wrapper">
            <img src="${getMediaUrl(m.image)}" alt="${m.title}" loading="lazy" onerror="handleImgError(this)">
            <span class="polaroid-tag-badge">${m.tag}</span>
          </div>
          <div class="polaroid-caption">
            <h3 class="polaroid-title">${m.title}</h3>
            <div class="polaroid-date"><i class="fa-regular fa-calendar"></i> ${m.date}</div>
            <div class="flip-prompt"><i class="fa-solid fa-rotate"></i> Tap to flip memory</div>
          </div>
        </div>

        <!-- BACK SIDE -->
        <div class="polaroid-back">
          <div class="back-header">
            <h4 class="back-title">${m.title}</h4>
            <div class="back-meta"><i class="fa-solid fa-location-dot"></i> ${m.location}</div>
          </div>
          <p class="back-story">${m.backStory}</p>
          ${m.favoriteDetail ? `
            <div class="back-detail">
              <strong>Favorite Detail:</strong> ${m.favoriteDetail}
            </div>
          ` : ''}
          <button class="unflip-btn" onclick="event.stopPropagation(); flipCard('${m.id}')">
            <i class="fa-solid fa-arrow-left"></i> Flip back
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Add click listeners to flip cards
  grid.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Filter button clicks
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      renderMemoriesVault(targetBtn.dataset.category);
    });
  });
}

function flipCard(cardId) {
  const card = document.querySelector(`.polaroid-card[data-id="${cardId}"]`);
  if (card) card.classList.toggle('flipped');
}

/* -------------------------------------------------------------------------
   6. RENDER SECTION 3: PHOTOS & VIDEO MEMORIES REEL
   ------------------------------------------------------------------------- */
function renderMediaReel() {
  const container = document.getElementById('media-reel-container');
  if (!container || typeof MEDIA_REEL_DATA === 'undefined') return;

  container.innerHTML = MEDIA_REEL_DATA.map(item => `
    <div class="film-card">
      <div class="film-holes">
        <div class="hole"></div><div class="hole"></div><div class="hole"></div><div class="hole"></div>
      </div>
      <div class="film-media-box" onclick="openMediaLightbox('${item.id}')">
        ${item.type === 'video' ? `
          <video class="film-reel-video" autoplay loop muted playsinline poster="${item.poster}" preload="auto">
            <source src="${item.videoUrl}" type="video/mp4">
          </video>
          <div class="video-play-overlay video-live-pill">
            <span class="live-dot"></span> LIVE
          </div>
        ` : `
          <img src="${getMediaUrl(item.url)}" alt="${item.title}" loading="lazy" onerror="handleImgError(this)">
        `}
      </div>
      <div class="film-info">
        <h4 class="film-title">${item.sticker || '✨'} ${item.title}</h4>
        <div class="film-meta"><i class="fa-regular fa-clock"></i> ${item.date} • ${item.location}</div>
        <p class="film-caption">${item.caption}</p>
      </div>
      <div class="film-holes" style="margin-top: 10px; margin-bottom: 0;">
        <div class="hole"></div><div class="hole"></div><div class="hole"></div><div class="hole"></div>
      </div>
    </div>
  `).join('');
}

function playScrollChimeSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const now = audioCtx.currentTime;
  const freqs = [659.25, 830.61]; // E5, G#5 gentle acoustic bell
  freqs.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    gain.gain.setValueAtTime(0.04, now + idx * 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + idx * 0.04);
    osc.stop(now + idx * 0.04 + 0.4);
  });
}

/* -------------------------------------------------------------------------
   7. SECTION 4: HEARTFELT BIRTHDAY ENVELOPE UNFOLDING & CRAZY WAX SEAL BREAK
   ------------------------------------------------------------------------- */
function initEnvelope() {
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const trigger = document.getElementById('envelope-trigger');
  const letter = document.getElementById('letter-content');
  const closeBtn = document.getElementById('close-letter-btn');
  const shardsContainer = document.getElementById('wax-shards-container');
  let isBreaking = false;

  if (!trigger || !letter || !envelopeWrapper) return;

  trigger.addEventListener('click', (e) => {
    if (isBreaking) return;
    isBreaking = true;

    // Calculate click coordinates for confetti origin
    const rect = trigger.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + 90) / window.innerHeight;

    // 1. Play realistic wax crack & fracture sound
    playWaxCrackSound();

    // 2. Stage 1: Pre-fracture violent tremble and golden crack flash
    envelopeWrapper.classList.add('cracking');

    // 3. Stage 2: Seal shatters in half, exploding flying wax shards
    setTimeout(() => {
      envelopeWrapper.classList.remove('cracking');
      envelopeWrapper.classList.add('shattered');

      // Spawn 14 high-velocity glowing wax shards
      spawnExplodingWaxShards(shardsContainer);

      // Trigger spectacular heart & golden stardust confetti explosion
      triggerWaxConfettiExplosion(originX, originY);
    }, 260);

    // 4. Stage 3: Envelope triangular flap flips backwards 180 degrees in 3D
    setTimeout(() => {
      envelopeWrapper.classList.add('flap-open');
    }, 540);

    // 5. Stage 4: Envelope dissolves into golden radiance, letter unfurls
    setTimeout(() => {
      envelopeWrapper.classList.add('revealing-letter');
      letter.classList.remove('hidden');

      // Smoothly scroll letter into center view if needed
      setTimeout(() => {
        const letterRect = letter.getBoundingClientRect();
        if (letterRect.top < 60 || letterRect.bottom > window.innerHeight) {
          letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }, 920);

    // 6. Complete transition: hide trigger element
    setTimeout(() => {
      trigger.style.display = 'none';
      isBreaking = false;
    }, 1550);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      letter.classList.add('hidden');
      trigger.style.display = 'block';

      // Reset all envelope classes for replayability
      envelopeWrapper.classList.remove('cracking', 'shattered', 'flap-open', 'revealing-letter');
      if (shardsContainer) shardsContainer.innerHTML = '';
    });
  }
}

function spawnExplodingWaxShards(container) {
  if (!container) return;
  container.innerHTML = '';

  const shardCount = 14;
  for (let i = 0; i < shardCount; i++) {
    const shard = document.createElement('div');
    shard.className = 'wax-shard';

    // Random radial angle and distance
    const angle = (i / shardCount) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
    const distance = 80 + Math.random() * 140;
    const tx = `${Math.cos(angle) * distance}px`;
    const ty = `${Math.sin(angle) * distance}px`;
    const rot = `${(Math.random() - 0.5) * 720}deg`;
    const size = 10 + Math.random() * 12;

    shard.style.setProperty('--tx', tx);
    shard.style.setProperty('--ty', ty);
    shard.style.setProperty('--rot', rot);
    shard.style.width = `${size}px`;
    shard.style.height = `${size * (0.6 + Math.random() * 0.8)}px`;

    // Jagged polygonal wax shard shapes
    const clipPolygons = [
      'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      'polygon(30% 0%, 100% 20%, 75% 100%, 0% 70%)',
      'polygon(50% 0%, 100% 100%, 0% 100%)',
      'polygon(20% 0%, 90% 10%, 100% 80%, 10% 100%)'
    ];
    shard.style.clipPath = clipPolygons[i % clipPolygons.length];

    container.appendChild(shard);
  }
}

function triggerWaxConfettiExplosion(originX, originY) {
  if (typeof confetti !== 'function') return;

  // Burst 1: High-velocity golden sparks & crimson wax embers
  confetti({
    particleCount: 55,
    spread: 80,
    startVelocity: 35,
    ticks: 200,
    gravity: 0.7,
    origin: { x: originX, y: originY },
    colors: ['#FFECA8', '#FFD700', '#C22A42', '#8A1E30', '#FFFFFF']
  });

  // Burst 2: Cascading romantic hearts & rose gold stardust
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 100,
      startVelocity: 25,
      ticks: 240,
      gravity: 0.5,
      origin: { x: originX, y: originY },
      shapes: ['star', 'circle'],
      colors: ['#FF6B8B', '#FFB6C1', '#F7D278', '#FFFDF8']
    });
  }, 120);
}

function playWaxCrackSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const now = audioCtx.currentTime;

  // 1. Sharp physical wax snap (bandpassed noise burst)
  const bufferSize = Math.floor(audioCtx.sampleRate * 0.07);
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(2200, now);
  noiseFilter.Q.setValueAtTime(3.5, now);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.35, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);
  noise.start(now);

  // 2. Harmonic crystalline ring following the fracture: C5, E5, G5, C6
  const freqs = [523.25, 659.25, 783.99, 1046.50];
  freqs.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + 0.02 + idx * 0.04);

    gain.gain.setValueAtTime(0.08, now + 0.02 + idx * 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02 + idx * 0.04 + 0.9);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + 0.02 + idx * 0.04);
    osc.stop(now + 0.02 + idx * 0.04 + 0.9);
  });
}

/* -------------------------------------------------------------------------
   8. LIGHTBOX MODAL FOR EXPANDED VIEW
   ------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
}

function openMediaLightbox(id) {
  const item = MEDIA_REEL_DATA.find(m => m.id === id);
  if (!item) return;

  const modal = document.getElementById('lightbox-modal');
  const body = document.getElementById('lightbox-content-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="lightbox-media-container">
      ${item.type === 'video' ? `
        <video controls autoplay>
          <source src="${item.videoUrl}" type="video/mp4">
        </video>
      ` : `
        <img src="${item.url}" alt="${item.title}">
      `}
    </div>
    <h3 class="lightbox-title">${item.title}</h3>
    <div class="lightbox-meta"><i class="fa-solid fa-location-dot"></i> ${item.location} • ${item.date}</div>
    <p class="lightbox-desc">${item.caption}</p>
  `;

  modal.classList.remove('hidden');
}

function openImageLightbox(imageUrl, title, date, desc) {
  const modal = document.getElementById('lightbox-modal');
  const body = document.getElementById('lightbox-content-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="lightbox-media-container">
      <img src="${getMediaUrl(imageUrl)}" alt="${title}">
    </div>
    <h3 class="lightbox-title">${title}</h3>
    ${date ? `<div class="lightbox-meta"><i class="fa-regular fa-calendar"></i> ${date}</div>` : ''}
    ${desc ? `<p class="lightbox-desc">${desc}</p>` : ''}
  `;

  modal.classList.remove('hidden');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const body = document.getElementById('lightbox-content-body');
  if (modal) modal.classList.add('hidden');
  if (body) body.innerHTML = '';
}

/* -------------------------------------------------------------------------
   9. STICKY NAV SCROLL ACTIVE HIGHLIGHT
   ------------------------------------------------------------------------- */
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------
   10. SECTION 3: 170 HANDWRITTEN REASONS (3D ROLLED SCROLL & CONTINUOUS STRIP)
   ------------------------------------------------------------------------- */
let allScrollExpanded = true;
let isScrollUnrolled = false;
let hasAutoUnrolledOnScroll = false;

function initReasonsScroll() {
  const container = document.getElementById('scroll-strip-container');
  if (!container || typeof HER_SCROLL_LIST === 'undefined') return;

  renderReasonsScroll('');

  // Unroll Trigger handlers (Clicking the wax seal or the 3D rolled bundle)
  const unrollBtn = document.getElementById('unroll-action-btn');
  const rolledBundle = document.getElementById('unroll-trigger-bundle');

  if (unrollBtn) {
    unrollBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      unrollPaperScroll({ autoTriggered: false });
    });
  }

  if (rolledBundle) {
    rolledBundle.addEventListener('click', () => {
      unrollPaperScroll({ autoTriggered: false });
    });
  }

  // Roll Up Trigger handler (from toolbar)
  const rollUpBtn = document.getElementById('scroll-roll-up-btn');
  if (rollUpBtn) {
    rollUpBtn.addEventListener('click', () => {
      rollUpPaperScroll();
    });
  }

  // Bottom Spool Actions (Back to Top & Roll Up from bottom)
  const bottomJumpBtn = document.getElementById('scroll-bottom-jump-top-btn');
  const bottomRollUpBtn = document.getElementById('scroll-bottom-roll-up-btn');

  if (bottomJumpBtn) {
    bottomJumpBtn.addEventListener('click', () => {
      const panel = document.querySelector('.scroll-control-panel');
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (bottomRollUpBtn) {
    bottomRollUpBtn.addEventListener('click', () => {
      rollUpPaperScroll();
    });
  }

  // Quick Jump Button in Toolbar (To Bottom / To Top toggle)
  const jumpBtn = document.getElementById('scroll-jump-btn');
  const jumpLabel = document.getElementById('jump-btn-label');

  function updateJumpState() {
    if (!jumpBtn) return;
    const stripContainer = document.getElementById('scroll-strip-container');
    if (!stripContainer) return;
    const rect = stripContainer.getBoundingClientRect();
    const isPastTop = rect.top < -250;
    if (isPastTop) {
      if (jumpLabel) jumpLabel.innerText = 'To Top';
      const icon = jumpBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-arrow-up';
    } else {
      if (jumpLabel) jumpLabel.innerText = 'To Bottom';
      const icon = jumpBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-arrow-down';
    }
  }

  window.addEventListener('scroll', updateJumpState, { passive: true });

  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      const stripContainer = document.getElementById('scroll-strip-container');
      const panel = document.querySelector('.scroll-control-panel');
      const bottomSpool = document.getElementById('scroll-bottom-spool');

      if (!stripContainer) return;
      const rect = stripContainer.getBoundingClientRect();

      if (rect.top < -250) {
        // Jump back to toolbar / top of scroll
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Jump smoothly down to bottom spool
        if (bottomSpool) bottomSpool.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }

  // Search input handler
  const searchInput = document.getElementById('scroll-search-input');
  const clearBtn = document.getElementById('scroll-clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = q ? 'flex' : 'none';
      }
      renderReasonsScroll(q);
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      renderReasonsScroll('');
      searchInput.focus();
    });
  }

  // Toggle All button
  const toggleAllBtn = document.getElementById('scroll-toggle-all-btn');
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      toggleAllScrollItems();
    });
  }

  updateScrollCounter();

  // Scroll-triggered unrolling when scrolling down into view for the first time
  const rolledBundleTarget = document.getElementById('scroll-rolled-stage') || document.getElementById('reasons-scroll');
  if (rolledBundleTarget && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAutoUnrolledOnScroll && !isScrollUnrolled) {
          hasAutoUnrolledOnScroll = true;
          unrollPaperScroll({ autoTriggered: true });
        }
      });
    }, {
      threshold: 0.3
    });
    observer.observe(rolledBundleTarget);
  }
}

function unrollPaperScroll(options = {}) {
  if (isScrollUnrolled) return;
  isScrollUnrolled = true;
  const isAuto = options.autoTriggered === true;

  const rolledStage = document.getElementById('scroll-rolled-stage');
  const unrolledStage = document.getElementById('scroll-unrolled-stage');
  const reasonsSection = document.getElementById('reasons-scroll');

  // Play crisp paper unrolling sound & celestial chimes
  playScrollUnrollSound();
  triggerScrollStardust();

  if (rolledStage) {
    rolledStage.classList.add('unrolling-out');
  }

  setTimeout(() => {
    if (rolledStage) rolledStage.classList.add('hidden-rolled');
    if (unrolledStage) {
      unrolledStage.classList.remove('hidden-scroll');
      unrolledStage.classList.add('unfurling');
    }

    // Only force smooth auto-scroll when user explicitly clicked button, avoiding scroll jump during natural scroll
    if (!isAuto && reasonsSection) {
      window.scrollTo({
        top: reasonsSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  }, 350);
}

function rollUpPaperScroll() {
  if (!isScrollUnrolled) return;
  isScrollUnrolled = false;

  const rolledStage = document.getElementById('scroll-rolled-stage');
  const unrolledStage = document.getElementById('scroll-unrolled-stage');
  const reasonsSection = document.getElementById('reasons-scroll');

  playScrollChimeSound();

  if (unrolledStage) {
    unrolledStage.classList.add('hidden-scroll');
    unrolledStage.classList.remove('unfurling');
  }

  if (rolledStage) {
    rolledStage.classList.remove('hidden-rolled');
    setTimeout(() => {
      rolledStage.classList.remove('unrolling-out');
    }, 50);
  }

  if (reasonsSection) {
    window.scrollTo({
      top: reasonsSection.offsetTop - 70,
      behavior: 'smooth'
    });
  }
}

function renderReasonsScroll(query = '') {
  const container = document.getElementById('scroll-strip-container');
  if (!container || typeof HER_SCROLL_LIST === 'undefined') return;

  const filtered = HER_SCROLL_LIST.filter(item => {
    if (!query) return true;
    const numStr = (item.number || '').toLowerCase();
    const textStr = (item.text || '').toLowerCase();
    const replyStr = (item.reply || '').toLowerCase();
    return numStr.includes(query) || textStr.includes(query) || replyStr.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="scroll-empty-search">
        <i class="fa-solid fa-feather-pointed"></i>
        <h3>No matching notes found</h3>
        <p>Try searching for words like "worm", "waffles", "crowd", "safe", or "142".</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach((item, index) => {
    // Add realistic accordion fold marker every 10 items (just like her real folded paper strip)
    if (index > 0 && index % 10 === 0 && !query) {
      const foldNum = Math.floor(index / 10);
      html += `
        <div class="paper-crease-divider">
          <span class="paper-crease-tag">Fold Line № ${foldNum} • From Her Hands</span>
        </div>
      `;
    }

    const isExpanded = allScrollExpanded ? 'is-revealed' : '';

    html += `
      <div class="scroll-item-row ${isExpanded}" data-id="${item.id}">
        <div class="scroll-item-clickable" onclick="handleScrollItemClick(${item.id})">
          <div class="scroll-item-left">
            <span class="scroll-num-badge">${item.number}</span>
            <span class="scroll-her-text">"${escapeHtml(item.text)}"</span>
          </div>
          <div class="scroll-item-indicator">
            <span class="scroll-click-hint">Reply 💌</span>
            <i class="fa-solid fa-chevron-down scroll-indicator-icon"></i>
          </div>
        </div>
        <div class="scroll-reply-card">
          <div class="reply-ribbon-tag">
            <i class="fa-solid fa-heart"></i> Vishal's Reply
          </div>
          <div class="reply-content-box">
            <div class="reply-message-text">${escapeHtml(item.reply)}</div>
            <div class="reply-reaction-emoji" title="Reactions from the heart">${item.reaction || '❤️'}</div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateScrollCounter();
}

function handleScrollItemClick(id) {
  const row = document.querySelector(`.scroll-item-row[data-id="${id}"]`);
  if (!row) return;

  const wasRevealed = row.classList.contains('is-revealed');
  row.classList.toggle('is-revealed');

  if (!wasRevealed) {
    playScrollChimeSound();
  }

  updateScrollCounter();
}

function toggleAllScrollItems() {
  const rows = document.querySelectorAll('.scroll-item-row');
  const toggleBtn = document.getElementById('scroll-toggle-all-btn');
  const toggleLabel = document.getElementById('toggle-all-label');

  const revealedCount = document.querySelectorAll('.scroll-item-row.is-revealed').length;
  const shouldReveal = revealedCount < rows.length;

  rows.forEach(row => {
    if (shouldReveal) {
      row.classList.add('is-revealed');
    } else {
      row.classList.remove('is-revealed');
    }
  });

  allScrollExpanded = shouldReveal;

  if (toggleBtn && toggleLabel) {
    if (shouldReveal) {
      toggleLabel.innerText = 'Collapse All Replies';
      toggleBtn.innerHTML = `<i class="fa-solid fa-envelope"></i> <span id="toggle-all-label">Collapse All Replies</span>`;
    } else {
      toggleLabel.innerText = 'Expand All Replies';
      toggleBtn.innerHTML = `<i class="fa-solid fa-envelope-open-text"></i> <span id="toggle-all-label">Expand All Replies</span>`;
    }
  }

  if (shouldReveal) {
    playScrollChimeSound();
  }

  updateScrollCounter();
}

function updateScrollCounter() {
  const counter = document.getElementById('scroll-revealed-counter');
  if (!counter) return;

  const revealed = document.querySelectorAll('.scroll-item-row.is-revealed').length;
  const total = typeof HER_SCROLL_LIST !== 'undefined' ? HER_SCROLL_LIST.length : 170;

  counter.innerText = `${revealed} of ${total} Replies Revealed`;
}

function playScrollUnrollSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // 1. Paper rustle noise burst
    const bufferSize = ctx.sampleRate * 0.45;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.15));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.45);
    filter.Q.value = 3.0;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start();

    // 2. Sweet ascending harp chord
    const freqs = [392.00, 523.25, 659.25, 783.99, 1046.50]; // G4, C5, E5, G5, C6
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + 0.1 + idx * 0.08);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + 0.1 + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1 + idx * 0.08 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1 + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + 0.1 + idx * 0.08);
      osc.stop(ctx.currentTime + 0.1 + idx * 0.08 + 0.65);
    });
  } catch (e) {}
}

function triggerScrollStardust() {
  const container = document.getElementById('reasons-scroll');
  if (!container) return;

  const count = 18;
  const emojis = ['✨', '📜', '💖', '⭐', '🌸'];

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'stardust-particle';
    star.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    star.style.left = `${45 + (Math.random() * 20 - 10)}%`;
    star.style.top = `${180 + Math.random() * 60}px`;
    star.style.fontSize = `${1.2 + Math.random() * 1.4}rem`;
    star.style.setProperty('--dx', `${(Math.random() - 0.5) * 350}px`);
    star.style.setProperty('--dy', `${(Math.random() - 0.6) * 300}px`);

    container.appendChild(star);
    setTimeout(() => {
      if (star.parentNode) star.parentNode.removeChild(star);
    }, 1800);
  }
}

function playScrollChimeSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [587.33, 880.00]; // D5, A5 warm chords
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.08 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.5);
    });
  } catch (e) {}
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* -------------------------------------------------------------------------
   11. SMART DROP-IN IMAGE AUTO-FALLBACK & LEADING-ZERO RECOVERY
   Allows users to name files 'chapter_2.jpg' or 'chapter_02.png' seamlessly
   ------------------------------------------------------------------------- */
function handleImgError(img) {
  if (!img || img.dataset.hasFailedFinal) return;

  if (!img.dataset.candidates) {
    const rawUrl = img.src.split('?')[0];
    const slashIdx = rawUrl.lastIndexOf('/');
    const dir = slashIdx >= 0 ? rawUrl.substring(0, slashIdx + 1) : '';
    const file = slashIdx >= 0 ? rawUrl.substring(slashIdx + 1) : rawUrl;
    const dotIdx = file.lastIndexOf('.');
    const baseName = dotIdx >= 0 ? file.substring(0, dotIdx) : file;

    // Support both single digit and zero-padded names (e.g. chapter_2 <-> chapter_02)
    const nameVariations = [baseName];
    const zeroMatch = baseName.match(/^(.*?)_0(\d+)$/);
    if (zeroMatch) {
      nameVariations.push(`${zeroMatch[1]}_${zeroMatch[2]}`);
    }
    const singleMatch = baseName.match(/^(.*?)_([1-9])$/);
    if (singleMatch) {
      nameVariations.push(`${singleMatch[1]}_0${singleMatch[2]}`);
    }

    const exts = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
    const candidates = [];
    nameVariations.forEach(n => {
      exts.forEach(ext => {
        const candidateUrl = `${dir}${n}.${ext}`;
        if (!candidates.includes(candidateUrl) && candidateUrl !== rawUrl) {
          candidates.push(candidateUrl);
        }
      });
    });

    img.dataset.candidates = candidates.join('|');
  }

  const list = img.dataset.candidates ? img.dataset.candidates.split('|') : [];
  const nextCandidate = list.shift();
  img.dataset.candidates = list.join('|');

  if (nextCandidate) {
    img.addEventListener('load', () => applyDynamicPhotoFraming(img), { once: true });
    img.src = `${nextCandidate}?t=${Date.now()}`;
    return;
  }

  // If all candidate extensions and zero-pad variations fail, use warm parchment placeholder
  img.dataset.hasFailedFinal = 'true';
  img.src = 'images/antique_leather_cover_cropped.jpg';
}

window.addEventListener('resize', () => {
  const leftPage = document.getElementById('folio-left-page');
  const polaroidImg = leftPage ? leftPage.querySelector('.polaroid-photo-box img') : null;
  if (polaroidImg && (polaroidImg.naturalWidth > 0 || polaroidImg.width > 0)) {
    applyDynamicPhotoFraming(polaroidImg);
  }
});



