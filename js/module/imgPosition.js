function imgPosition(imgBlock) {
  const imgLeft = document.querySelector('#imageLeft');
  const imgCenter = document.querySelector('#imageCenter');
  const imgRight = document.querySelector('#imageRight');

  imgLeft.addEventListener('click', () => imgBlock.style.margin = `0 auto 0 0`);
  imgCenter.addEventListener('click', () => imgBlock.style.margin = `0 auto 0`);
  imgRight.addEventListener('click', () => imgBlock.style.margin = `0 0 0 auto`);

}

export default imgPosition;