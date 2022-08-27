const peopleLatin = ["nūntius/-a—Nom. pl.", "populus—Dat. s.", "rēgīna—Voc. pl.", "servus/-a—Acc. s."];

const peopleAnswers = [
  "nūntiī/-ae—messenger, message</em>",
  "populō—<em>people, nation</em>",
  "rēgīnae—<em>queen</em>",
  "servum/-am—<em>slave, servant</em>"
];

const nhaLatin = ["aquīla—Abl. pl.", "asinus/-a—Gen. s.", "cervus/-a—Voc. s.", "porcus/-a—Acc. pl."];
const nhaAnswers = [
  "aquīlīs—<em>eagle</em>",
  "asinī/-ae—<em>donkey, ass</em>",
  "cerve/-a—<em>stag/doe</em>",
  "lupōs/-ās—<em>wolf</em>"
];

const placesLatin = ["Britānnia—Abl. s.", "Dācia—Acc. s.", "Eurōpa—Dat. s.", "Gallia—Nom. pl.", "Germānia—Voc. s.",
  "Graecia—Gen. s.", "Helvētia—Abl. s.", "Hispānia—Acc. s.", "Illyria—Dat. s.", "locus—Acc. pl.", "patria—Dat. pl.",
  "Sardinia—Gen. s.", "Sicilia—Gen. pl.", "silva—Acc. pl.", "Thrācia—Voc. s."];
const placesAnswers = [
  "Britānniā—<em>Britain</em>",
  "Dāciam—<em>Dacia (Romania)</em>",
  "Eurōpae—<em>Europe</em>",
  "Galliae—<em>Gaul (mostly France)</em>",
  "Germānia—<em>Germany</em>",
  "Helvētiā—<em>Helvetia (Switzerland)</em>",
  "Hispāniam—<em>Spain, Iberia</em>",
  "Illyriae—<em>Illyria (Yugoslavia)</em>",
  "locōs—<em>place, location</em>",
  "patriae—<em>homeland, fatherland</em>",
  "Sardiniae—<em>Sardinia</em>",
  "Siciliārum—<em>Sicily</em>",
  "silvās—<em>forest, wood</em>",
  "Thrācia—<em>Thrace (Bulgaria)</em>"
];

const buildingsLatin = ["camera—Abl. pl.", "iānua—Gen. s.", "porta—Nom. pl."];
const buildingsAnswers = [
  "camerīs—<em>room, chamber</em>",
  "iānuae—<em>door</em>",
  "portae—<em>gate</em>"
];

const commonObjectsLatin = ["gladius—Gen. pl.", "lectus—Dat. s.", "pecūnia—Dat. s.", "sagitta—Abl. s.",
  "scūtum—Nom. pl.", "sella—Voc. pl."];
const commonObjectsAnswers = [
  "gladiōrum—<em>sword</em>",
  "lectō—<em>couch, bed</em>",
  "pecūniae—<em>money</em>",
  "sagittā—<em>arrow</em>",
  "scūta—<em>shield</em>",
  "sellae—<em>seat, chair</em>"
];

const abstractLatin = ["amīcitia—Acc. pl.", "angustia—Gen. s.", "audācia—Dat. pl.", "auxilium—Nom. pl.", "beneficium—Gen. s.",
  "cūra—Acc. pl.", "decentia—Acc. s.", "gaudium—Acc. pl.", "grātia—Gen. pl.", "imperium—Dat. s.", "laetitia—Nom pl.",
  "licentia—Acc. s.", "miseria—Dat. pl.", "modus—Abl. s.", "studium—Abl. pl."];
const abstractAnswers = [
  "amīcitiās—<em>friendship</em>",
  "angustiae—<em>narrowness; difficulties (pl.)</em>",
  "audāciīs—<em>boldness, daring</em>",
  "auxilia—<em>help assistance; reinforcement troops (pl.)</em>",
  "beneficiī—<em>benefit, kindness</em>",
  "cūrās—<em>care, concern</em>",
  "decentiam—<em>decency, suitability</em>",
  "gaudia—<em>joy, gladness</em>",
  "grātia—<em>grace; thanks (pl.)</em>",
  "imperiō—<em>authority, empire</em>",
  "laetitiae—<em>happiness</em>",
  "licentiam—<em>license, liberty</em>",
  "miseriīs—<em>misery, sadness, wretchedness</em>",
  "modō—<em>method, manner, way</em>",
  "studiīs—<em>enthusiasm, zeal</em>"
];

const miscellaneousLatin = ["forma—Gen. s.", "numerus—Voc. s.", "pugna—Nom. pl.", "responsum—Acc. s."];
const miscellaneousAnswers = [
  "formae—<em>form, shape</em>",
  "numere—<em>number, group</em>",
  "pugnae—<em>fight, battle</em>",
  "responsum—<em>response, reply</em>"
];

let peopleLength = peopleLatin.length;
let nhaLength = nhaLatin.length;
let placesLength = placesLatin.length;
let buildingsLength = buildingsLatin.length;
let commonObjectsLength = commonObjectsLatin.length;
let abstractLength = abstractLatin.length;
let miscLength = miscellaneousLatin.length

function displayPeople() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < peopleLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${peopleLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${peopleAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayNHA() {
  let html = `<ol style="1" start="${peopleLength + 1}">`;
  let iteration = "";
  let j = peopleLength + 1;
  for (let i = 0; i < nhaLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${nhaLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${nhaAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayPlaces() {
  let j = peopleLength + nhaLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < placesLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${placesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${placesAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayBuildings() {
  let j = peopleLength + nhaLength + placesLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < buildingsLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${buildingsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${buildingsAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayCommonObjects() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < commonObjectsLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${commonObjectsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${commonObjectsAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayAbstract() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + commonObjectsLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < abstractLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${abstractLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${abstractAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayMiscellany() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + commonObjectsLength + abstractLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < miscLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${miscellaneousLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${miscellaneousAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
