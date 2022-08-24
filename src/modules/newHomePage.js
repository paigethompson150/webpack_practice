

export const newHomePage = (content) => {
  const container = document.createElement('div');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'background-video';
  video.poster = 'assets/ramen_poster.png';
  source.setAttribute('src', 'assets/ramen.mp4');
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
}
