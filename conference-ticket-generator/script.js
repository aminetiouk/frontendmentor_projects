const avatarPic = document.querySelector('.upload__input');
const uploadIcon = document.querySelector('.upload__icon');
const uploadMessage = document.querySelector('.upload__message');
const uploadInfo = document.querySelector('.upload__info');
const uploadError = document.querySelector('.upload__error');
const uploadActions = document.querySelector('.upload__actions');
const removeImage = document.querySelector('.remove-image');
const changeImage = document.querySelector('.change-image');
const generateButton = document.querySelector('.generate-button');
const uploadContainer = document.querySelector('.upload__container');

// Input fields
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const githubUsername = document.getElementById('github-username');

// Ticket fields
const ticketFullName = document.querySelector('.ticket__name');
const ticketEmail = document.querySelector('.ticket__email');
const ticketAvatarName = document.querySelector('.ticket__avatar-name');
const ticketAvatarGithubUsername = document.querySelector(
  '.ticket__avatar-github-username'
);
const ticketCodeNumber = document.querySelector('.ticket__code-number');
const ticketAvatarImage = document.querySelector('.ticket__avatar-image');

// Generate Number Code
const generateCode = () => {
  const code = Math.floor(Math.random() * 100000);
  ticketCodeNumber.textContent = code;
};

const handleFile = file => {
  if (!file) return;
  if (file.size > 500 * 1024) {
    uploadInfo.style = 'display: none';
    uploadError.style = 'display: flex';
    return;
  } else {
    uploadInfo.style = 'display: flex';
    uploadError.style = 'display: none';
  }
  const reader = new FileReader();

  reader.onload = () => {
    const result = reader.result;
    uploadIcon.src = result;
    uploadIcon.classList.remove('upload__icon');
    uploadIcon.classList.add('avatar__picture');
    uploadMessage.classList.add('hidden');
    uploadActions.style = 'display: flex';
    avatarPic.dataset.url = result; // Store the data URL in a data attribute
  };

  reader.readAsDataURL(file);
};

avatarPic.addEventListener('change', e => {
  e.preventDefault();
  const file = avatarPic.files[0];
  handleFile(file);
});

removeImage.addEventListener('click', e => {
  e.preventDefault();
  avatarPic.value = '';
  delete avatarPic.dataset.url;
  uploadIcon.src = './assets/images/icon-upload.svg';
  uploadIcon.classList.remove('avatar__picture');
  uploadIcon.classList.add('upload__icon');
  uploadActions.style = 'display: none';
  uploadMessage.style = 'display: flex';
  
});

changeImage.addEventListener('click', e => {
  e.preventDefault();
  avatarPic.click();
});

generateButton.addEventListener('click', e => {
  e.preventDefault();
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const githubUsernameValue = githubUsername.value;
  const avatarPicValue = avatarPic.value;

  let isValid = true;

  if (!avatarPicValue) {
    uploadInfo.style.color = 'hsl(7, 88%, 67%)';
    isValid = false;
  }

  if (fullNameValue === '') {
    document.querySelector('.full-name__error').style = 'display: flex';
    isValid = false;
  }

  if (emailValue === '') {
    document.querySelector('.email__error').style = 'display: flex';
    isValid = false;
  }

  if (githubUsernameValue === '') {
    document.querySelector('.github-username__error').style = 'display: flex';
    isValid = false;
  }

  // Add event listeners to hide error messages when input fields are filled
  fullName.addEventListener('input', () => {
    document.querySelector('.full-name__error').style.display = fullName.value
      ? 'none'
      : 'flex';
  });

  email.addEventListener('input', () => {
    document.querySelector('.email__error').style.display = email.value
      ? 'none'
      : 'flex';
  });

  githubUsername.addEventListener('input', () => {
    document.querySelector('.github-username__error').style.display =
      githubUsername.value ? 'none' : 'flex';
  });

  if (isValid) {
    ticketFullName.textContent = fullNameValue;
    ticketAvatarName.textContent = fullNameValue;
    ticketEmail.textContent = emailValue;
    ticketAvatarImage.src = avatarPic.dataset.url;
    ticketAvatarGithubUsername.textContent = githubUsernameValue;

    generateCode();
    document.querySelector('.header').style = 'display: none';
    document.querySelector('.ticket-form').style = 'display: none';
    document.querySelector('.ticket').style = 'display: flex';
  }
});

// Drag and Drop functionality
uploadContainer.addEventListener('dragover', e => {
  e.preventDefault();
  uploadContainer.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', e => {
  e.preventDefault();
  uploadContainer.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', e => {
  e.preventDefault();
  uploadContainer.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFile(e.dataTransfer.files[0]);
  }
});
