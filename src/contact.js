export default function contact(){
  //const workingHours = ['Monday - Sunday: 12:30m - 9pm'];
  const container = document.querySelector("#content");

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('nav-item-container');    
  
  const contactSelected = document.querySelector('#contact');
  contactSelected.classList.add('nav-item-selected'); 
  
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact';

  contactContainer.appendChild(h1);

  // const locationMap = document.createElement('div');
  // locationMap.id = 'map';
  
  // 
  // locationContainer.appendChild(locationMap);

  // const hoursHeader = document.createElement('h3');
  // hoursHeader.innerHTML = 'Hours';
  // locationContainer.appendChild(hoursHeader);

  // for (let i = 0; i < workingHours.length; i++) {
  //   let listItem = document.createElement('p');
  //   listItem.innerHTML = workingHours[i];
  //   locationContainer.appendChild(listItem);
  // }

  container.appendChild(contactContainer);
  
  // let wassabiCoordinates = {lat: 35.73, lng: -78.80};
  // let map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: wassabiCoordinates});
  // let marker = new google.maps.Marker({position: wassabiCoordinates, map:map})
}