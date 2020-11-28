function titleCard(title, card) {
  const titleStrong = document.querySelector('.preview__title');
  const maxLength = title.getAttribute('maxlength');
  const count = document.querySelector('span.setting__inpTitle-count');

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

export default titleCard;