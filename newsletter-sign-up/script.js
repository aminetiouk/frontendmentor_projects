const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit__button');
const dismissButton = document.getElementById('dismiss__button');
const form = document.querySelector('.container');
const successMessage = document.querySelector('.success-msg');
const attribution = document.querySelector('.attribution');
const emailUser = document.getElementById('email-user')
const emailError = document.querySelector('.email-error');

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


submitButton.addEventListener('click', () => {
  const email = emailInput.value;
  if (validateEmail(email)) {
    form.style = 'display: none';
    successMessage.style = 'display: block';
    attribution.style = 'display: none';
    emailUser.innerHTML = email;
  } else {
    emailError.style = 'display: block';
    emailInput.classList.add('input-error');
  }
});

dismissButton.addEventListener('click', () => {
  form.style = 'display: grid';
  successMessage.style = 'display: none';
  attribution.style = 'display: block';
});