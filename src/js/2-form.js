const formState = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  formState[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData !== null) {
  Object.assign(formState, savedData);

  form.email.value = formState.email;
  form.message.value = formState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formState.email.trim() === '' || formState.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formState);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  formState.email = '';
  formState.message = '';
});
