export default function initializeContent() {
  const container = document.querySelector('#content');

  const arrowDown = document.createElement('p');
  arrowDown.classList.add('arrowDown');

  const nav = document.createElement('nav');    
  const ul = document.createElement('ul');
  ul.classList = 'navbar';

  const navItems = {home: 'Home', menu: 'Menu', comment: 'Comment'};

  Object.keys(navItems).forEach((key) => { 
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.id = key;
    li.innerHTML = navItems[key];
    ul.appendChild(li);
  })

  nav.appendChild(ul);

  container.appendChild(nav);
}

