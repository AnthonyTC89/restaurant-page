export default function initializeContent() {
  const container = document.querySelector('#content');

  const arrowDown = document.createElement('p');
  arrowDown.classList.add('arrowDown');

  const nav = document.createElement('nav');    
  const ul = document.createElement('ul');
  ul.classList = 'navbar';

  const navItems = {home: 'Home', menu: 'Menu', contact: 'Contact'};

  Object.keys(navItems).forEach((key) => { 
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.id = key;
    li.innerHTML = navItems[key];
    ul.appendChild(li);
  })

  // const li1 = document.createElement('li');
  // const li2 = document.createElement('li');
  // const li3 = document.createElement('li');
  // li1.classList.add('menu-item');
  // li2.classList.add('menu-item');
  // li3.classList.add('menu-item');
  // li1.id = 'about';
  // li2.id = 'menu';
  // li3.id = 'location';
  // li1.innerHTML = 'About';
  // li2.innerHTML = 'Menu';
  // li3.innerHTML = 'Map';
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  // ul.appendChild(li3);


  nav.appendChild(ul);

  container.appendChild(nav);
}

