//import boothPic from '../assets/miso.jpg';

export const reservePage = (content) => {
  const soloBoothPic = document.createElement('img');
  soloBoothPic.classList.add('boothPic');
  soloBoothPic.classList.add('fadeinUp');
  soloBoothPic.alt = 'solo booth dining w/ ramen, credits to Eater NY';
 // soloBoothPic.src = boothPic;

  const headerText = document.createElement('h2');
  headerText.innerHTML = 'Welcome to our solo-dining experience.';
  headerText.classList.add('fadeinUp');

  const container = document.createElement('div');
  container.classList.add('reserveContainer');
  const diningDescription = document.createElement('p');
  diningDescription.innerHTML = 'Fulfill your introverted needs with our contactless ordering and payment system. Simply order using a pen and paper, and fill out a sheet for your server for additional orders and refills.';

  const reservationDescription = document.createElement('p');
  reservationDescription.innerHTML = 'Since we would like to keep an intimate dining experience for our customers, we do not take reservations.';
  reservationDescription.classList.add('fadeinUp');

  container.append(headerText, diningDescription, reservationDescription);

  content.append(soloBoothPic, container);
}
