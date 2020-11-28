function textCard(text, card) {
  const description = document.querySelector('.preview__description');
  text.addEventListener('input', () => {
    let str = text.value;
    if (str.length >= 0 && str.length < 91) {
      let resault = str.slice(0, 55) + (str.length > 55 ? "..." : "");
      description.textContent = resault;
      card.text = str;
    }
  });
}

export default textCard;