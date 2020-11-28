function sizeCard(width, height, container, card) {
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

export default sizeCard;