const binaryInput = document.querySelector('.js-binary-input');
const decimalInput = document.querySelector('.js-decimal-input');

binaryInput.maxLength = 21;

const convertBinaryToDecimal = function () {
  const num = +binaryInput.value;

  decimalInput.value = parseInt(num, 2);

  if (num === 0) decimalInput.value = '';
};

const preventInvalidInput = function (e) {
  if (e.keyCode !== 48 && e.keyCode !== 49 && e.keyCode !== 8) {
    e.preventDefault();
    binaryInput.classList.add('error');
  }

  setTimeout(() => binaryInput.classList.remove('error'), 250);
};

binaryInput.addEventListener('input', convertBinaryToDecimal);
binaryInput.addEventListener('keydown', preventInvalidInput);
binaryInput.addEventListener('focus', () => {
  decimalInput.classList.remove('disable');
  binaryInput.classList.remove('disable');

  decimalInput.classList.add('active');
  binaryInput.classList.add('active');
});
binaryInput.addEventListener('focusout', () => {
  decimalInput.classList.remove('active');
  binaryInput.classList.remove('active');

  decimalInput.classList.add('disable');
  binaryInput.classList.add('disable');
});
