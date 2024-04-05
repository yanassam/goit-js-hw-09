const form = document.querySelector('.js-feedback-form');
const submitBtn = document.querySelector('button');
const dataLocalSt = localStorage.getItem('feedback-form-state');

form.addEventListener('input', addToStorage);
form.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', dataVerification);

function addToStorage(event) {
  // event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  const userData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  } catch (error) {
    console.log(error.message);
  }
}

function dataVerification() {
  if (!dataLocalSt) return;
  const { email, message } = form.elements;
  try {
    message.value = JSON.parse(dataLocalSt).message;

    email.value = JSON.parse(dataLocalSt).email;
  } catch (error) {
    console.log(error.message);
  }
}

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim())
    return alert('Enter user data');

  // console.log('User email:', email.value);
  // console.log('User message:', message.value);
  console.log({ email: email.value.trim(), message: message.value.trim() });
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
