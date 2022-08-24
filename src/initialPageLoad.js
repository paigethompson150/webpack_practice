
export const homePage = () => {
  //Function that intiially loads the screen for the user.

  //start of nav bar
  //creating elements for nav
  let navDOM = document.getElementById('nav');
  let content = document.getElementById('content');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li_about = document.createElement('li');
  const li_menu = document.createElement('li');
  const li_logo = document.createElement('li');
  const li_logo_img = document.createElement('img');
  const li_reserv = document.createElement('li');
  const li_contact = document.createElement('li');

  //inserting content into each element
  nav.id = 'navigation';
  li_about.innerHTML = 'About';
  li_menu.innerHTML = 'Menu';
  li_logo_img.src = '../src/assets/logo.png';
  li_logo_img.classList.add('nav_logo');
  li_reserv.innerHTML = 'Solo-Dining';
  li_contact.innerHTML = 'Contact Us';

  //appending to parent nodes
  li_logo.appendChild(li_logo_img);
  ul.append(li_about, li_menu, li_logo, li_reserv, li_contact);
  nav.appendChild(ul);
  navDOM.appendChild(nav);

  //video display
  const container = document.createElement('div');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'background-video';
  video.poster = '../src/assets/ramen_poster.png';
  source.setAttribute('src', '../src/assets/ramen.mp4');
  source.type = 'video/mp4';
  video.appendChild(source);
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.muted = true;

  const text_container = document.createElement('div');
  text_container.classList.add('intro_text');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'PAGU RAMEN';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-82-pushable');
  
  const span1 = document.createElement('span');
  span1.classList.add('button-82-shadow');
  const span2 = document.createElement('span');
  span2.classList.add('button-82-edge');
  const span3 = document.createElement('span');
  span3.classList.add('button-82-front');
  span3.classList.add('text');
  span3.innerHTML = 'Discover Menu';

  menuButton.append(span1, span2, span3);
  text_container.append(h2, menuButton);

  container.append(video, text_container);
  container.classList.add('fade-in');
  content.appendChild(container);

  listen_for_event_listeners();

  function listen_for_event_listeners(){
    li_about.addEventListener('click', function(){
      refreshPage(content);
      aboutPage(content);
    });
    li_logo.addEventListener('click', function(){
      refreshPage(content);
      newHomePage(content);
    });
    menuButton.addEventListener('click', function(){
      refreshPage(content);
      menuPage(content);
    });
    li_menu.addEventListener('click', function(){
      refreshPage(content);
      menuPage(content);
    });
    li_reserv.addEventListener('click', function(){
      refreshPage(content);
      reservePage(content);
    });
    li_contact.addEventListener('click', function(){
      refreshPage(content);
      contactPage(content);
    });
  }

}

const refreshPage = (content) => {
  //Removes the DOM contents of the page below the nav bar
  while (content.firstChild) {
    content.removeChild(content.lastChild);
    //content.removeChild(content.lastChild);
  }
}

const newHomePage = (content) => {
  const container = document.createElement('div');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'background-video';
  video.poster = '../src/assets/ramen_poster.png';
  source.setAttribute('src', '../src/assets/ramen.mp4');
  source.type = 'video/mp4';
  video.appendChild(source);
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.muted = true;

  const text_container = document.createElement('div');
  text_container.classList.add('intro_text');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'PAGU RAMEN';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-82-pushable');
  
  const span1 = document.createElement('span');
  span1.classList.add('button-82-shadow');
  const span2 = document.createElement('span');
  span2.classList.add('button-82-edge');
  const span3 = document.createElement('span');
  span3.classList.add('button-82-front');
  span3.classList.add('text');
  span3.innerHTML = 'Discover Menu';

  menuButton.append(span1, span2, span3);
  text_container.append(h2, menuButton);

  container.append(video, text_container);
  container.classList.add('fade-in');
  content.appendChild(container);

  menuButton.addEventListener('click', function(){
    refreshPage(content);
    menuPage(content);
  });
}

const aboutPage = (content) => {
  //Adds the About Page content to the DOM

  const about_container = document.createElement('div');
  about_container.classList.add('about_container');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'about-video';
  video.poster = '../src/assets/aboutVidPoster.png';
  source.setAttribute('src', '../src/assets/aboutVid.mp4');
  source.type = 'video/mp4';
  video.appendChild(source);
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.muted = true;

  const about_text = document.createElement('div');
  about_text.classList.add('about_text');
  const h3 = document.createElement('h3');
  h3.innerHTML = 'About Us';
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Pagu Ramen';

  const p = document.createElement('p');
  p.innerHTML = 'Authentic Japanese style ramen handcrafted daily. You know the essentials - flour, water, chashu pork. These are the things that you find yourself running out the door for each week (or each day) to purchase.';

  const button = document.createElement('button');
  button.classList.add('button-27');
  button.innerHTML = 'Read More';

  about_text.append(h3, h2, p, button);
  about_container.append(video, about_text);
  about_container.classList.add('fadeinUp');

  content.appendChild(about_container);
}


const menuPage = (content) => {
  //Displays the menu items on the screen
  const misoItem = document.createElement('div');
  const misoText = document.createElement('div');
  const misoName = document.createElement('h2');
  misoName.innerHTML = 'The Miso Happy To See You';
  const misoDescrip = document.createElement('p');
  misoDescrip.innerHTML = 'This spicy miso soup features an aromatic broth swith a mixture of soy sauce, miso paste, and hot chili oil. Guaranteed to comfort you during any weather.';
  const misoPic = document.createElement('img');
  misoPic.alt = 'miso ramen credits to Crafty Ramen';
  misoPic.src = '../src/assets/miso.png';
  misoPic.type = 'img';

  misoText.append(misoName, misoDescrip);
  misoText.classList.add('menuText');
  misoItem.classList.add('menuItem');
  misoItem.append(misoText, misoPic);
  misoItem.classList.add('fadeinUp');

  const shioItem = document.createElement('div');
  const shioText = document.createElement('div');
  const shioPic = document.createElement('img');
  shioPic.alt = 'shio ramen credits to Crafty Ramen';
  shioPic.src = '../src/assets/shio.png';
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
  shoyuPic.src = '../src/assets/shoyu.png';
  shoyuPic.type = 'img';

  shoyuText.append(shoyuName, shoyuDescrip);
  shoyuText.classList.add('menuText');
  shoyuItem.classList.add('menuItem');
  shoyuItem.append(shoyuText,shoyuPic);
  shoyuItem.classList.add('fadeinUp');

  content.append(misoItem, shioItem, shoyuItem);

}

const reservePage = (content) => {
  const soloBoothPic = document.createElement('img');
  soloBoothPic.classList.add('boothPic');
  soloBoothPic.classList.add('fadeinUp');
  soloBoothPic.alt = 'solo booth dining w/ ramen, credits to Eater NY';
  soloBoothPic.src = '../src/assets/soloBooth.jpg';
  soloBoothPic.type = 'img';

  const headerText = document.createElement('h2');
  headerText.innerHTML = 'Welcome to our solo-dining experience.';
  headerText.classList.add('fadeinUp');

  const container = document.createElement('div');
  container.classList.add('reserveContainer');
  const diningDescription = document.createElement('p');
  diningDescription.innerHTML = 'Fulfill your introverted needs with our contactless ordering and payment system. Simply order using a pen and paper, and fill out a sheet for your server for additional orders and refills.';

  const reservationDescription = document.createElement('p');
  reservationDescription.innerHTML = 'Since we would like to keep an intimate dining experience for our customers, we do not take reservations.';

  container.append(headerText, diningDescription, reservationDescription);

  content.append(soloBoothPic, container);
}

const contactPage = (content) => {
  const title = document.createElement('h2');
  title.classList.add('contactUsTitle');
  title.innerHTML = 'Contact Us';

  const form = document.createElement('form');
  form.action = '#';
  form.method = 'gets';
  form.id = 'form';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'firstName';
  nameInput.placeholder = 'Your name*';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'Your email*';
  emailInput.required = true;

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.id = 'phone-number';
  phoneInput.name = 'phone-number';
  phoneInput.placeholder = 'Your phone'

  const messageInput = document.createElement('textarea');
  messageInput.classList.add('textInput');
  messageInput.rows = '10';
  messageInput.cols = '89';
  messageInput.placeholder = 'Message*';
  messageInput.required = true;

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Send Message';
  submitBtn.classList.add('button-27');
  submitBtn.type = 'submit';
  submitBtn.value = 'submit';

  form.append(nameInput, emailInput, phoneInput, messageInput, submitBtn);


  content.append(title, form);
}

