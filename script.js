function clamp(value, min, max) {
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

const NAV_HISTORY_KEY = "sartechNavHistory";

function getCurrentFileName() {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return (lastSegment && lastSegment.endsWith(".html")) ? lastSegment : "index.html";
}

function updateNavHistory() {
    const fileName = getCurrentFileName();
    const isHome = (fileName === "index.html");
    const label = isHome ? "Home" : document.title;

    let history;
    try {
        history = JSON.parse(sessionStorage.getItem(NAV_HISTORY_KEY)) || [];
    } catch (error) {
        history = [];
    }

    if (isHome) history = [{ file: fileName, label }];

    else {
        const existingIndex = history.findIndex((entry) => (entry.file === fileName));

        if (existingIndex !== -1) history = history.slice(0, existingIndex + 1);

        else {
            if (history.length === 0) history.push({ file: "index.html", label: "Home" });
            history.push({ file: fileName, label });
        }
    }

    try {
        sessionStorage.setItem(NAV_HISTORY_KEY, JSON.stringify(history));
    } catch (error) { }

    return history;
}


function renderPageBreadcrumb(history) {
    const directoryHelp = document.querySelector("#directoryHelp");
    if (!directoryHelp) return;

    directoryHelp.innerHTML = "";

    history.forEach((entry, index) => {
        const isLast = index === history.length - 1;

        if (isLast) {
            const current = document.createElement("span");
            current.className = "crumb-current";
            current.textContent = entry.label;
            directoryHelp.appendChild(current);
            return;
        }

        const link = document.createElement("a");
        link.href = (entry.file === "index.html") ? "../index.html" : entry.file;
        link.textContent = entry.label;
        directoryHelp.appendChild(link);

        const sep = document.createElement("span");
        sep.className = "crumb-sep";
        sep.textContent = ">";
        directoryHelp.appendChild(sep);
    });
}

const navHistory = updateNavHistory();
renderPageBreadcrumb(navHistory);