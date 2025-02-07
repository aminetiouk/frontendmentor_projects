const avatarPic = document.querySelector('.upload__input');
const uploadIcon = document.querySelector('.upload__icon');
const uploadMessage = document.querySelector('.upload__message');
const uploadInfo = document.querySelector('.upload__info');
const uploadErrorSize = document.querySelector('.upload__error-size');
const uploadErrorType = document.querySelector('.upload__error-type');
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
const ticketContainer = document.querySelector('.ticket__container');
const ticketEvent = document.querySelector('.ticket__event');
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

// Reset form
const resetForm = () => {
  fullName.value = '';
  email.value = '';
  githubUsername.value = '';
  avatarPic.value = '';
  uploadIcon.src = './assets/images/icon-upload.svg';
  uploadIcon.classList.remove('avatar__picture');
  uploadIcon.classList.add('upload__icon');
  uploadActions.style.display = 'none';
  uploadMessage.style.display = 'flex';
  uploadInfo.classList.remove('error-info');
  uploadContainer.classList.remove('error');
  document.querySelector('.full-name__error').style = 'display: none';
  document.querySelector('.email__error').style = 'display: none';
  document.querySelector('.github-username__error').style = 'display: none';
  fullNameInput.classList.remove('error-input');
  emailInput.classList.remove('error-input');
  githubUsernameInput.classList.remove('error-input');
  ticketEvent.classList.remove('color');
  ticketAvatarName.classList.remove('color');
};

// Validate email
const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Validate github username
const validateGithubUsername = username => {
  return username.startsWith('@');
};

// Handle file upload
const handleFile = file => {
  if (!file) return;
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  if (!allowedTypes.includes(file.type)) {
    uploadInfo.style.display = 'none';
    uploadErrorType.style.display = 'flex';
    uploadContainer.classList.add('error');
    return;
  } else {
    uploadInfo.style.display = 'flex';
    uploadErrorType.style.display = 'none';
    uploadContainer.classList.remove('error');
  }

  if (file.size > 500000) {
    uploadInfo.style.display = 'none';
    uploadErrorSize.style.display = 'flex';
    uploadContainer.classList.add('error');
    return;
  } else {
    uploadInfo.style.display = 'flex';
    uploadErrorSize.style.display = 'none';
    uploadContainer.classList.remove('error');
  }
  const reader = new FileReader();

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

const generateTicket = e => {
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

  if (emailValue === '' || !validateEmail(emailValue)) {
    document.querySelector('.email__error').style = 'display: flex';
    emailInput.classList.add('error-input');
    isValid = false;
  }

  if (
    githubUsernameValue === '' ||
    !validateGithubUsername(githubUsernameValue)
  ) {
    document.querySelector('.github-username__error').style = 'display: flex';
    githubUsernameInput.classList.add('error-input');
    isValid = false;
  }

  if (isValid) {
    const capitalizeFirstLetter = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ticketFullName.textContent = capitalizeFirstLetter(fullNameValue);
    ticketAvatarName.textContent = capitalizeFirstLetter(fullNameValue);
    ticketEmail.textContent = emailValue;
    ticketAvatarImage.src =
      avatarPic.dataset.url || './assets/images/image-avatar.jpg';
    ticketAvatarGithubUsername.textContent = githubUsernameValue;

    generateCode();
    document.querySelector('.header').style = 'display: none';
    document.querySelector('.ticket-form').style = 'display: none';
    document.querySelector('.ticket').style = 'display: flex';
  }
};

generateButton.addEventListener('click', generateTicket);
document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    generateTicket(e);
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
  uploadErrorSize.style.display = 'none';
  if (e.dataTransfer.files.length > 0) {
    handleFile(e.dataTransfer.files[0]);
  }
});

// Reset form
document.querySelector('.reset-ticket').addEventListener('click', e => {
  e.preventDefault();
  resetForm();
  document.querySelector('.header').style = 'display: flex';
  document.querySelector('.ticket-form').style = 'display: flex';
  document.querySelector('.ticket').style = 'display: none';
});

// Download ticket as PDF
const generatePDF = () => {
  const { jsPDF } = window.jspdf;

  if (!ticketContainer) {
    alert('No ticket found!');
    return;
  }
  ticketEvent.classList.add('color');
  ticketAvatarName.classList.add('color');

  html2canvas(ticketContainer, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 208;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);
    pdf.save('ticket.pdf');
  });
};

document.querySelector('.download__ticket-pdf').addEventListener('click', e => {
  e.preventDefault();
  generatePDF();
});

// Download ticket as PNG
const downloadPNG = () => {
  if (!ticketContainer) {
    alert('No ticket found!');
    return;
  }

  html2canvas(ticketContainer, {
    backgroundColor: null,
    scale: 2
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'ticket.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

document
  .querySelector('.download__ticket-png')
  .addEventListener('click', downloadPNG);
