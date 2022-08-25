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

const placesLatin = ["Aegyptus—Abl. s.", "Āfrica—Acc. s.", "arbor—Dat. s.", "Āsia—Dat. s.", "collis—Dat. pl.",
  "Corsica—Gen. s.", "Crēta—Voc. s.", "Cyprus—Gen. s.", "Etrūria—Dat. s.", "flūmen—Abl. s.", "fōns—Abl. pl.",
  "Iudaea—Abl. s.", "Lātium—Gen. s.", "Lusitānia—Acc. s.", "Macedōnia—Dat. s.", "mare—Acc. pl.", "Mauretānia—Dat. s.",
  "mōns—Acc. s.", "nix—Gen. s.", "nōx—Nom. pl.", "Numidia—Dat. s.", "regiō—Gen. pl.", "rōsa—Abl. pl.", "Syria—Abl. s.",
  "tempus—Nom. pl.", "vallēs—Acc. pl."];
const placesAnswers = [
  "Aegyptō—<em>Egypt</em>",
  "Āfricam—<em>Africa (northern Africa)</em>",
  "arborī—<em>tree</em>",
  "Āsiae—<em>Asia Minor (mostly modern Turkey)</em>",
  "collibus—<em>hill</em>",
  "Corsicae—<em>Corsica</em>",
  "Crēta—<em>Crete</em>",
  "Cyprī—<em>Cyprus</em>",
  "Etrūriae—<em>Etruria (Tuscany)</em>",
  "flūmine—<em>river</em>",
  "fontibus—<em>fountain, spring</em>",
  "Iudaeā—<em>Judea, Israel</em>",
  "Lātiī—<em>Latium, Lazio</em>",
  "Lusitāniam—<em>Portugal, Western Iberia</em>",
  "Macedōniae—<em>Macedonia</em>",
  "maria—<em>sea, lake</em>",
  "Mauretāniae—<em>Mauretania (northwestern Africa)</em>",
  "montem—<em>mountain</em>",
  "nivis—<em>snow</em>",
  "noctēs—<em>night</em>",
  "Numidiae—<em>Numidia (northwestern Africa)</em>",
  "regiōnum—<em>region</em>",
  "Syriā—<em>Syria</em>",
  "tempora—<em>time, weather</em>",
  "vallēs—<em>valley</em>",
];

const buildingsLatin = ["crux—Acc. pl.", "piscīna—Gen. s.", "pōns—Voc. pl.", "urbs—Dat. pl."];
const buildingsAnswers = [
  "crucēs—<em>cross, crossroads</em>",
  "piscīnae—<em>pool, fish pond</em>",
  "pontēs—<em>bridge</em>",
  "urbibus—<em>city</em>"
];

const commonObjectsLatin = ["clāvis—Abl. s.", "ignis—Acc. pl.", "lūmen—Abl. pl.", "<u>volūmen</u>—Voc. pl."];
const commonObjectsAnswers = [
  "clāve—<em>key</em>",
  "ignēs—<em>fire</em>",
  "lūminibus—<em>light</em> (usually natural)",
  "volūmina—<em>volume, scroll</em>"
];

const bodyMindLatin = ["<u>abdōmen</u>—Voc. pl.", "auris—Nom. pl.", "caput—Acc. pl.", "cervīx—Dat. pl.", "cōr—Abl. s.",
  "corpus—Dat. pl.", "crūs—Dat. s.", "dēns—Gen. pl.", "latus—Voc. s.", "mēns—Acc. s.", "ōs—Nom. pl.",
  "pectus—Acc. s.", "vōx—Gen. s.", "vulnus—Abl. pl."];
const bodyMindAnswers = [
  "abdōmina—<em>abdomen, belly</em>",
  "aurēs—<em>ear</em>",
  "capita—<em>head</em>",
  "cervīcibus—<em>neck</em>",
  "corde—<em>heart</em>",
  "corporibus—<em>body</em>",
  "crūrī—<em>leg</em>",
  "dentium—<em>tooth</em>",
  "latus—<em>side</em>",
  "mentem—<em>mind</em>",
  "ōra—<em>mouth</em>",
  "pectus—<em>chest, breast</em>",
  "vocis—<em>voice</em>",
  "vulneribus—<em>wound</em>"
];

const foodDrinkLatin = ["carō—Gen. s.", "lac—Abl. s.", "lēns—Nom. pl.", "nux—Voc. s.", "pānis—Dat. s.",
  "radīx—Abl. pl."];
const foodDrinkAnswers = [
  "carnis—<em>meat, flesh</em>",
  "lacte—<em>milk</em>",
  "lentēs—<em>lentil</em>",
  "nux—<em>nut</em>",
  "pānī—<em>bread</em>",
  "radīx—<em>root</em>"
];

const travelLatin = ["classis—Dat. s.", "iter—Nom. pl.", "nāvis—Gen. pl."];
const travelAnswers = [
  "classī—<em>fleet, group</em>",
  "itinera—<em>journey, march</em>",
  "nāvium—<em>ship, boat</em>"
]

const artScienceLatin = ["ārs—Gen. pl.", "cārmen—Nom. pl.", "lectiō—Abl. s.", "lēx—Gen. pl.", "<u>ōratiō</u>—Acc. pl.",
  "ratiō—Abl. pl.", "scientia—Dat. s."];
const artScienceAnswers = [
  "artium—<em>art, craft, skill</em>",
  "cārmina—<em>song, poem</em>",
  "lectione—<em>reading, lesson</em>",
  "legum—<em>law</em>",
  "ōrātiōnēs—<em>prayer, public speech</em>",
  "ratiōnibus—<em>plan, reason, calculation</em>"
];

const abstractLatin = ["amor—Gen. s.", "clāmor—Dat. pl.", "color—Acc s.", "<u>error</u>—Abl. pl.", "favor—Voc. s.",
  "genus—Nom pl.", "<u>honor</u>—Gen. pl.", "<u>horror</u>—Dat. s.", "lābor—Acc. pl.", "mōrs—Gen. s.", "nōmen—Dat. pl.",
  "pāx—Acc. s.", "<u>terror</u>—Nom. pl.", "timor—Gen. pl."];
const abstractAnswers = [
  "amōris—<em>love</em>",
  "clāmōribus—<em>shouting, noise</em>",
  "colōrem—<em>color</em>",
  "errōribus—<em>error, wandering</em>",
  "favor—<em>favor</em>",
  "genera—<em>kind, type</em>",
  "honōrum—<em>honor</em>",
  "horrōrī—<em>horror, trembling</em>",
  "lābōrēs—<em>labor, work, suffering</em>",
  "mortis—<em>death</em>",
  "nōminibus—<em>(family) name</em>",
  "pācem—<em>peace</em>",
  "terrōrēs—<em>terror, fright</em>",
  "timōrum—<em>fear</em>"
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
