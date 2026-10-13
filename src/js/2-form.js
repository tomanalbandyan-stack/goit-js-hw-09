const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData !== null) {
  Object.assign(formData, savedData);

  form.email.value = savedData.email;
  form.message.value = savedData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
});
