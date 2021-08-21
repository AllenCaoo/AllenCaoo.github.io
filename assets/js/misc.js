function hoverClown(element) {
    document.getElementsByClassName('Clown').src = "./assets/img/jpg/stanford.webp";
    console.log("change")
}

function unhoverClown(element) {
    element.setAttribute('src', './assets/img/jpg/clown.webp');
  }