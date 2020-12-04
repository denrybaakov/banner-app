function sizeCard(width, height, container, card) {

  width.addEventListener('change', () => {
    const widthContainer = (width) => {
      container.style.width = `${width.value}px`;
    };
    if (width.value > 1200) {
      width.value = 1199;
      widthContainer(width);
    } else if (width.value <= 99) {
      width.value = 100;
      widthContainer(width);
    } else {
      widthContainer(width);
    }
    card.width = `${width.value}px`;
  });

  height.addEventListener('change', () => {
    const heightContainer = (height) => {
      container.style.height = `${height.value}px`;
    };
    if (height.value > 800) {
      height.value = 799;
      heightContainer(height);
    } else if (height.value <= 99) {
      height.value = 100;
      heightContainer(height);
    } else {
      heightContainer(height);
    }
    card.height = `${height.value}px`;
  });
}

export default sizeCard;