const explodeSection = document.querySelector(".explode-section");
const phoneStage = document.querySelector("#phoneStage");

const display = document.querySelector("#display");
const motherboardWrap = document.querySelector("#motherboard-wrap");
const battery = document.querySelector("#battery");
const chassis=document.querySelector("#chassis");
const backGroup = document.querySelector("#backGroup");
const heroTitle = document.querySelector("#heroTitle");

const heroWelcome = document.querySelector("#heroWelcome");

function update(){
    const objectRectangle = explodeSection.getBoundingClientRect(); // returns the geometric rectangle in which an object is contained
    const total = objectRectangle.height - window.innerHeight // window.innerHeight returns the height in pixels of the viewport
    const position = clamp(-objectRectangle.top / total, 0, 1);
    
    // movement for back glass + camera
    const positionBack = remap(position, 0.00, 0.35);
    backGroup.style.transform = `translate(calc(-50% - ${120 * positionBack}px), calc(-50% + ${61*positionBack}px)) rotate(${-20*positionBack}deg)`;

    // movement for board
    const positionBoard = remap(position, 0.0, 0.80);
    motherboardWrap.style.transform = `translate(${12 * positionBoard}px,${-250*positionBoard}px) rotate(${12*positionBoard}deg)`;

    // movement for battery
    const positionBattery = remap(position, 0.0, 0.65);
    battery.style.transform = `translate(${-140 * positionBattery}px,${-240*positionBattery}px) rotate(${-15*positionBattery}deg)`;

    // movement for chassis

    const positionChassis = remap(position, 0.0, 0.35);
    chassis.style.transform = `translate(${10*positionChassis}px, ${50*positionChassis}px) rotate(${0*positionChassis}deg)`;

    // movement for display
    const positionDisplay = remap(position, 0.0, 0.35);
    display.style.transform = `translate(${136 * positionDisplay}px, ${60*positionDisplay}px) rotate(${20*positionDisplay}deg)`;

    // hero title pops up after everything has finished moving

    const positionTitle = remap(position, 0.85, 1.00);
    heroTitle.style.opacity = positionTitle;
    heroTitle.style.transform = `translateY(${16 * (1-positionTitle)}px)`;
    heroWelcome.style.opacity = clamp(1-position*6, 0, 1);
}

window.addEventListener(`scroll`, update, {passive:true});
window.addEventListener(`resize`, () =>{ update(); updateScale();});

update();
updateScale();

const reservationButton = document.querySelector("#reservation");

reservationButton.addEventListener("click", () =>{
    location.href = "pages/assistenza.html";
});