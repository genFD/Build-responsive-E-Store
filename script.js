function changeBackgroundAfterFiveSecond() {}
function changeBackground() {
  setTimeout(() => {
    changeBackgroundAfterFiveSecond();
  }, 5000);
}
changeBackground();
// for (let i = 1; i <= 5; i++) {
//   if (i === 5) {
//     // i = 1;
//     // console.log(i);
//   }
// }
