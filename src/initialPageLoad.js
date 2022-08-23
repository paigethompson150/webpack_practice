const initial_load = () => {
  //Function that intiially loads the screen for the user.

  //start of nav bar
  //creating elements for nav
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
  content.appendChild(nav);

  //video display
  const container = document.createElement('div');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'background-video';
  //video.poster = '../src/assets/ramen_poster.png';
  source.setAttribute('src', '../src/assets/ramen.mp4');
  video.appendChild(source);
  video.autoplay = true;
  video.loop = true;

  const text_container = document.createElement('div');
  text_container.classList.add('intro_text');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'PAGU RAMEN';

  const button = document.createElement('button');
  button.classList.add('button-82-pushable');
  
  const span1 = document.createElement('span');
  span1.classList.add('button-82-shadow');
  const span2 = document.createElement('span');
  span2.classList.add('button-82-edge');
  const span3 = document.createElement('span');
  span3.classList.add('button-82-front');
  span3.classList.add('text');
  span3.innerHTML = 'Discover Menu';

  button.append(span1, span2, span3);
  text_container.append(h2, button);

  container.append(video, text_container);
  content.appendChild(container);

}


export { initial_load };