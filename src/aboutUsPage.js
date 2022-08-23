import {initial_load} from './initialPageLoad'

const aboutUs_page_load = () => {
  
  console.log('about us click');
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

  container.append(video);
}





export { aboutUs_page_load };