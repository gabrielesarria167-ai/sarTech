const explodeSection = document.querySelector(".explode-section");
const phoneStage = document.querySelector("#phoneStage");
const display = document.querySelector("#display");
const board = document.querySelector("#board");
const battery = document.querySelector("#battery");
const backGroup = document.querySelector("#backGroup");
const heroTitle = document.querySelector("#heroTitle");

function clamp(value, min, max){
    return Math.max(min, Math.min(max, value));
}

function remap(position, start, end){
    return clamp( (position-start) / (end-start), 0, 1);
}

function update(){
    const objectRectangle = explodeSection.getBoundingClientRect(); // returns the geometric rectangle in which an object is contained
    const total = objectRectangle.height - window.innerHeight // window.innerHeight returns the height in pixels of the viewport
    const position = clamp(-objectRectangle.top / total, 0, 1);
    
    // movement for back glass + camera
    const positionBack = remap(position, 0.00, 0.35);
    backGroup.style.transform = `translate(calc(-50% - ${130 * positionBack}px), calc(-50% + ${50*positionBack}px)) rotate(${-8*positionBack}deg)`;

    // movement for board
    const positionBoard = remap(position, 0.28, 0.60);
    board.style.transform = `translate(calc(-50% + ${10 * positionBoard}px), calc(-50% - ${70*positionBoard}px)) rotate(${3*positionBoard}deg)`;

    // movement for battery
    const positionBattery = remap(position, 0.33, 0.65);
    battery.style.transform = `translate(calc(-35% + ${90 * positionBattery}px), calc(-50% + ${40*positionBattery}px)) rotate(${6*positionBattery}deg)`;

    // movement for display
    const positionDisplay = remap(position, 0.65, 1.00);
    display.style.transform = `translate(calc(-50% + ${140 * positionDisplay}px), calc(-50% - ${40*positionDisplay}px)) rotate(${9*positionDisplay}deg)`;

    // hero title pops up after everything has finished moving

    const positionTitle = remap(position, 0.85, 1.00);
    heroTitle.style.opacity = positionTitle;
    heroTitle.style.transform = `translateY(${16 * (1-positionTitle)}px)`;
}

function updateScale(){
    const scale = clamp(window.innerWidth / 480, 0.55,1);
    phoneStage.style.transform = `scale(${scale.toFixed(2)})`;
}

window.addEventListener(`scroll`, update, {passive:true});
window.addEventListener(`resize`, () =>{ update(); updateScale();});

update();
updateScale();