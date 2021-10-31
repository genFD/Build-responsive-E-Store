// Create five elements dynamically and add them to wrapper slideshow

const createSlideShowDivs = () => {
  //loop from 1 to 5 and for each iteration create a div element using create element
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    //assign to the newly created element a bg
    //on the first iteration i will be equal to one
    //on the second 2 and etc...
    div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;
    //add class "CHANGE" to each div on each iteration
    //add class "CHANGE" on the first iteration
    i === 1 && div.classList.add('change');
    // newDiv.classList.add('change');
    //also add the div element to the wrapper slideshow
    document.querySelector('.slideshow').appendChild(div);
    //inspect the page to verify
  }
};
createSlideShowDivs();
// add and remove class change to the div element in order
// select all the newdiv elements
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
  }, 20000);
};
// createslideShow();

const sectionthreeContent = document.querySelector('.section-three-content');

window.addEventListener('scroll', () => {
  if (
    window.pageYOffset + window.innerHeight >=
    sectionthreeContent.offsetTop + sectionthreeContent.offsetHeight / 2
  ) {
    sectionthreeContent.classList.add('change');
  }
});
