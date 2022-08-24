import aboutPoster from "../assets/aboutVidPoster.png";

export const aboutPage = (content) => {
  //Adds the About Page content to the DOM

  const about_container = document.createElement('div');
  about_container.classList.add('about_container');
  const video = document.createElement('video');
  const source = document.createElement('source');
  video.id = 'about-video';
  video.poster = './ce58ae6bdb78ef3892ec.png';
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
