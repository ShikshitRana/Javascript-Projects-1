const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const xwalk = 15;
const ywalk = 1;

function changeShadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xDis = Math.round((x / width) * xwalk - xwalk / 2);
  const yDis = Math.round((y / height) * ywalk - ywalk / 2);

  text.style.textShadow = `${xDis}px ${yDis}px 0 rgba(255,0,255,0.7)`;
}
document.addEventListener("mousemove", changeShadow);
