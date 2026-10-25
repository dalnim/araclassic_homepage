document.body.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
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
  feedback.textContent = '정답이라고 생각하는 보기를 골라 보세요.';
  resetButton.hidden = true;
  answers[0].focus({ preventScroll: true });
});

document.querySelector('#year').textContent = new Date().getFullYear();
