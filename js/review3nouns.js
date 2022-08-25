const peopleLatin = ["<u>cēnsor</u>—Nom. pl.", "centuriō—Abl. pl.", "cīvis—Gen. pl.", "cohōrs—Voc. s.",
  "coniūnx—Dat. s.", "cōnsul—Abl. pl.", "dictātor/-trīx—Gen. s.", "<u>doctor</u>—Acc. s.", "dux—Acc. pl.", "frater—Nom. pl.",
  "gēns—Gen. pl.", "homō—Dat. s.", "hostis—Dat. pl.", "imperātor/-trīx—Dat. s.",
  "īnfāns—Voc. pl.", "legiō—Dat. s.", "mater—Gen. pl.", "narrātor/-trīx—Abl. s.", "nepōs—Acc. s.",
  "<u>ōrātor</u>/-trīx—Gen. pl.", "ōrdō—Voc. s.", "pārs—Abl. pl.", "pastor/-trīx—Dat. pl.", "pater—Voc. pl.",
  "princeps—Dat. pl.", "rēx—Abl. s.", "<u>senātor</u>/-trīx—Abl. pl.", "soror—Voc. s.", "<u>spectātor</u>/-trīx—Voc. pl.",
  "uxor—Acc. pl.", "<u>victor</u>/-trīx—Nom. pl.", "virgō—Gen. s."];

const peopleAnswers = [
  "<em>censor, population counter, arbiter of public morals</em>—<strong>cēnsōrēs</strong>",
  "<em>centurion, company captain</em>—<strong>centuriōnibus</strong>",
  "<em>citizen</em>—<strong>cīvium</strong>",
  "<em>cohort, crew, battalion</em>—<strong>cohortēs</strong>",
  "<em>spouse</em>—<strong>coniugī</strong>",
  "<em>consul, chief executive</em>—<strong>cōnsulibus</strong>",
  "<em>dictator, temporary military ruler</em>—<strong>dictātōris/-trīcis</strong>",
  "<em>teacher, professor, physician</em>—<strong>doctōrem</strong>",
  "<em>leader</em>—<strong>ducēs</strong>",
  "<em>brother</em>—<strong>fratrēs</strong>",
  "<em>clan, tribe</em>—<strong>gentium</strong>",
  "<em>man, human being</em>—<strong>hominī</strong>",
  "<em>enemy, foe</em>—<strong>hostibus</strong>",
  "<em>commander, general, emperor</em>—<strong>imperātōrī</strong>",
  "<em>child, infant</em>—<strong>īnfantēs</strong>",
  "<em>legion, military division</em>—<strong>legiōnī</strong>",
  "<em>mother</em>—<strong>matrum</strong>",
  "<em>narrator, storyteller</em>—<strong>narratōre/-trīce</strong>",
  "<em>grandchild, niece, nephew</em>—<strong>nepōtem</strong>",
  "<em>orator, persuasive speaker</em>—<strong>ōrātōrum/-tricum</strong>",
  "<em>order, rank, socioeconomic class</em>—<strong>ōrdō</strong>",
  "<em>part, direction</em>—<strong>partibus</strong>",
  "<em>shepherd</em>—<strong>pastōribus/-trīcibus</strong>",
  "<em>father</em>—<strong>patrēs</strong>",
  "<em>chief, emperor</em>—<strong>prīncipibus</strong>",
  "<em>king, ruler</em>—<strong>rēge</strong>",
  "<em>senator</em>—<strong>senātōre/-trīce</strong>",
  "<em>sister</em>—<strong>soror</strong>",
  "<em>spectator, onlooker</em>—<strong>spectātōrēs/-trīcēs</strong>",
  "<em>wife</em>—<strong>uxōrēs</strong>",
  "<em>victor, conqueror</em>—<strong>victōres/-trīcēs</strong>",
  "<em>virgin, young girl</em>—<strong>virginis</strong>"
];

const divinitiesLatin = ["Apollō—Gen. s.", "Bacchus—Voc. s.", "Cerēs—Acc. s.", "Diāna—Dat. s.", "Iuppiter—Abl. s.",
  "Iūnō—Gen. s.", "Mārs—Acc. s.", "Mercūrius—Voc. s.", "Minerva—Abl. s.", "Neptūnus—Dat. s.", "Plūtō—Voc. s.",
  "Venus—Dat. s.", "Vesta—Acc. s.", "Vulcānus—Gen. s."];
const divinitiesAnswers = [
  "<strong>Apollinis</strong>—<em>Apollo/Phoebus, god of light, music, medicine, etc.</em>",
  "<strong>Bacche</strong>—<em>Bacchus/Dionysus, god of wine and revelry</em>",
  "<strong>Cererem</strong>—<em>Ceres/Demeter, goddess of grain and agriculture</em>",
  "<strong>Diānae</strong>—<em>Diana/Artemis, goddess of the moon and hunting</em>",
  "<strong>Iōve</strong>—<em>Jupiter/Zeus, king of the gods, god of the sky</em>",
  "<strong>Iūnōnis</strong>—<em>Juno/Hera, queen of the gods, goddess of marriage</em>",
  "<strong>Marte</strong>—<em>Mars/Ares, god of war</em>",
  "<strong>Mercūrī</strong>—<em>Mercury/Hermes, god of communications, travelers, and thieves</em>",
  "<strong>Minervā</strong>—<em>Minerva/Athena, goddess of wisdom and strategy</em>",
  "<strong>Neptūnō</strong>—<em>Neptune/Poseidon, god of the sea and horses</em>",
  "<strong>Plūtō</strong>—<em>Pluto/Hades, god of the underworld and mineral wealth</em>",
  "<strong>Venerī</strong>—<em>Venus/Aphrodite, goddess of love and beauty</em>",
  "<strong>Vestam</strong>—<em>Vesta/Hestia, goddess of the hearth and domestic arts</em>",
  "<strong>Vulcānī</strong>—<em>Vulcan/Hephaestus, god of metalwork and armorer of the gods</em>",
];

const nhaLatin = ["animal—Voc. pl.", "avis—Dat. pl.", "canis—Acc. s.", "fēlēs—Acc. pl.", "grēx—Abl. pl.",
  "leō/leaena—Nom. pl.", "ovis—Gen. pl.", "piscis—Abl. s.", "scorpiō—Gen.s.", "vulpēs—Dat. s."];
const nhaAnswers = [
  "<em>animal</em>—<strong>animālia</strong>",
  "<em>bird</em>—<strong>avibus</strong>",
  "<em>dog</em>—<strong>canem</strong>",
  "<em>cat</em>—<strong>fēlēs</strong>",
  "<em>herd, flock</em>—<strong>gregibus</strong>",
  "<em>lion/lioness</em>—<strong>leōnēs/leaenae</strong>",
  "<em>sheep, ewe</em>—<strong>ovium</strong>",
  "<em>fish</em>—<strong>pisce</strong>",
  "<em>scorpion</em>—<strong>scorpiōnis</strong>",
  "<em>fox</em>—<strong>vulpī</strong>"
];

const placesLatin = ["Aegyptus—Abl. s.", "Āfrica—Acc. s.", "arbor—Dat. s.", "Āsia—Dat. s.", "collis—Dat. pl.",
  "Corsica—Gen. s.", "Crēta—Voc. s.", "Cyprus—Gen. s.", "Etrūria—Dat. s.", "flūmen—Abl. s.", "fōns—Abl. pl.",
  "Iudaea—Abl. s.", "Lātium—Gen. s.", "Lusitānia—Acc. s.", "Macedōnia—Dat. s.", "mare—Acc. pl.", "Mauretānia—Dat. s.",
  "mōns—Acc. s.", "nix—Gen. s.", "nōx—Nom. pl.", "Numidia—Dat. s.", "regiō—Gen. pl.", "Syria—Abl. s.",
  "tempus—Nom. pl.", "vallēs—Acc. pl."];
const placesAnswers = [
  "<em>Egypt</em>—<strong>Aegyptō</strong>",
  "<em>Africa (northern Africa)</em>—<strong>Āfricam</strong>",
  "<em>tree</em>—<strong>arborī</strong>",
  "<em>Asia Minor (mostly modern Turkey)</em>—<strong>Āsiae</strong>",
  "<em>hill</em>—<strong>collibus</strong>",
  "<em>Corsica</em>—<strong>Corsicae</strong>",
  "<em>Crete</em>—<strong>Crēta</strong>",
  "<em>Cyprus</em>—<strong>Cyprī</strong>",
  "<em>Etruria (Tuscany)</em>—<strong>Etrūriae</strong>",
  "<em>river</em>—<strong>flūmine</strong>",
  "<em>fountain, spring</em>—<strong>fontibus</strong>",
  "<em>Judea, Israel</em>—<strong>Iudaeā</strong>",
  "<em>Latium, Lazio</em>—<strong>Lātiī</strong>",
  "<em>Portugal, Western Iberia</em>—<strong>Lusitāniam</strong>",
  "<em>Macedonia</em>—<strong>Macedōniae</strong>",
  "<em>sea, lake</em>—<strong>maria</strong>",
  "<em>Mauretania (northwestern Africa)</em>—<strong>Mauretāniae</strong>",
  "<em>mountain</em>—<strong>montem</strong>",
  "<em>snow</em>—<strong>nivis</strong>",
  "<em>night</em>—<strong>noctēs</strong>",
  "<em>Numidia (northwestern Africa)</em>—<strong>Numidiae</strong>",
  "<em>region</em>—<strong>regiōnum</strong>",
  "<em>Syria</em>—<strong>Syriā</strong>",
  "<em>time, weather</em>—<strong>tempora</strong>",
  "<em>valley</em>—<strong>vallēs</strong>"
];

const buildingsLatin = ["crux—Acc. pl.", "piscīna—Gen. s.", "pōns—Voc. pl.", "urbs—Dat. pl."];
const buildingsAnswers = [
  "<em>cross, crossroads</em>—<strong>crucēs</strong>",
  "<em>pool, fish pond</em>—<strong>piscīnae</strong>",
  "<em>bridge</em>—<strong>pontēs</strong>",
  "<em>city</em>—<strong>urbibus</strong>"
];

const commonObjectsLatin = ["clāvis—Abl. s.", "ignis—Acc. pl.", "lūmen—Abl. pl.", "<u>volūmen</u>—Voc. pl."];
const commonObjectsAnswers = [
  "<em>key</em>—<strong>clāve</strong>",
  "<em>fire</em>—<strong>ignēs</strong>",
  "<em>light</em> (usually natural)—<strong>lūminibus</strong>",
  "<em>volume, scroll</em>—<strong>volūmina</strong>"
];

const bodyMindLatin = ["<u>abdōmen</u>—Voc. pl.", "auris—Nom. pl.", "caput—Acc. pl.", "cervīx—Dat. pl.", "cōr—Abl. s.",
  "corpus—Dat. pl.", "crūs—Dat. s.", "dēns—Gen. pl.", "latus—Voc. s.", "mēns—Acc. s.", "ōs—Nom. pl.",
  "pectus—Acc. s.", "vōx—Gen. s.", "vulnus—Abl. pl."];
const bodyMindAnswers = [
  "<em>abdomen, belly</em>—<strong>abdōmina</strong>",
  "<em>ear</em>—<strong>aurēs</strong>",
  "<em>head</em>—<strong>capita</strong>",
  "<em>neck</em>—<strong>cervīcibus</strong>",
  "<em>heart</em>—<strong>corde</strong>",
  "<em>body</em>—<strong>corporibus</strong>",
  "<em>leg</em>—<strong>crūrī</strong>",
  "<em>tooth</em>—<strong>dentium</strong>",
  "<em>side</em>—<strong>latus</strong>",
  "<em>mind</em>—<strong>mentem</strong>",
  "<em>mouth</em>—<strong>ōra</strong>",
  "<em>chest, breast</em>—<strong>pectus</strong>",
  "<em>voice</em>—<strong>vocis</strong>",
  "<em>wound</em>—<strong>vulneribus</strong>"
];

const foodDrinkLatin = ["carō—Gen. s.", "lac—Abl. s.", "lēns—Nom. pl.", "nux—Voc. s.", "pānis—Dat. s.",
  "radīx—Abl. pl."];
const foodDrinkAnswers = [
  "<em>meat, flesh</em>—<strong>carnis</strong>",
  "<em>milk</em>—<strong>lacte</strong>",
  "<em>lentil</em>—<strong>lentēs</strong>",
  "<em>nut</em>—<strong>nux</strong>",
  "<em>bread</em>—<strong>pānī</strong>",
  "<em>root</em>—<strong>radīcibus</strong>"
];

const travelLatin = ["classis—Dat. s.", "iter—Nom. pl.", "nāvis—Gen. pl."];
const travelAnswers = [
  "<em>fleet, group</em>—<strong>classī</strong>",
  "<em>journey, march</em>—<strong>itinera</strong>",
  "<em>ship, boat</em>—<strong>nāvium</strong>"
]

const artScienceLatin = ["ārs—Gen. pl.", "cārmen—Nom. pl.", "lectiō—Abl. s.", "lēx—Gen. pl.", "<u>ōratiō</u>—Acc. pl.",
  "ratiō—Abl. pl."];
const artScienceAnswers = [
  "<em>art, craft, skill</em>—<strong>artium</strong>",
  "<em>song, poem</em>—<strong>cārmina</strong>",
  "<em>reading, lesson</em>—<strong>lectiōne</strong>",
  "<em>law</em>—<strong>legum</strong>",
  "<em>prayer, public speech</em>—<strong>ōrātiōnēs</strong>",
  "<em>plan, reason, calculation</em>—<strong>ratiōnibus</strong>"
];

const abstractLatin = ["amor—Gen. s.", "clāmor—Dat. pl.", "color—Acc s.", "<u>error</u>—Abl. pl.", "favor—Voc. s.",
  "genus—Nom pl.", "<u>honor</u>—Gen. pl.", "<u>horror</u>—Dat. s.", "lābor—Acc. pl.", "mōrs—Gen. s.", "nōmen—Dat. pl.",
  "pāx—Acc. s.", "<u>terror</u>—Nom. pl.", "timor—Gen. pl."];
const abstractAnswers = [
  "<em>love</em>—<strong>amōris</strong>",
  "<em>shouting, noise</em>—<strong>clāmōribus</strong>",
  "<em>color</em>—<strong>colōrem</strong>",
  "<em>error, wandering</em>—<strong>errōribus</strong>",
  "<em>favor, goodwill</em>—<strong>favor</strong>",
  "<em>kind, type</em>—<strong>genera</strong>",
  "<em>honor</em>—<strong>honōrum</strong>",
  "<em>horror, trembling</em>—<strong>horrōrī</strong>",
  "<em>labor, work, suffering</em>—<strong>lābōrēs</strong>",
  "<em>death</em>—<strong>mortis</strong>",
  "<em>(family) name</em>—<strong>nōminibus</strong>",
  "<em>peace</em>—<strong>pācem</strong>",
  "<em>terror, fright</em>—<strong>terrōrēs</strong>",
  "<em>fear</em>—<strong>timōrum</strong>"
];

let peopleLength = peopleLatin.length;
let divinitiesLength = divinitiesLatin.length;
let nhaLength = nhaLatin.length;
let placesLength = placesLatin.length;
let buildingsLength = buildingsLatin.length;
let commonObjectsLength = commonObjectsLatin.length;
let bodyMindLength = bodyMindLatin.length;
let foodDrinkLength = foodDrinkLatin.length;
let travelLength = travelLatin.length;
let artScienceLength = artScienceLatin.length;
let abstractLength = abstractLatin.length;

function displayPeople() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < peopleLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${peopleLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${peopleAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayDivinities() {
  let j = peopleLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < divinitiesLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${divinitiesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${divinitiesAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayNHA() {
  let iteration = "";
  let j = peopleLength + divinitiesLength + 1;
  let html = `<ol style="1" start="${j}">`;
  for (let i = 0; i < nhaLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${nhaLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${nhaAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayPlaces() {
  let j = peopleLength + divinitiesLength + nhaLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < placesLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${placesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${placesAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayBuildings() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < buildingsLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${buildingsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${buildingsAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayCommonObjects() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < commonObjectsLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${commonObjectsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${commonObjectsAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayBodyMind() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength + commonObjectsLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < bodyMindLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${bodyMindLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${bodyMindAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayFoodDrink() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength + commonObjectsLength + bodyMindLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < foodDrinkLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${foodDrinkLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${foodDrinkAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayTravel() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength
    + commonObjectsLength + bodyMindLength + foodDrinkLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < travelLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${travelLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${travelAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayArtScience() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength
    + commonObjectsLength + bodyMindLength + foodDrinkLength + travelLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < artScienceLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${artScienceLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${artScienceAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayAbstract() {
  let j = peopleLength + divinitiesLength + nhaLength + placesLength + buildingsLength
    + commonObjectsLength + bodyMindLength + foodDrinkLength + travelLength + artScienceLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < abstractLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${abstractLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-6">${abstractAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
