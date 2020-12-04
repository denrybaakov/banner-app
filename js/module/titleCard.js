function titleCard(title, card) {
  const titleStrong = document.querySelector('.preview__title');
  const maxLength = title.getAttribute('maxlength');
  const count = document.querySelector('span.setting__inpTitle-count');
  const warningTitle = (bgColor = '', borderColor = '') => {
    count.style.backgroundColor = `${bgColor}`;
    title.style.border = `1px solid ${borderColor}`;
  };

  title.addEventListener('input', (e) => {
    const valueLength = e.target.value.length;
    const rightCharValue = maxLength - valueLength;
    rightCharValue <= 0 ? warningTitle('tomato', 'tomato') : warningTitle();

    if (title.value.length >= 0 && title.value.length < 31) {
      titleStrong.textContent = title.value;
      card.title = titleStrong.textContent;
      count.textContent = rightCharValue;
    }
  });
}

export default titleCard;