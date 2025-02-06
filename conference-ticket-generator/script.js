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
const fullNameInput = document.querySelector('.full-name__input');
const emailInput = document.querySelector('.email__input');
const githubUsernameInput = document.querySelector('.github-username__input');

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
  const code = String(Math.floor(10000 + Math.random() * 90000));
  ticketCodeNumber.textContent = code;
};

const handleFile = file => {
  if (!file) return;
  if (file.size > 500000) {
    uploadInfo.style.display = 'none';
    uploadError.style.display = 'flex';
    uploadContainer.classList.add('error');
    return;
  } else {
    uploadInfo.style.display = 'flex';
    uploadError.style.display = 'none';
    uploadContainer.classList.remove('error'); 
  }
  const reader = new FileReader();
  console.log(reader)


  reader.onload = () => {
    const result = reader.result;

     // Set the uploaded image
    if (uploadIcon) {
      uploadIcon.src = result;
      uploadIcon.classList.remove('upload__icon');
      uploadIcon.classList.add('avatar__picture');
    }
    uploadMessage.classList.add('hidden');
    uploadActions.style.display = 'flex';

    // Store the file URL in dataset for later use
    avatarPic.dataset.url = result;
    console.log(avatarPic.dataset.url);
  };

  reader.readAsDataURL(file);
};

if (avatarPic) {
  avatarPic.addEventListener('change', e => {
    e.preventDefault();
    const file = avatarPic.files[0];
    handleFile(file);
  });
}

removeImage.addEventListener('click', e => {
  e.preventDefault();
  avatarPic.value = '';
  if (avatarPic && avatarPic.dataset) {
    delete avatarPic.dataset.url;
  }
  uploadIcon.src = './assets/images/icon-upload.svg';
  uploadIcon.classList.remove('avatar__picture');
  uploadIcon.classList.add('upload__icon');
  uploadActions.style.display = 'none';
  uploadMessage.style.display = 'flex';
});

changeImage.addEventListener('click', e => {
  e.preventDefault();
  avatarPic.click();
});

// Generate ticket

generateButton.addEventListener('click', e => {
  e.preventDefault();
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const githubUsernameValue = githubUsername.value;
  const avatarPicValue = avatarPic.dataset.url;

  let isValid = true;

  if (!avatarPicValue) {
    uploadInfo.classList.add('error-info');
    uploadContainer.classList.add('error');
    isValid = false;
  }

  if (fullNameValue === '') {
    document.querySelector('.full-name__error').style = 'display: flex';
    fullNameInput.classList.add('error-input');
    isValid = false;
  }

  if (emailValue === '') {
    document.querySelector('.email__error').style = 'display: flex';
    emailInput.classList.add('error-input');
    isValid = false;
  }

  if (githubUsernameValue === '') {
    document.querySelector('.github-username__error').style = 'display: flex';
    githubUsernameInput.classList.add('error-input');
    isValid = false;
  }

  if (isValid) {
    ticketFullName.textContent = fullNameValue;
    ticketAvatarName.textContent = fullNameValue;
    ticketEmail.textContent = emailValue;
    ticketAvatarImage.src = avatarPic.dataset.url || './assets/images/image-avatar.jpg';
    ticketAvatarGithubUsername.textContent = githubUsernameValue;

    generateCode();
    document.querySelector('.header').style = 'display: none';
    document.querySelector('.ticket-form').style = 'display: none';
    document.querySelector('.ticket').style = 'display: flex';
  }
});

// Add event listeners to hide error messages when input fields are filled
avatarPic.addEventListener('input', () => {
  uploadInfo.classList.remove('error-info');
  uploadContainer.classList.remove('error');
});

fullName.addEventListener('input', () => {
  document.querySelector('.full-name__error').style.display = fullName.value
    ? 'none'
    : 'flex';
  fullNameInput.classList.remove('error-input');
});

email.addEventListener('input', () => {
  document.querySelector('.email__error').style.display = email.value
    ? 'none'
    : 'flex';
  emailInput.classList.remove('error-input');
});

githubUsername.addEventListener('input', () => {
  document.querySelector('.github-username__error').style.display =
    githubUsername.value ? 'none' : 'flex';
  githubUsernameInput.classList.remove('error-input');
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
  uploadContainer.classList.remove('error');
  uploadInfo.classList.remove('error-info');
  uploadError.style.display = 'none';
  if (e.dataTransfer.files.length > 0) {
    handleFile(e.dataTransfer.files[0]);
  }
});
