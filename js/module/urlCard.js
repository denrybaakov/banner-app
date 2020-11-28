function imageURL(imgUrl, container, card) {
  const imgBlock = document.querySelector('.preview__image-block');
  const img = document.querySelector('img');
  imgUrl.addEventListener('change', () => {
    let str = imgUrl.value;
    if (str.length > 4) {
      imgBlock.style.display = 'flex';
      container.setAttribute('href', str);
      img.src = str;
      img.style.cssText = `
        width: 100%;
        heigth: 100%;
        object-fit: cover
        background: url('${str}');`;
    } else {
      img.alt = 'Path Not Found!';
    }
    if (str.length == 0) {
      imgBlock.style.display = 'none';
    }
    card.url = str;
  });
}

export default imageURL;