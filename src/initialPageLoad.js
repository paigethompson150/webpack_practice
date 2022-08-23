
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
  li_reserv.innerHTML = 'Reservations';
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
  content.appendChild(container);

  listen_for_event_listeners();

  function listen_for_event_listeners(){
    li_about.addEventListener('click', function(){
      refreshPage(content);
      aboutPage(content);
    });
    li_logo.addEventListener('click', function(){
      refreshPage(content);
      refreshNav(navDOM);
      homePage();
    });
    li_menu.addEventListener('click', function(){
      refreshPage(content);
      menuPage(content);
    });
  }

}

const refreshPage = (content) => {
  //Removes the DOM contents of the page below the nav bar
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

/*const refreshNav = (nav) => {
  while (nav.firstChild){
    nav.removeChild(content.lastChild);
  }
}*/


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

  content.appendChild(about_container);
}




