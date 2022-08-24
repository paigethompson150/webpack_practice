import misoImg from '../assets/miso.jpg';


export const menuPage = (content) => {
  //Displays the menu items on the screen
  const misoItem = document.createElement('div');
  const misoText = document.createElement('div');
  const misoName = document.createElement('h2');
  misoName.innerHTML = 'The Miso Happy To See You';
  const misoDescrip = document.createElement('p');
  misoDescrip.innerHTML = 'This spicy miso soup features an aromatic broth swith a mixture of soy sauce, miso paste, and hot chili oil. Guaranteed to comfort you during any weather.';
  const misoPic = document.createElement('img');
  misoPic.alt = 'miso ramen credits to Crafty Ramen';
  misoPic.src = misoImg;

  misoText.append(misoName, misoDescrip);
  misoText.classList.add('menuText');
  misoItem.classList.add('menuItem');
  misoItem.append(misoText, misoPic);
  misoItem.classList.add('fadeinUp');

  const shioItem = document.createElement('div');
  const shioText = document.createElement('div');
  const shioPic = document.createElement('img');
  shioPic.alt = 'shio ramen credits to Crafty Ramen';
  shioPic.src = 'shio.png';
  const shioName = document.createElement('h2');
  shioName.innerHTML = "A Knight and his Shio'ld"
  const shioDescrip = document.createElement('p');
  shioDescrip.innerHTML = 'This vegetable-based, salty broth will soothe and protect your tastebuds like a valiant knight. Topped with honey-glazed salmon, chives and chili oil.'

  shioText.append(shioName, shioDescrip);
  shioText.classList.add('menuText');
  shioItem.classList.add('menuItem');
  shioItem.append(shioPic, shioText);
  shioItem.classList.add('fadeinUp');

  const shoyuItem = document.createElement('div');
  const shoyuText = document.createElement('div');
  const shoyuName = document.createElement('h2');
  shoyuName.innerHTML = "I'll Shoyu Who's Boss";
  const shoyuDescrip = document.createElement('p');
  shoyuDescrip.innerHTML = 'Soy-sauce based broth that will make you feel like the absolute boss. Presented with adaged chashu, bamboo shoots, and chili oil.'
  const shoyuPic = document.createElement('img');
  shoyuPic.alt = 'shoyu ramen credits to Crafty Ramen';
  shoyuPic.src = 'assets/shoyu.png';
  shoyuPic.type = 'img';

  shoyuText.append(shoyuName, shoyuDescrip);
  shoyuText.classList.add('menuText');
  shoyuItem.classList.add('menuItem');
  shoyuItem.append(shoyuText,shoyuPic);
  shoyuItem.classList.add('fadeinUp');

  content.append(misoItem, shioItem, shoyuItem);

}
