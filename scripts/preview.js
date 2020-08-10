function previewImage(event) {
  let reader = new FileReader();
  createElements();

  reader.onload = function () {
    let output = document.getElementById(`img_${countImageLength() - 1}`);
    output.src = reader.result;

    displayArrows(true);
    displayDots();
    showSlides(slideIndex);
  }
  reader.readAsDataURL(event.target.files[0]);
}

