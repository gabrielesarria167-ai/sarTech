function clamp(value, min, max){
    return Math.max(min, Math.min(max, value));
}

function remap(position, start, end) {
    return clamp((position - start) / (end - start), 0, 1);
}

function updateScale() {
    let scale;
    if (window.innerWidth < 480) {
        scale = clamp(window.innerWidth / 480, 0.55, 1);
    }
    else {
        scale = clamp(1 + (window.innerWidth - 480) / 4800, 1, 1.25);
    }
    phoneStage.style.transform = `scale(${scale.toFixed(2)})`;
}
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });

});

revealElements.forEach((element) => revealObserver.observe(element));

const logos = document.querySelector("#logos").childNodes;

logos.forEach((logo) => {
    logo.addEventListener("click", () => {
        location.href = "../index.html";
    })
});

function renderPageBreadcrumb(){
    const directoryHelp = document.querySelector("#directoryHelp");
    if(!directoryHelp) return;

    directoryHelp.innerHTML = "";

    const home = document.createElement("a");
    home.href = "../index.html";
    home.textContent = "Home";
    directoryHelp.appendChild(home);

    const sep = document.createElement("span");
    sep.className = "crumb-sep";
    sep.textContent = ">";
    directoryHelp.appendChild(sep);

    const current = document.createElement("span");
    current.style.cursor = "pointer";
    current.className = "crumb-current";
    current.textContent = document.title;
    directoryHelp.appendChild(current);
}

renderPageBreadcrumb();