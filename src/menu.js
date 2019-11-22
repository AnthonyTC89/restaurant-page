export default function menu() {
  const products = ['Hawaiana', 'Argentina', 'Alemana', 'Española'];
  const productsUrls = ['images/hawaiana.jpg', 'images/argentina.jpg', 'images/alemana.jpg', 'images/espaniola.jpg'];

  const container = document.querySelector('#content');

  const menuSelected = document.querySelector('#menu');
  menuSelected.classList.add('nav-item-selected');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('nav-item-container');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Our pizzas';

  menuContainer.appendChild(h1);

  for (let i = 0; i < products.length; i += 1) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productImage = document.createElement('div');
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
