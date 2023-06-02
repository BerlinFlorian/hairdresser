const sliders = document.querySelectorAll('.slider');
const foregroundImgs = document.querySelectorAll('.foreground-img');
const sliderButtons = document.querySelectorAll('.slider-button');

sliders.forEach((slider, index) => {
  slider.addEventListener('input', (e) => {
    const sliderPos = e.target.value;
    foregroundImgs[index].style.width = `${sliderPos}%`;
    sliderButtons[index].style.left = `calc(${sliderPos}% - 18px)`;
  });
});

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (email === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  if (message === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }

  // Submit the form
  form.submit();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}