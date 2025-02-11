const validDay = document.querySelector('.valid__day');
const validMonth = document.querySelector('.valid__month');
const validYear = document.querySelector('.valid__year');
const validDate = document.querySelector('.valid__date');
const inputFields = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

document.querySelector('.calculate button').addEventListener('click', () => {
  const day = document.getElementById('day').value.trim();
  const month = document.getElementById('month').value.trim();
  const year = document.getElementById('year').value.trim();

  if (!day || isNaN(day)) {
    document.querySelector('.required__field-day').style.display = 'flex';
    document.getElementById('day').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="day"]').style.color = 'rgb(217, 89, 89)';
  }
  if (!month || isNaN(month)) {
    document.querySelector('.required__field-month').style.display = 'flex';
    document.getElementById('month').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="month"]').style.color =
      'rgb(217, 89, 89)';
  }
  if (!year || isNaN(year)) {
    document.querySelector('.required__field-year').style.display = 'flex';
    document.getElementById('year').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="year"]').style.color =
      'rgb(217, 89, 89)';
    return;
  }

  if (day > 31) {
    validDay.style.display = 'block';
    document.getElementById('day').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="day"]').style.color = 'rgb(217, 89, 89)';
  }

  if (month > 12) {
    validMonth.style.display = 'block';
    document.getElementById('month').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="month"]').style.color = 'rgb(217, 89, 89)';
  }

  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    validYear.style.display = 'block';
    document.getElementById('year').style.borderColor = 'rgb(217, 89, 89)';
    document.querySelector('label[for="year"]').style.color = 'rgb(217, 89, 89)';
    return;
  }

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === parseInt(day) &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === parseInt(year)
    );
  };

  if (!isValidDate(day, month, year)) {
    validDate.style.display = 'block';
    inputFields.forEach(input => {
      input.style.borderColor = 'rgb(217, 89, 89)';
    });
    labels.forEach(label => {
      label.style.color = 'rgb(217, 89, 89)';
    });
  }

  const calculateAgeDetails = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const ageDetails = calculateAgeDetails(day, month, year);
  document.querySelector('.years-value').textContent = ageDetails.years;
  document.querySelector('.months-value').textContent = ageDetails.months;
  document.querySelector('.days-value').textContent = ageDetails.days;
});

document.getElementById('day').addEventListener('input', () => {
  validDate.style.display = 'none';
  validDay.style.display = 'none';
  document.querySelector('.required__field-day').style.display = 'none';
  document.getElementById('day').style.borderColor = 'rgb(0, 0, 0)';
  document.querySelector('label[for="day"]').style.color = 'rgb(0, 0, 0)';
});
document.getElementById('month').addEventListener('input', () => {
  validMonth.style.display = 'none';
  document.querySelector('.required__field-month').style.display = 'none';
  document.getElementById('month').style.borderColor = 'rgb(0, 0, 0)';
  document.querySelector('label[for="month"]').style.color = 'rgb(0, 0, 0)';
});
document.getElementById('year').addEventListener('input', () => {
  validYear.style.display = 'none';
  document.querySelector('.required__field-year').style.display = 'none';
  document.getElementById('year').style.borderColor = 'rgb(0, 0, 0)';
  document.querySelector('label[for="year"]').style.color = 'rgb(0, 0, 0)';
});
