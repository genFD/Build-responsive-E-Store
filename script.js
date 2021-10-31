/*
===================
Section one Slideshow
===================
*/

const createSlideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add('change');
    document.querySelector('.slideshow').appendChild(div);
  }
};
createSlideShowDivs();

const divs = document.querySelectorAll('.slideshow div');

let a = 1;
const createslideShow = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector('.slideshow .change');
    // console.log(div);
    div.classList.remove('change');
    if (a < divs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      divs[0].classList.add('change');
      a = 1;
    }
  }, 10000);
};
createslideShow();
/*
===================
End of slideshow
===================
 */

/*
===================
Section three
===================
 */

const sectionthreeContent = document.querySelector('.section-three-content');

window.addEventListener('scroll', () => {
  if (
    window.pageYOffset + window.innerHeight >=
    sectionthreeContent.offsetTop + sectionthreeContent.offsetHeight / 2
  ) {
    sectionthreeContent.classList.add('change');
  }
});
/*
===================
End of Section three
===================
 */

/*
===================
Section four
===================
 */
const watchControl = document.querySelector('.watch-control');

watchControl.addEventListener('click', (e) => {
  e.preventDefault();
});
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add('hideControl');
  } else {
    watchTopControl.classList.remove('hideControl');
  }

  if (axisY === 280) {
    watchBottomControl.classList.add('hideControl');
  } else {
    watchBottomControl.classList.remove('hideControl');
  }

  if (axisX === 280) {
    watchRightControl.classList.add('hideControl');
  } else {
    watchRightControl.classList.remove('hideControl');
  }

  if (axisX === -280) {
    watchLeftControl.classList.add('hideControl');
  } else {
    watchLeftControl.classList.remove('hideControl');
  }
};

watchTopControl.addEventListener('click', (e) => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
  e.preventDefault();
});

watchBottomControl.addEventListener('click', (e) => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
  e.preventDefault();
});

watchRightControl.addEventListener('click', (e) => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
  e.preventDefault();
});

watchLeftControl.addEventListener('click', (e) => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
  e.preventDefault();
});
/*
===================
End of Section four
===================
 */
