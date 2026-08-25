const screen = document.getElementById('screen');
const homeButton = document.getElementById('homeButton');
const lovePop = document.getElementById('lovePop');
const START_DATE = new Date('2026-08-22T00:00:00');
let currentScreen = 'welcome';
let love = 0;

function relationshipDay(){
  const now=new Date();
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const start=new Date(START_DATE.getFullYear(),START_DATE.getMonth(),START_DATE.getDate());
  return Math.max(1,Math.floor((today-start)/86400000)+1);
}
function fmt(n){return `${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;}
function mount(name, html, setup){
  currentScreen=name; screen.innerHTML=html; screen.classList.remove('screen-shell'); void screen.offsetWidth; screen.classList.add('screen-shell');
  homeButton.hidden=name==='welcome'; window.scrollTo({top:0,behavior:'smooth'}); if(setup) setup();
}

function welcome(){mount('welcome',`<section class="welcome-grid"><div class="welcome-copy"><div class="eyebrow">a little lavender story</div><h1 class="display">For Leena,<br><em>with all my love.</em></h1><p class="quiet-copy intro">A tiny question, a little surprise, a song, our days together, and a letter from my heart.</p><button class="primary-cta" id="start">Open our story →</button><div class="welcome-footnote">♡ made by xandue</div></div><div class="hero-art"><div class="hero-glow"></div><div class="hero-card"><img src="assets/cute-love.gif" alt="Cute animated love GIF"><div class="hero-caption"><span>tiny moments</span><b>♡</b></div></div></div></section>`,()=>document.getElementById('start').onclick=test);}

function test(){
  mount('test',`<section class="test-shell"><div class="progress-line"><button class="ghost-cta" id="back">← back</button><span>chapter 01 <b>love test</b></span></div><div class="question-card"><div class="test-gif"><img src="assets/cute-love.gif" alt="Cute animated bunny"></div><div class="eyebrow">the very serious question</div><h1 class="display">How much do you<br><span>love me?</span></h1><div class="percent-big" id="percent">${love}%</div><div class="love-meter"><div class="meter-shell"><div class="meter-fill" id="meterFill" style="width:${love}%"></div></div><span class="meter-label left">0</span><span class="meter-label right">100</span></div><label class="slider-label" for="loveRange">choose your answer</label><input id="loveRange" type="range" min="0" max="100" value="${love}"><p class="quiet-copy test-message" id="message"></p><button class="primary-cta" id="answer">That’s my answer 💜 →</button></div></section>`,()=>{
    const range=document.getElementById('loveRange'), percent=document.getElementById('percent'), fill=document.getElementById('meterFill'), msg=document.getElementById('message');
    function update(){love=Number(range.value);percent.textContent=`${love}%`;fill.style.width=`${love}%`;msg.textContent=love<30?'Be honest with me… 👀':love<70?'I can feel a little love growing. 💜':love<100?'Okayyy, now we’re talking. ✨':'That is exactly what I wanted to see. ❤️';}
    range.oninput=update;update();document.getElementById('back').onclick=welcome;document.getElementById('answer').onclick=()=>{lovePop.hidden=false;setTimeout(()=>{lovePop.hidden=true;surprises();},550)};
  });
}

function surprises(){mount('surprises',`<section class="surprise-shell"><div class="progress-line"><button class="ghost-cta" id="back">← back</button><span>chapter 02 <b>your surprise</b></span></div><div class="surprise-heading"><div class="eyebrow">you passed the love test</div><h1 class="display">Here’s your little<br><em>surprise.</em></h1><p class="quiet-copy">Three little boxes. Open them in any order. 💜</p></div><div class="surprise-grid"><button class="surprise-card" id="song"><span class="surprise-icon">🎵</span><strong>Sweet Boy</strong><span>our little song</span><i>open →</i></button><button class="surprise-card" id="days"><span class="surprise-icon">🫶</span><strong>Our Days</strong><span>watch our number grow</span><i>open →</i></button><button class="surprise-card" id="letter"><span class="surprise-icon">💌</span><strong>A Letter</strong><span>something from my heart</span><i>open →</i></button></div><div class="small-sign">made with love for Leena ♡</div></section>`,()=>{document.getElementById('back').onclick=test;document.getElementById('song').onclick=song;document.getElementById('days').onclick=days;document.getElementById('letter').onclick=letter;});}

function pageHeader(kicker,title){return `<div class="page-header"><button class="ghost-cta" id="back">← back to surprises</button><div class="eyebrow">${kicker}</div><h1 class="display">${title}</h1></div>`;}
function song(){mount('song',`<section class="page-shell"><div>${pageHeader('chapter 03 / our song','Sweet Boy. 💜')}</div><div class="song-layout"><div class="song-cover"><img src="assets/song-cover.jpg" alt="Sweet Boy cover"></div><div class="song-panel"><div class="song-title-row"><img src="assets/song-cover.jpg" alt=""><div><span>now playing</span><h2>Sweet Boy</h2></div></div><p class="quiet-copy">A little soundtrack for us.</p><audio controls preload="metadata" playsinline><source src="assets/our-song.mp3" type="audio/mpeg"></audio><p class="audio-note">Tap play to listen ♡</p></div></div></section>`,()=>document.getElementById('back').onclick=surprises);}
function days(){const day=relationshipDay();const today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});mount('days',`<section class="page-shell"><div>${pageHeader('chapter 04 / our days','One day at a time. 🫶')}</div><div class="days-layout"><div class="days-photo"><img src="assets/our-days.jpg" alt="Our memory"></div><div class="days-card"><div class="eyebrow">today</div><div class="day-number">${day}</div><div class="day-label">days together</div><div class="date-line"><span>started</span><b>August 22, 2026</b></div><div class="date-line"><span>today</span><b>${today}</b></div><p class="quiet-copy">Every new day adds another little chapter to us. 💜</p></div></div></section>`,()=>document.getElementById('back').onclick=surprises);}
function letter(){const ps=`I know we’ve only just met, and it’s only been 4 days since we started dating, but somehow you’ve already become such a special part of my life. 🥹❤️ I’m honestly so happy that you came into my life.\n\nI know we still have so much to learn about each other, but I want us to experience everything together — the happy moments, the difficult days, the late-night talks, the laughs, the memories, and all the little things in between. I want to grow with you, support you, and make beautiful memories with you.\n\nMaybe it’s early to say forever, but I really hope we can make it that far. I want us to keep choosing each other, day after day, and build something that lasts. ❤️\n\nThank you for coming into my life, Leena. I’m so happy you’re here. I love you so much, and I hope this is only the beginning of our story. ❤️`.split('\n\n').map(p=>`<p>${p}</p>`).join('');mount('letter',`<section class="page-shell letter-page"><div>${pageHeader('chapter 05 / from my heart','Leena ❤️')}</div><article class="letter-card"><div class="letter-top">for you, always ♡</div>${ps}<div class="letter-sign">— yours, with love ♡<br>xandue</div></article></section>`,()=>document.getElementById('back').onclick=surprises);}

homeButton.onclick=welcome;
welcome();

// Persistent music player
const audio=document.getElementById('songAudio'), play=document.getElementById('audioPlay'), progress=document.getElementById('audioProgress'), time=document.getElementById('audioTime'), vol=document.getElementById('audioVolume'), dockCover=document.getElementById('dockCover'), error=document.getElementById('audioError');
function updateAudio(){const dur=Number.isFinite(audio.duration)?audio.duration:0;progress.max=dur||100;progress.value=Math.min(audio.currentTime,dur||100);time.textContent=`${fmt(audio.currentTime)} / ${fmt(dur)}`;play.textContent=audio.paused?'▶':'Ⅱ';play.setAttribute('aria-label',audio.paused?'Play Sweet Boy':'Pause Sweet Boy');dockCover.classList.toggle('is-playing',!audio.paused);}
play.onclick=async()=>{try{if(audio.paused)await audio.play();else audio.pause();updateAudio();}catch{error.hidden=false;}};
progress.oninput=()=>{audio.currentTime=Number(progress.value);updateAudio();};vol.oninput=()=>audio.volume=Number(vol.value);audio.volume=.72;audio.addEventListener('timeupdate',updateAudio);audio.addEventListener('loadedmetadata',updateAudio);audio.addEventListener('ended',updateAudio);audio.addEventListener('error',()=>error.hidden=false);updateAudio();
