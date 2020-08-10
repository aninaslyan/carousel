window.onload = function() {
  displayArrows(false);
}

function createElements() {
  const mainDiv = document.getElementById("slideshow-container");

  const mainImgDiv = document.createElement("div");
  mainImgDiv.classList.add('mySlides');
  mainImgDiv.classList.add('fade');
  mainImgDiv.setAttribute('id', `div_${countImageLength()}`);

  let image = document.createElement("img");
  image.setAttribute('id', `img_${countImageLength()}`);

  mainImgDiv.appendChild(image);
  mainDiv.appendChild(mainImgDiv);
}

function displayArrows(show) {
  const display = show ? 'block' : 'none';
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  prevButton.setAttribute("style", `display: ${display}`);
  nextButton.setAttribute("style", `display: ${display}`);
}

function countImageLength() {
  return document.getElementsByTagName("img").length;
}

function displayDots() {
  const dotDiv = document.getElementById("dot-div");

  const span = document.createElement("span");
  span.classList.add('dot');
  dotDiv.appendChild(span);
  const imageLength = countImageLength();

  span.addEventListener('click', function() {
    currentSlide(imageLength);
  });
}
