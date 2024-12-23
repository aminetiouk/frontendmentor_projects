const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name');
  
  if (firstName.value === '') {
    document.querySelector('.error-message').style.display = 'block';
    firstName.style.borderColor = 'red';
  } else {
    document.querySelector('.error-message').style.display = 'none';
    firstName.style.borderColor = '';
  }
  
  firstName.addEventListener('input', () => {
    if (firstName.value !== '') {
      document.querySelector('.error-message').style.display = 'none';
      firstName.style.borderColor = '';
    }
  });
});

