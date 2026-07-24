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

const brandLogos ={
    Apple:"../img/brand logos/apple.png",
    Samsung:"../img/brand logos/samsung.png",
    Microsoft:"../img/brand logos/microsoft.png",
    Dell:"../img/brand logos/dell.png",
    HP:"../img/brand logos/hp.png",
    Asus:"../img/brand logos/asus.png",
    Acer:"../img/brand logos/acer.png",
    Lenovo:"../img/brand logos/lenovo.png",
    Google:"../img/brand logos/google.png",
    Huawei:"../img/brand logos/huawei.png",
    Motorola:"../img/brand logos/motorola.png",
    Realme:"../img/brand logos/realme.png",
    Xiaomi:"../img/brand logos/xiaomi.png",
}

const devicePicker = document.querySelector("#devicePicker");
const confirmButton = document.querySelector("#confirm");

const deviceSummaryRow = document.querySelector("#deviceSummaryRow");
const deviceSummaryToggle = document.querySelector("#deviceSummaryToggle");
const deviceSummaryLabel = document.querySelector("#deviceSummaryLabel");
const deviceDetailRows = document.querySelector("#deviceDetailRows");

const personalToggle = document.querySelector("#personalToggle");
const personalFields = document.querySelector("#personalFields");
const inputName = document.querySelector("#inputName");
const inputSurname = document.querySelector("#inputSurname");
const inputPhone = document.querySelector("#inputPhone");

const selection = {
    type: null,
    brand: null,
    model: null
};

const personalInfo ={
    name: null,
    surname: null,
    phone: null
}

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
   
    if(brandLogos[label]){
        const img = document.createElement("img");
        img.src = brandLogos[label];
        img.alt = "";
        iconWrap.appendChild(img)
    }
    else if(iconSVG) iconWrap.innerHTML=iconSVG;
    else iconWrap.appendChild(createMonogram(label))

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

    if(selection.type && selection.brand && selection.model) showDeviceSummary();
}

function animateIn(el){
    el.classList.remove("reveal-in");
    void el.offsetWidth;
    el.classList.add("reveal-in");
}

function showDeviceSummary(){
    deviceSummaryLabel.textContent = "Selezione dispositivo";
    deviceSummaryRow.hidden = false;
    animateIn(deviceSummaryRow);

    deviceDetailRows.hidden = true;
    deviceSummaryToggle.setAttribute("aria-expanded", "false")

    personalToggle.disabled = false;
    openPersonalFields();
}

function toggleDeviceDetail(){
    const isOpen = !deviceDetailRows.hidden;
    if(isOpen){
        deviceDetailRows.hidden = true;
        deviceSummaryToggle.setAttribute("aria-expanded", "false")
    }
    else{
        deviceDetailRows.hidden = false;
        deviceSummaryToggle.setAttribute("aria-expanded","true");
        animateIn(deviceDetailRows);
        closePersonalFields()
    }
}

function openPersonalFields(){
    personalFields.hidden = false;
    personalToggle.setAttribute("aria-expanded", "true");
    animateIn(personalToggle.closest(".picker-row"));
}

function closePersonalFields(){
    personalFields.hidden=true;
    personalToggle.setAttribute("aria-expanded", "false");
}

deviceSummaryToggle.addEventListener("click", toggleDeviceDetail);

personalToggle.addEventListener("click", ()=>{
    if(personalToggle.disabled) return;
    personalFields.hidden? openPersonalFields(): closePersonalFields();
});

function isValidPhone(value){
    const cleaned = value.replace(/[\s-]/g, "");
    return /^\+39\d{10}$/.test(cleaned);
}

function updatePersonalInfo(){
    const name = inputName.value.trim();
    const surname = inputSurname.value.trim();
    const phone = inputPhone.value.trim();

    personalInfo.name = name.length > 0? name:null;
    personalInfo.surname = surname.length > 0? surname:null;
    personalInfo.phone = isValidPhone(phone)? phone:null;

    updateConfirmState();
}

[inputName, inputSurname, inputPhone].forEach((input) =>{
    input.addEventListener("input", updatePersonalInfo);
});

function updateConfirmState(){
    const deviceComplete = selection.type && selection.brand && selection.model;
    const personalComplete = personalInfo.name && personalInfo.surname && personalInfo.phone;
    confirmButton.disabled = !(deviceComplete && personalComplete);
}

Object.keys(rows).forEach((key) =>rows[key].toggle.addEventListener("click",() => toggleRow(key)));

document.addEventListener("click", (event) =>{
    if(!devicePicker.contains(event.target)){
        closeAllRows();
        if(!personalFields.hidden) closePersonalFields();
    }
});

confirmButton.addEventListener("click", () =>{
    const richiesta = { 
        tipo: selection.type, 
        marca: selection.brand, 
        modello: selection.model,
        nome: personalInfo.name,
        cognome: personalInfo.surname,
        telefono: personalInfo.phone
    };
    console.log("Dispositivo selezionato:", richiesta);
});

renderTypeOptions();


