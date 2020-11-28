import sizeCard from './module/sizeCard';
import titleCard from './module/titleCard';
import textCard from './module/textCard';
import colorCard from './module/colorCard';
import imageURL from './module/urlCard';
import btnsCard from './module/btnsCard';

document.addEventListener('DOMContentLoaded', function () {
  const width = document.querySelector('#width');
  const height = document.querySelector('#height');
  const title = document.querySelector('#title');
  const text = document.querySelector('#text');
  const imgUrl = document.querySelector('#url');
  const colors = document.querySelectorAll('.setting__radio');

  const container = document.querySelector('.preview__container');

  const btnJson = document.querySelector('#json');
  const btnHtml = document.querySelector('#html');
  const btnPng = document.querySelector('#png');

  const card = {
    width: `${width.value}px`,
    height: `${height.value}px`,
    title: '',
    text: '',
    url: '',
    color: 'White'
  };

  sizeCard(width, height, container, card);
  titleCard(title, card);
  textCard(text, card);
  colorCard(colors, container, card);
  imageURL(imgUrl, container, card);
  btnsCard(btnJson, btnHtml, btnPng, container, card);

  setTimeout(() => console.log(card), 12000);
});