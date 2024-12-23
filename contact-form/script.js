const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  /* first name validation */
  const firstNameInput = document.getElementById('first-name');
  const firstName = firstNameInput.value.trim();
  
  if (firstName === '') {
    document.querySelector('#first-name + .error-message').style.display = 'block';
    firstNameInput.style.borderColor = 'red';
  } else {
    document.querySelector('#first-name + .error-message').style.display = 'none';
    firstNameInput.style.borderColor = '';
  }
  firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim() !== '') {
      document.querySelector('#first-name + .error-message').style.display = 'none';
      firstNameInput.style.borderColor = ''; 
    }
  });

  /* last name validation */
  const lastNameInput = document.getElementById('last-name');
  const lastName = lastNameInput.value.trim();

  if (lastName === '') {
    document.querySelector('#last-name + .error-message').style.display = 'block';
    lastNameInput.style.borderColor = 'red';
  } else {
    document.querySelector('#last-name + .error-message').style.display = 'none';
    lastNameInput.style.borderColor = '';
  }
  lastNameInput.addEventListener('input', () => {
    if (lastNameInput.value.trim() !== '') {
      document.querySelector('#last-name + .error-message').style.display = 'none';
      lastNameInput.style.borderColor = ''; 
    }
  });
});
