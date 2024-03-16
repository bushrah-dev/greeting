let box = document.querySelector(".container");
let time = new Date().getHours();
let greeting =
  time >= 5 && time < 12
    ? "Buenos Dias"
    : time >= 12 && time < 18
    ? "Buenas tardes"
    : "Buenas noches";
box.innerHTML = `<h1>${greeting}</h1>`;