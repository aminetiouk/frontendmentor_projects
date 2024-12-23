const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const firstNameInput = document.getElementById('first-name');
  const firstName = firstNameInput.value.trim();
  
  const lastNameInput = document.getElementById('last-name');
  const lastName = lastNameInput.value.trim();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  
  /* first name validation */
  if (firstName === '') {
    document.querySelector('#first-name + .error-message').style.display = 'block';
    firstNameInput.style.borderColor = 'red';
  } else {
    document.querySelector('#first-name + .error-message').style.display = 'none';
    firstNameInput.style.borderColor = '';
  }
  
  firstNameInput.addEventListener('focus', () => {
    document.querySelector('#first-name + .error-message').style.display = 'none';
    firstNameInput.style.borderColor = '';
  });

  firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim() !== '') {
      document.querySelector('#first-name + .error-message').style.display = 'none';
      firstNameInput.style.borderColor = ''; 
    }
  });

  /* last name validation */
  if (lastName === '') {
    document.querySelector('#last-name + .error-message').style.display = 'block';
    lastNameInput.style.borderColor = 'red';
  } else {
    document.querySelector('#last-name + .error-message').style.display = 'none';
    lastNameInput.style.borderColor = '';
  }

  lastNameInput.addEventListener('focus', () => {
    document.querySelector('#last-name + .error-message').style.display = 'none';
    lastNameInput.style.borderColor = '';
  });

  lastNameInput.addEventListener('input', () => {
    if (lastNameInput.value.trim() !== '') {
      document.querySelector('#last-name + .error-message').style.display = 'none';
      lastNameInput.style.borderColor = ''; 
    }
  });

  /* email validation */
  if (email === '') {
    document.querySelector('#email + .error-message').style.display = 'block';
    emailInput.style.borderColor = 'red';
  } else {
    document.querySelector('#email + .error-message').style.display = 'none';
    emailInput.style.borderColor = '';
  }
  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      document.querySelector('#email + .error-message').style.display = 'none';
      emailInput.style.borderColor = ''; 
    }
  });
});
