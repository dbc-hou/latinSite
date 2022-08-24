const peopleLatin = ["<u>cēnsor</u>—Nom. pl.", "centuriō—Abl. pl.", "cīvis—Gen. pl.", "cohōrs—Voc. s.",
  "coniūnx—Dat. s.", "cōnsul—Abl. pl.", "dictātor/-trīx—Gen. s.", "dux—Acc. pl.", "frater—Nom. pl.",
  "gēns—Gen. pl.", "homō—Dat. s.", "hostis—Dat. pl.", "imperātor/-trīx—Dat. s.",
  "īnfāns—Voc. pl.", "legiō—Dat. s.", "mater—Gen. pl.", "narrātor/-trīx—Abl. s.", "nepōs—Acc. s.",
  "<u>ōrātor</u>/-trīx—Gen. pl.", "ōrdō—Voc. s.", "pārs—Abl. pl.", "pastor/-trīx—Dat. pl.", "pater—Voc. pl.",
  "princeps—Dat. pl.", "rēx—Abl. s.", "<u>senātor</u>/-trīx—Abl. pl.", "soror—Voc. s.", "<u>spectātor</u>/-trīx—Voc. pl.",
  "uxor—Acc. pl.", "<u>victor</u>/-trīx—Nom. pl.", "virgō—Gen. s."];

const peopleAnswers = [
  "cēnsōrēs—<em>censor, population counter, arbiter of public morals</em>",
  "centuriōnibus—<em>centurion, company captain</em>",
  "cīvium—<em>citizen</em>",
  "cohortēs—<em>cohort, crew, battalion</em>",
  "coniugī—<em>spouse</em>",
  "cōnsulibus—<em>consul, chief executive</em>",
  "dictātōris/-trīcis—<em>dictator, temporary military ruler</em>",
  "ducēs—<em>leader</em>",
  "fratrēs—<em>brother</em>",
  "gentium—<em>clan, tribe</em>",
  "hominī—<em>man, human being</em>",
  "hostibus—<em>enemy, foe</em>",
  "imperātōrī—<em>commander, general, emperor</em>",
  "īnfantēs—<em>child, infant</em>",
  "legiōnī—<em>legion, military division</em>",
  "matrum—<em>mother</em>",
  "narratōre/-trīce—<em>narrator, storyteller</em>",
  "nepōtem—<em>grandchild, niece, nephew</em>",
  "ōrātōrum/-tricum—<em>orator, persuasive speaker</em>",
  "ōrdō—<em>order, rank, socioeconomic class</em>",
  "partibus—<em>part, direction</em>",
  "pastōribus/-trīcibus—<em>shepherd</em>",
  "patrēs—<em>father</em>",
  "prīncipibus—<em>chief, emperor</em>",
  "rēge—<em>king, ruler</em>",
  "senātōre/-trīce—<em>senator</em>",
  "soror—<em>sister</em>",
  "spectātōrēs/-trīcēs—<em>spectator, onlooker</em>",
  "uxōrēs—<em>wife</em>",
  "victōres/-trīcēs—<em>victor, conqueror</em>",
  "virginis—<em>virgin, young girl</em>"
];

const divinities = ["Apollō—Gen. s.", "Bacchus—Voc. s.", "Cerēs—Acc. s.", "Diāna—Dat. s.", "Iuppiter—Abl. s.",
  "Iūnō—Gen. s.", "Mārs—Acc. s.", "Mercūrius—Voc. s.", "Minerva—Abl. s.", "Neptūnus—Dat. s.", "Plūtō—Voc. s.",
  "Venus—Dat. s.", "Vesta—Acc. s.", "Vulcānus—Gen. s."];
const divinitiesAnswers = [
  "Apollinis—<em>Apollo/Phoebus, god of light, the sun, music, medicine, and the sciences</em>",
  "Bacche—<em>Bacchus/Dionysus, god of wine and revelry</em>",
  "Cerērem—<em>Ceres/Demeter, goddess of grain and agriculture</em>",
  "Diānae—<em>Diana/Artemis, goddess of the moon and hunting</em>",
  "Iōve—<em>Jupiter/Zeus, king of the gods, god of the sky</em>",
  "Iūnōnis—<em>Juno/Hera, queen of the gods, goddess of marriage</em>",
  "Marte—<em>Mars/Ares, god of war</em>",
  "Mercūrī—<em>Mercury/Hermes, god of communications, travelers, and thieves</em>",
  "Minervā—<em>Minerva/Athena, goddess of wisdom and strategy</em>",
  "Neptūnō—<em>Neptune/Poseidon, god of the sea and horses</em>",
  "Plūtō—<em>Pluto/Hades, god of the underworld and mineral wealth</em>",
  "Venerī—<em>Venus/Aphrodite, goddess of love and beauty</em>",
  "Vestam—<em>Vesta/Hestia, goddess of the hearth and domestic arts</em>",
  "Vulcānī—<em>Vulcan/Hephaestus, god of metalwork and armorer of the gods</em>",
];

const nhaLatin = ["animal—Voc. pl.", "avis—Dat. pl.", "canis—Acc. s.", "fēlēs—Acc. pl.", "grēx—Abl. pl.",
  "leō/leaena—Nom. pl.", "ovis—Gen. pl.", "piscis—Abl. s.", "scorpiō—Gen.s.", "vulpēs—Dat. s."];
const nhaAnswers = [
  "animālia—<em>animal</em>",
  "avibus—<em>bird</em>",
  "canem—<em>dog</em>",
  "fēlēs—<em>cat</em>",
  "gregibus—<em>herd, flock</em>",
  "leōnēs/leaenae—<em>lion/lioness</em>",
  "ovium—<em>sheep, ewe</em>",
  "pisce—<em>fish</em>",
  "scorpiōnis—<em>scorpion</em>",
  "vulpī—<em>fox</em>",
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
