import html2canvas from 'html2canvas';

function btnsCard(json, html, png, container, card) {

  const preview = document.querySelector('.preview');
  const textCode = document.querySelector('#textCode');

  json.addEventListener('click', () => {
    const cardJson = JSON.stringify(card);
    textCode.textContent = '';
    textCode.textContent = cardJson;
    navigator.clipboard.writeText(cardJson)
      .then(() => {
        console.log('Получилось скопировать JSON')
      })
      .catch(error => {
        console.log('Не судьба, попробуйте что-то подругому' + error);
      });
  });

  html.addEventListener('click', () => {
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


  png.addEventListener('click', () => {
    html2canvas(container, { useCORS: true })
      .then(canvas => {
        const dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(canvas.msToBlob(), 'canvas-image.png');
        } else {
          const a = document.createElement('a');
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
}

export default btnsCard;