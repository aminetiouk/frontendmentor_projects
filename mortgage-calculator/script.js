document.getElementById('calculate-btn').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('mortgage-amount').value);
  const term = parseFloat(document.getElementById('mortgage-term').value);
  const rate = parseFloat(document.getElementById('interest-rate').value);
  const type = document.querySelector('input[name="mortgage-type"]:checked');

  /** input validation */
  if (
    isNaN(amount) ||
    amount <= 0 ||
    isNaN(term) ||
    term <= 0 ||
    isNaN(rate) ||
    rate <= 0 ||
    !type
  ) {
    alert(
      'Please enter valid inputs for all fields and select a mortgage type.'
    );
    return;
  }

  let monthlyRepayment = 0;
  let totalRepayment = 0;

  if (type.value === 'repayment') {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    monthlyRepayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    totalRepayment = monthlyRepayment * numberOfPayments;
  } else if (type.value === 'interest-only') {
    monthlyRepayment = (amount * (rate / 100)) / 12;
    totalRepayment = monthlyRepayment * term * 12;
  }

  document.getElementById('monthly-repayment').textContent =
    `£${monthlyRepayment.toFixed(2)}`;
  document.getElementById('total-repayment').textContent =
    `£${totalRepayment.toFixed(2)}`;
  document.querySelector('.result-box').style.display = 'block';
  document.querySelector('.empty').style.display = 'none';
});

document.getElementById('clear-all').addEventListener('click', () => {
  document.getElementById('mortgage-amount').value = '';
  document.getElementById('mortgage-term').value = '';
  document.getElementById('interest-rate').value = '';
  document.querySelector('input[name="mortgage-type"]:checked').checked = false;
  document.getElementById('monthly-repayment').textContent = '£0.00';
  document.getElementById('total-repayment').textContent = '£0.00';
  document.querySelector('.empty').style.display = 'flex';
  document.querySelector('.result-box').style.display = 'none';
});