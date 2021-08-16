const binaryInput = document.querySelector('.js-binary-input');
const decimalInput = document.querySelector('.js-decimal-input');

const setMaxMin = (value) => (value.maxLength = 21);

[decimalInput, binaryInput].forEach((el) => setMaxMin(el));

binaryInput.addEventListener('input', () => {
  const num = +binaryInput.value;

  decimalInput.value = parseInt(num, 2);

  if (num === 0) decimalInput.value = '';
});

binaryInput.addEventListener('focus', () =>
  decimalInput.classList.add('active')
);

binaryInput.addEventListener('focusout', () =>
  decimalInput.classList.remove('active')
);
