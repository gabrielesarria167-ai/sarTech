const explodeSection = document.querySelector(".explode-section");
const phoneStage = document.querySelector("#phoneStage");
const display = document.querySelector("#display");
const board = document.querySelector("#board");
const battery = document.querySelector("#battery");
const backGroup = document.querySelector("#backGroup");
const heroTitle = document.querySelector("#heroTitle");

const heroWelcome = document.querySelector("#heroWelcome");

window.addEventListener(`scroll`, update, {passive:true});
window.addEventListener(`resize`, () =>{ update(); updateScale();});

update();
updateScale();

const reservationButton = document.querySelector("#reservation");

reservationButton.addEventListener("click", () =>{
    location.href = "pages/assistenza.html";
})