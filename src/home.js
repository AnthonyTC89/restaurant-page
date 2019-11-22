export default function about() {

  const container = document.querySelector("#content");

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('nav-item-container');

  const homeSelected = document.querySelector('#home')
  homeSelected.classList.add('nav-item-selected'); 
  
  const h1 = document.createElement('h1');
  h1.innerHTML = 'The happiness smells like a pizza';
  
  homeContainer.appendChild(h1);
  
  const img = document.createElement('img');
  img.src = 'images/logoPresto.png';
  img.classList.add('home-img');
  homeContainer.appendChild(img);
  container.appendChild(homeContainer);
}