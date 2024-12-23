const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const firstNameInput = document.getElementById('first-name');
  const firstName = firstNameInput.value.trim();
  
  if (firstName === '') {
    document.querySelector('.error-message').style.display = 'block';
    firstNameInput.style.borderColor = 'red';
  } else {
    document.querySelector('.error-message').style.display = 'none';
    firstNameInput.style.borderColor = '';
  }
  firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim() !== '') {
      document.querySelector('.error-message').style.display = 'none';
      firstNameInput.style.borderColor = ''; 
    }
  });
});
