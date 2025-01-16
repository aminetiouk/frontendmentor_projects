document.querySelectorAll('.faq-article').forEach(article => {
  const icon = article.querySelector('.icon');
  const faqAnswer = article.querySelector('.faq-answer');
  let isMinus = false;

  icon.addEventListener('click', () => {
    isMinus = !isMinus;
    icon.src = isMinus ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
    faqAnswer.style.display = isMinus ? 'block' : 'none';
  });
});
