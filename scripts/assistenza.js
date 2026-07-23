const defaultLabels = {
    type: "Seleziona il tipo di dispositivo",
    brand: "Seleziona la marca del dispositivo",
    model: "Seleziona il modello del dispositivo"
};

const rows = {
    type: {
        toggle: document.querySelector("#typeToggle"),
        label: document.querySelector("#typeLabel"),
        options: document.querySelector("#typeList")
    },
    brand: {
        toggle: document.querySelector("#brandToggle"),
        label: document.querySelector("#brandLabel"),
        options: document.querySelector("#brandList")
    },
    model: {
        toggle: document.querySelector("#modelToggle"),
        label: document.querySelector("#modelLabel"),
        options: document.querySelector("#modelList")
    },
};

const devicePicker = document.querySelector("#devicePicker");
const confirmButton = document.querySelector("#confirm");

const selection = {
    type: null,
    brand: null,
    model: null
};

function monogramColor(label){
    let hash = 0;
    for(let i = 0; i<label.length; i++){
        hash = label.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash)%360}, 45%, 30%)`;
}

function createMonogram(label){
    const el = document.createElement("span");
    el.className = "option-monogram";
    el.textContent = label.charAt(0).toUpperCase();
    el.style.backgroundColor = monogramColor(label);
    return el;
}

function createOptionRow(label, iconSVG, onSelect){
    const row = document.createElement("button");
    row.type = "button";
    row.className = "option-row";

    const iconWrap = document.createElement("span");
    iconWrap.className = "option-icon";
    (iconSVG)? (iconWrap.innerHTML = iconSVG): iconWrap.appendChild(createMonogram(label));

    const name = document.createElement("span");
    name.className = "option-name";
    name.textContent = label;

    row.append(iconWrap, name);
    row.addEventListener("click", () => onSelect(label));
    return row;
}

function closeAllRows(){
    Object.values(rows).forEach(({toggle, options}) =>{
        options.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    });
}

function openRow(key){
    closeAllRows();
    rows[key].options.hidden = false;
    rows[key].toggle.setAttribute("aria-expanded", "true");
}

function toggleRow(key){
    if(rows[key].toggle.disabled) return;
    const isOpen = !rows[key].options.hidden;
    isOpen? closeAllRows(): openRow(key);
}

function resetRow(key){
    rows[key].label.textContent = defaultLabels[key];
    rows[key].toggle.disabled = true;
    rows[key].options.innerHTML = "";
    rows[key].options.hidden = true;
}

function renderTypeOptions(){
    rows.type.options.innerHTML = "";
    Object.keys(deviceCatalog).forEach((type) =>{
        rows.type.options.appendChild(createOptionRow(type, deviceCatalog[type].icon, chooseType));
    });
}

function chooseType(type){
    selection.type = type;
    selection.brand = null;
    selection.model = null;

    rows.type.label.textContent = type;
    resetRow("brand");
    resetRow("model");
    rows.brand.toggle.disabled = false;

    rows.brand.options.innerHTML = "";
    Object.keys(deviceCatalog[type].brands).forEach((brand) =>{
        rows.brand.options.appendChild(createOptionRow(brand,null,chooseBrand));
    });

    openRow("brand");
    updateConfirmState();
}

function chooseBrand(brand){
    selection.brand = brand;
    selection.model = null;

    rows.brand.label.textContent = brand;
    resetRow("model");
    rows.model.toggle.disabled = false;

    const typeIcon = deviceCatalog[selection.type].icon

    deviceCatalog[selection.type].brands[brand].forEach((model) =>{
        rows.model.options.appendChild(createOptionRow(model,typeIcon,chooseModel));
    });

    openRow("model");
    updateConfirmState();
}

function chooseModel(model){
    selection.model = model;
    rows.model.label.textContent = model;
    closeAllRows();
    updateConfirmState();
}

function updateConfirmState(){
    confirmButton.disabled = !(selection.type && selection.brand && selection.model);
}

Object.keys(rows).forEach((key) =>rows[key].toggle.addEventListener("click",() => toggleRow(key)));

document.addEventListener("click", (event) =>{
    if(!devicePicker.contains(event.target)) closeAllRows();
});

confirmButton.addEventListener("click", () =>{
    const richiesta = { tipo: selection.type, marca: selection.brand, modello: selection.model };
    console.log("Dispositivo selezionato:", richiesta);
});

renderTypeOptions();


