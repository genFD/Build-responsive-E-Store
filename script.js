const sectionOne = document.querySelector('.section-one');
function generateNewNumber() {
  let newNum = Math.floor(Math.random() * 5);
  // console.log(newNum);
  return newNum;
}
const bgimg = [
  'url(./images/slideshow/section-1-bg-1.jpg)',
  'url(./images/slideshow/section-1-bg-2.jpg)',
  'url(./images/slideshow/section-1-bg-3.jpg)',
  'url(./images/slideshow/section-1-bg-4.jpg)',
  'url(./images/slideshow/section-1-bg-5.jpg)',
];
function changeBackg() {
  sectionOne.style.background = `${bgimg[generateNewNumber()]}`;
}

// setInterval(() => {
//   changeBackg();
// }, 5000);

// for (let i = 1; i <= 5; i++) {
//   if (i === 5) {
//     // i = 1;
//     // console.log(i);
//   }
// }
