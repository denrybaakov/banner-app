const width = document.querySelector('#width');
const height = document.querySelector('#height');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
const imgUrl = document.querySelector('#url');
const colors = document.querySelectorAll('.setting__radio');

const preview = document.querySelector('.preview');
const container = document.querySelector('.preview__container');
const imgBlock = document.querySelector('.preview__image-block');
const img = imgBlock.querySelector('img');
const titleStrong = document.querySelector('.preview__title');
const description = document.querySelector('.preview__description');

const textCode = document.querySelector('#textCode');
const btnJson = document.querySelector('#json');
const btnHtml = document.querySelector('#html');
const btnPng = document.querySelector('#png');

const count = document.querySelector('span.setting__inpTitle-count');
const maxLength = title.getAttribute('maxlength');

const card = {
  width: `${width.value}px`,
  height: `${height.value}px`,
  title: '',
  text: '',
  url: '',
  color: 'White'
};

function sizeCard(width, height) {
  width.addEventListener('change', () => {
    if (width.value > 1200) {
      width.value = 1199;
      container.style.width = `${width.value}px`;
    } else if (width.value <= 99) {
      width.value = 100;
      container.style.width = `${width.value}px`;
    } else {
      container.style.width = `${width.value}px`;
    }
    card.width = `${width.value}px`;
  });

  height.addEventListener('change', () => {
    if (height.value > 800) {
      height.value = 799;
      container.style.height = `${height.value}px`;
    } else if (height.value <= 99) {
      height.value = 100;
      container.style.height = `${height.value}px`;
    } else {
      container.style.height = `${height.value}px`;
    }
    card.height = `${height.value}px`;
  });

}

function titleCard(title) {
  title.addEventListener('input', (e) => {
    const valueLength = e.target.value.length;
    const rightCharValue = maxLength - valueLength;
    if (rightCharValue <= 0) {
      count.style.backgroundColor = 'tomato';
      title.style.border = '1px solid tomato';
    }
    if (title.value.length >= 0 && title.value.length < 31) {
      titleStrong.textContent = title.value;
      card.title = titleStrong.textContent;
      count.textContent = rightCharValue;
    }
  });
}

function textCard(text) {
  text.addEventListener('input', () => {
    let str = text.value;
    if (str.length >= 0 && str.length < 91) {
      let resault = str.slice(0, 55) + (str.length > 55 ? "..." : "");
      description.textContent = resault;
      card.text = str;
    }
  });
}

function colorCard(colors) {
  colors.forEach(color => {
    color.addEventListener('click', e => {
      let colorBg = e.target.getAttribute('id');
      container.setAttribute('data-color', colorBg);
      card.color = colorBg;
    });
  });
}

function imageURL(imgUrl) {
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

// function dataCopy(btn, toData, data) {
//   btn.addEventListener('click', () => {
//     textCode.textContent = '';
//     textCode.textContent = toData;
//     navigator.clipboard.writeText(toData)
//       .then(() => {
//         console.log('Скопировано');
//         console.log(data);
//       })
//       .catch(err => {
//         console.log('Не получилось скопировать', err);
//       });
//   });
// }

btnJson.addEventListener('click', () => {
  const cardJson = JSON.stringify(card);
  textCode.textContent = '';
  textCode.textContent = cardJson;
  navigator.clipboard.writeText(cardJson)
    .then(() => {
      console.log('Получилось скопировать JSON')
    })
    .catch(error => {
      console.log('Не судьба, попробуйте что-то подругому' + error)
    });
});

btnHtml.addEventListener('click', () => {
  textCode.textContent = '';
  textCode.textContent = preview.innerHTML;
  navigator.clipboard.writeText(preview.innerHTML)
    .then(() => {
      console.log('Получилось скопировать HTML');
    })
    .catch(error => {
      console.log('Не судьба, попробуйте что-то подругому' + error);
    });
});


btnPng.addEventListener('click', () => {
  html2canvas(container)
    .then(canvas => {
      const dataURL = canvas.toDataURL('image/jpeg');
      const ctx = canvas.getContext('2d');
      let imgCanvas = document.createElement('img');
      imgCanvas.crossOrigin = 'anonymous';
      ctx.width = card.width;
      ctx.height = card.height;
      console.log(ctx.width);
      // imgCanvas.src = `https://cors-anywhere.herokuapp.com/${card.url}`;
      imgCanvas.src = card.url;
      imgCanvas.onload = function () {
        ctx.drawImage(imgCanvas, 0, 0);
      };
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), 'canvas-image.png');
      } else {
        const a = document.createElement('a');
        imgCanvas.src = card.url;
        container.appendChild(a);
        a.href = dataURL;
        a.download = Math.floor(Math.random() * 99) + '_Banner-Avito.png';
        a.click();
        container.removeChild(a);
      }
    })
    .catch(err => {
      alert(`Произошла ошибка ${err}`);
    });

});



sizeCard(width, height);
titleCard(title);
textCard(text);
colorCard(colors);
imageURL(imgUrl);
// dataCopy(btnJson, JSON.stringify(card), card);
// dataCopy(btnHtml, preview.innerHTML, card);

setTimeout(() => console.log(card), 12000);