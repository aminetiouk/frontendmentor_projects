document.querySelectorAll('.faq-article').forEach(article => {
  const icon = article.querySelector('.icon');
  const faqQuestion = article.querySelector('.faq-question');
  const faqAnswer = article.querySelector('.faq-answer');
  let isMinus = false;

  const toggleFaq = () => {
    isMinus = !isMinus;
    icon.src = isMinus ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
    faqAnswer.style.display = isMinus ? 'block' : 'none';
  };

  icon.addEventListener('click', toggleFaq);
  faqQuestion.addEventListener('click', toggleFaq);
});
