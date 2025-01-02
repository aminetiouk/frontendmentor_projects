document.querySelector('.calculate button').addEventListener('click', () => {
  const day = document.getElementById('day').value.trim();
  const month = document.getElementById('month').value.trim();
  const year = document.getElementById('year').value.trim();

  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Please enter valid numeric values for day, month, and year.');
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
    alert('Please enter a valid date.');
    return;
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
