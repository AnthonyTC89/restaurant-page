export default function menu(){

  const products = ['Hawaiana', 'Argentina', 'Alemana', 'Española'];
  const productsUrls = ['images/hawaiana.jpg', 'images/argentina.jpg', 'images/alemana.jpg', 'images/espaniola.jpg'];

  const container = document.querySelector("#content");

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Our pizzas';

  menuContainer.appendChild(h1);

  for (let i = 0; i < products.length; i++) {

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productImage = document.createElement('div')
    productImage.classList.add('product-img');
    productImage.style.backgroundImage = `url('${productsUrls[i]}')`;
    
    const productName = document.createElement('h2');
    productName.classList.add('product-name');
    productName.innerHTML = products[i];

    productItem.appendChild(productName);
    productItem.appendChild(productImage);

    menuContainer.appendChild(productItem);
  }
  container.appendChild(menuContainer);
}