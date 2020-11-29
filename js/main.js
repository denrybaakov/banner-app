import sizeCard from './module/sizeCard';
import titleCard from './module/titleCard';
import textCard from './module/textCard';
import imageURL from './module/urlCard';
import imgPosition from './module/imgPosition';
import colorCard from './module/colorCard';
import btnsCard from './module/btnsCard';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const width = document.querySelector('#width');
  const height = document.querySelector('#height');
  const title = document.querySelector('#title');
  const text = document.querySelector('#text');
  const imgUrl = document.querySelector('#url');
  const colors = document.querySelectorAll('.setting__radio');

  const container = document.querySelector('.preview__container');
  const imgBlock = document.querySelector('.preview__image-block');

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
  imageURL(imgUrl, container, imgBlock, card);
  imgPosition(imgBlock);
  colorCard(colors, container, card);
  btnsCard(btnJson, btnHtml, btnPng, container, card);
});