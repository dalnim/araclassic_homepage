document.body.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  if (!navigation.classList.contains('is-open')) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

const answers = document.querySelectorAll('[data-answer]');
const feedback = document.querySelector('#quiz-feedback');
const initialFeedback = feedback.textContent;
const resetButton = document.querySelector('.quiz-reset');

answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    const isCorrect = answer.dataset.answer === 'correct';
    answers.forEach((option) => {
      option.disabled = true;
      if (option.dataset.answer === 'correct') option.classList.add('correct');
    });
    if (!isCorrect) answer.classList.add('incorrect');
    feedback.textContent = `${isCorrect ? '정답이에요!' : '정답은 B, ‘걷는 듯한 빠르기로’예요.'} 안단테(Andante)는 걷는 듯한, 여유 있는 빠르기를 뜻해요.`;
    resetButton.hidden = false;
    resetButton.focus({ preventScroll: true });
  });
});

resetButton.addEventListener('click', () => {
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.classList.remove('correct', 'incorrect');
  });
  feedback.textContent = initialFeedback;
  resetButton.hidden = true;
  answers[0].focus({ preventScroll: true });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const demoMedia = document.querySelector('#demo-media');
const demoVideo = document.querySelector('#demo-video');
const demoPlay = document.querySelector('.demo-play');
const demoCaption = document.querySelector('#demo-caption');

demoPlay.addEventListener('click', async () => {
  demoVideo.muted = false;
  try {
    await demoVideo.play();
    demoCaption.textContent = '재생 전과 감상 중에 들리는 곡 이름 안내를 확인해 보세요.';
  } catch {
    demoCaption.textContent = '영상 안의 재생 버튼을 눌러 주세요. 재생되지 않으면 잠시 후 다시 시도해 주세요.';
  }
});

// YouTube 업로드 후 index.html의 data-youtube-url에 영상 URL을 넣습니다.
if (demoMedia.dataset.youtubeUrl.trim()) {
  try {
    const url = new URL(demoMedia.dataset.youtubeUrl);
    let id = '';
    if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
      id = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] || '';
    }
    if (/^[\w-]{11}$/.test(id)) {
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
      frame.title = '아라클래식 곡 이름 음성 안내 시연';
      frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      demoMedia.replaceChildren(frame);
      demoPlay.hidden = true;
    }
  } catch {
    // 올바른 YouTube URL이 아니면 기존 로컬 영상을 유지합니다.
  }
}
