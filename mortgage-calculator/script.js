document.getElementById('calculate-btn').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('mortgage-amount').value);
  const term = parseFloat(document.getElementById('mortgage-term').value);
  const rate = parseFloat(document.getElementById('interest-rate').value);
  const type = document.querySelector('input[name="mortgage-type"]:checked').value;
});