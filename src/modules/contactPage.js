

export const contactPage = (content) => {
  const title = document.createElement('h2');
  title.classList.add('contactUsTitle');
  title.innerHTML = 'Contact Us';

  const form = document.createElement('form');
  form.action = '#';
  form.method = 'gets';
  form.id = 'form';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'firstName';
  nameInput.placeholder = 'Your name*';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'Your email*';
  emailInput.required = true;

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.id = 'phone-number';
  phoneInput.name = 'phone-number';
  phoneInput.placeholder = 'Your phone'

  const messageInput = document.createElement('textarea');
  messageInput.classList.add('textInput');
  messageInput.rows = '10';
  messageInput.cols = '89';
  messageInput.placeholder = 'Message*';
  messageInput.required = true;

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Send Message';
  submitBtn.classList.add('button-27');
  submitBtn.type = 'submit';
  submitBtn.value = 'submit';

  form.append(nameInput, emailInput, phoneInput, messageInput, submitBtn);
  form.classList.add('fadeinUp');


  content.append(title, form);
}

