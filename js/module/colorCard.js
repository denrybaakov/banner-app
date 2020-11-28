function colorCard(colors, container, card) {
  colors.forEach(color => {
    color.addEventListener('click', e => {
      let colorBg = e.target.getAttribute('id');
      container.setAttribute('data-color', colorBg);
      card.color = colorBg;
    });
  });
}

export default colorCard;