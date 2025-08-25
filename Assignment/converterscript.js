document.getElementById('converterForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page reload

  const kg = parseFloat(document.getElementById('kgInput').value);
  const result = document.getElementById('result');

  if (!isNaN(kg)) {
    const lb = kg * 2.20462;
    result.textContent = `${kg} kg = ${lb.toFixed(2)} lbs`;
  } else {
    result.textContent = 'Please enter a valid number.';
  }
});