import nav from './nav';
import menu from './menu';
import home from './home';
import comment from './comment';
import './style.css';

nav();
home();

function clearPage() {
  document.querySelectorAll('.nav-item').forEach((navItem) => {
    navItem.classList.remove('nav-item-selected');
  });
}

document.querySelectorAll('.nav-item').forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    clearPage();
    document.querySelector('#content').removeChild(document.querySelector('.nav-item-container'));
    switch (e.target.id) {
      case 'home':
        home();
        break;
      case 'menu':
        menu();
        break;
      case 'comment':
        comment();
        break;
      default: break;
    }
  });
});
