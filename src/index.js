import nav from './nav.js';
import menu from './menu.js';
import home from './home.js';
import comment from './comment.js';
import './style.css';

console.log("Hello World")
nav();
home();

function clearPage(){
  document.querySelectorAll('.nav-item').forEach(navItem => 
    navItem.classList.remove('nav-item-selected')
    )
}

document.querySelectorAll(".nav-item").forEach(
  navItem =>
    navItem.addEventListener("click", (e) => {
        clearPage();
        document.querySelector('#content').removeChild(document.querySelector('.nav-item-container'));
        switch(e.target.id){
            case 'home':
                home();
            break;
            case 'menu':
                menu();
            break;
            case 'comment':
              comment();
            break;
        }
      })
);