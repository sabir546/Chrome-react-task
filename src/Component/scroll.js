// const cards = document.querySelectorAll(".card, .card2, .card3, .card4");
// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// let currentIndex = 0;

// const scroller = () => {
//   left.addEventListener("click", slideLeft);
//   right.addEventListener("click", slideRight);
// };

// const slideLeft = () => {
//   currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
//   updateTransform();
// };

// const slideRight = () => {
//   currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
//   updateTransform();
// };

// const updateTransform = () => {
//   const transformValue = -currentIndex * 100 + '%';
//   cards.forEach(card => {
//     card.style.transform = `translateX(${transformValue})`;
//   });
// };

// export default scroller;
