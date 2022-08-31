
import {newHomePage} from './modules/newHomePage.js';
import {menuPage} from './modules/menuPage.js';
import {aboutPage} from './modules/aboutPage.js';
import {reservePage} from './modules/reservePage.js';
import {contactPage} from './modules/contactPage.js';
import logo from './assets/logo.png';
import videoPoster from './assets/ramen_poster.png';

export const homePage = () => {
  //Creates elements for the homescreen for the user

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
  li_logo_img.src = './bfc2e3dfc24b415ff8d7.png';
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
  video.poster = "./aaaba80c43a09c4518c3.png";
  source.setAttribute('src', './assets/ramen.mp4');
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

  //Listens for actions on nav bar elements
  listen_for_event_listeners();

  function listen_for_event_listeners(){
    li_about.addEventListener('click', function(){
      refreshPage(content);
      aboutPage(content);
    });
    li_logo.addEventListener('click', function(){
      refreshPage(content);
      newHomePage(content);
      refreshBtnEventListener(menuButton, content);
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

function refreshBtnEventListener(btn, content){
  btn.addEventListener('click', function(){
    refreshPage(content);
    menuPage(content);
  });
}
const refreshPage = (content) => {
  //Removes the DOM contents of the page below the nav bar
  while (content.firstChild) {
    content.removeChild(content.lastChild);
    //content.removeChild(content.lastChild);
  }
}