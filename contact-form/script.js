const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;
  const success = document.querySelector('.success-state');
  
  const firstNameInput = document.getElementById('first-name');
  const firstName = firstNameInput.value.trim();
  
  const lastNameInput = document.getElementById('last-name');
  const lastName = lastNameInput.value.trim();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  const queryType = document.querySelector('input[name="query-type"]:checked');

  const messageInput = document.getElementById('message');
  const message = messageInput.value.trim();

  const consent = document.getElementById('consent');
  
  /* first name validation */
  if (firstName === '') {
    isValid = false;
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
    isValid = false;
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
    isValid = false;
    document.querySelector('#email + .error-message').style.display = 'block';
    emailInput.style.borderColor = 'red';
  } else {
    document.querySelector('#email + .error-message').style.display = 'none';
    emailInput.style.borderColor = '';
  }

  emailInput.addEventListener('focus', () => {
    document.querySelector('#email + .error-message').style.display = 'none';
    emailInput.style.borderColor = '';
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      document.querySelector('#email + .error-message').style.display = 'none';
      emailInput.style.borderColor = ''; 
    }
  });

  /* query type validation */
  if (!queryType) {
    isValid = false;
    document.querySelector('.form-query-type + .error-message').style.display =
      'block';
  } else {
    document.querySelector('.form-query-type + .error-message').style.display =
      'none';
  }

  document.querySelectorAll('input[name="query-type"]').forEach(input => {
    input.addEventListener('change', () => {
      document.querySelector('.form-query-type + .error-message').style.display = 'none';
    });
  });

  /* message validation */
  if (message === '') {
    isValid = false;
    document.querySelector('#message + .error-message').style.display = 'block';
    messageInput.style.borderColor = 'red';
  } else {
    document.querySelector('#message + .error-message').style.display = 'none';
    messageInput.style.borderColor = '';
  }

  messageInput.addEventListener('focus', () => {
    document.querySelector('#message + .error-message').style.display = 'none';
    messageInput.style.borderColor = '';
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
      document.querySelector('#message + .error-message').style.display = 'none';
      messageInput.style.borderColor = ''; 
    }
  });

  /* consent validation */
  if (!consent.checked) {
    isValid = false;
    document.querySelector('.consent + .error-message').style.display = 'block';
  } else {
    document.querySelector('.consent + .error-message').style.display = 'none';
  }

  consent.addEventListener('change', () => {
    if (consent.checked) {
      document.querySelector('.consent + .error-message').style.display = 'none';
    }
  });

  /* success message */
  if (isValid) {
    success.classList.add('active-state');
    form.reset();

    setTimeout(() => {
      success.classList.remove('active-state');
    }, 7000);
  }
});
