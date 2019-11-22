export default function contact() {
  const container = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('nav-item-container');

  const contactSelected = document.querySelector('#comment');
  contactSelected.classList.add('nav-item-selected');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Comment Us';

  contactContainer.appendChild(h1);

  const form = document.createElement('form');

  const labelEmail = document.createElement('label');
  labelEmail.innerHTML = 'Email: ';

  const labelTextArea = document.createElement('label');
  labelTextArea.innerHTML = 'Comment: ';

  const inputEmail = document.createElement('input');

  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.placeholder = 'e.g. foo@bar.com';

  const inputTextArea = document.createElement('textarea');
  inputTextArea.name = 'comment';
  inputTextArea.cols = 30;
  inputTextArea.rows = 3;

  const inputSubmit = document.createElement('input');
  inputSubmit.name = 'submit';
  inputSubmit.type = 'submit';
  inputSubmit.value = 'Submit';
  inputSubmit.addEventListener('click', () => {
    inputEmail.value = '';
    inputTextArea.value = '';
    // eslint-disable-next-line no-restricted-globals
    location.href = '#';
    // eslint-disable-next-line no-alert
    window.alert('Thank you for your comment!');
  });

  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(document.createElement('br'));
  form.appendChild(labelTextArea);
  form.appendChild(inputTextArea);
  form.appendChild(document.createElement('br'));
  form.appendChild(inputSubmit);


  contactContainer.appendChild(form);
  container.appendChild(contactContainer);
}
