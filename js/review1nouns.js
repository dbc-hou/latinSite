const peopleLatin = ["agricola", "alumnus", "alumna", "aurīga", "dea", "deus", "discipula", "discipulus",
  "domina", "dominus", "famīlia", "fēmina", "fīlia", "fīlius", "incola", "magister", "magistra", "nauta",
  "philosophus", "pīrāta", "poēta", "politicus", "puella", "puer", "scrība", "vir"];

const peopleAnswers = [
  "agricolae, u.—<em>farmer</em>",
  "alumnae, f.—<em>foster daughter</em>",
  "alumnī, m.—<em>foster son</em>",
  "aurīgae, u.—<em>charioteer</em>",
  "deae, f.—<em>goddess</em>",
  "deī, m.—<em>god</em>",
  "discipulae, f.—<em>female student</em>",
  "discipulī, m.—<em>male student</em>",
  "dominae, f.—<em>lady, mistress</em>",
  "dominī, m.—<em>lord, master</em>",
  "famīliae, f.—<em>family, household</em>",
  "fēminae, f.—<em>woman, wife</em>",
  "fīliae, f.—<em>daughter</em>",
  "fīliī, m.—<em>son</em>",
  "incolae, u.—<em>inhabitant</em>",
  "magistrī, m.—<em>teacher, schoolmaster</em>",
  "magistrae, f.—<em>teacher, schoolmistress</em>",
  "nautae, u.—<em>sailor</em>",
  "philosophī, u.—<em>philosopher</em>",
  "pīrātae, u.—<em>pirate</em>",
  "poētae, u.—<em>poet</em>",
  "politicī, u.—<em>politician</em>",
  "puellae, f.—<em>girl</em>",
  "puerī, m.—<em>boy, child</em>",
  "scrībae, u.—<em>scribe, clerk</em>",
  "virī, m.—<em>man</em>"
];

const nhaLatin = ["caper", "capra", "equa", "equus", "taurus", "vacca"];
const nhaAnswers = [
  "caprī, m.—<em>billy goat</em>",
  "caprae, f.—<em>nanny goat</em>",
  "equae, f.—<em>mare, filly</em>",
  "equī, m.—<em>horse, colt</em>",
  "taurī, m.—<em>bull</em>",
  "vaccae, f.—<em>cow</em>",
];

const placesLatin = ["ager", "arēna", "caelum", "campus", "fōrum", "fundus",
  "īnsula", "Ītālia", "Lātium", "mūrus", "oceānus", "oppidum", "paenīnsula",
  "prōvincia", "Rōma", "taberna", "terra", "vīcus"];
const placesAnswers = [
  "agrī, m.—<em>field, farmland</em>",
  "arēnae, f.—<em>arena, sand</em>",
  "caelī, n.—<em>sky, heaven</em>",
  "campī, m.—<em>field, plain, battlefield</em>",
  "fōrī, n.—<em>forum, marketplace</em>",
  "fundī, m.—<em>farm, estate</em>",
  "īnsulae, f.—<em>island, tenement house</em>",
  "Ītāliae, f.—<em>Italy</em>",
  "Lātiī, n.—<em>Latium, Lazio, the region around Rome</em>",
  "mūrī, m.—<em>wall</em>",
  "oceānī, m.—<em>ocean</em>",
  "oppidī, n.—<em>walled town</em>",
  "paenīnsulae f.—<em>peninsula</em>",
  "prōvinciae, f.—<em>province, conquered territory</em>",
  "Rōmae, f.—<em>Rome</em>",
  "tabernae, f.—<em>tavern, shop, market stall</em>",
  "terrae, f.—<em>land, earth, soil</em>",
  "vīcī, m.—<em>village</em>"
];

const buildingsLatin = ["aedificium", "ātrium", "casa", "circus", "columna",
  "cubiculum", "culīna", "dormītōrium", "librārium", "stadium", "templum",
  "theātrum", "trīclīnium", "vīlla"];
const buildingsAnswers = [
  "aedificiī, n.—<em>building, structure</em>",
  "ātriī, n.—<em>atrium, open-air living room</em>",
  "casae, f.—<em>cottage, hut, house</em>",
  "circī, m.—<em>race track</em>",
  "columnae, f.—<em>column</em>",
  "cubiculī, n.—<em>bedroom</em>",
  "culīnae, f.—<em>kitchen</em>",
  "dormītōriī, n.—<em>sleeping chamber</em>",
  "librāriī, n.—<em>library, book room</em>",
  "stadiī, n.—<em>stadium, race course</em>",
  "templī, n.—<em>temple</em>",
  "theātrī, n.—<em>theatre</em>",
  "trīclīniī, n.—<em>dining room, three-sided dining area</em>",
  "vīllae, f.—<em>farmhouse, manor</em>"
];

const foodDrinkLatin = ["aqua", "asaparagus", "cēna", "cibus", "frūmentum",
  "ientāculum", "olīva", "ovum", "prandium", "vīnum"];
const foodDrinkAnswers = [
  "aquae, f.—<em>water</em>",
  "asaparagī, m.—<em>asparagus</em>",
  "cēnae, f.—<em>dinner, meal</em>",
  "cibī, m.—<em>food</em>",
  "frūmentī, n.—<em>grain</em>",
  "ientāculī, n.—<em>breakfast</em>",
  "olīvae, f.—<em>olive, olive tree</em>",
  "ovī, n.—<em>egg</em>",
  "prandiī, n.—<em>lunch, midday meal</em>",
  "vīnī, n.—<em>wine</em>"
];

const artScienceLatin = ["cultūra", "disciplīna", "doctrīna", "histōria", "liber", "lūdus",
  "mathēmatica", "medicīna", "mūsica", "nātūra", "philosophia", "pictūra", "scrīptūra", "sculptūra", "statua"];
const artScienceAnswers = [
  "cultūrae, f.—<em>culture, cultivation</em>",
  "disciplīnae, f.—<em>discipline, learning, field of study</em>",
  "doctrīnae, f.—<em>teaching</em>",
  "histōriae, f.—<em>history, true story</em>",
  "librī, m.—<em>book</em>",
  "lūdī, m.—<em>game, school</em>",
  "mathēmaticae, f.—<em>mathematics</em>",
  "medicīnae, f.—<em>the practice of medicine</em>",
  "mūsicae, f.—<em>music</em>",
  "nātūrae, f.—<em>nature, essence</em>",
  "philosophiae, f.—<em>philosophy</em>",
  "pictūrae, f.—<em>picture, painting</em>",
  "scrīptūrae, f.—<em>scripture, writing</em>",
  "sculptūrae, f.—<em>sculpture, carving</em>",
  "statuae, f.—<em>statue</em>"
];

const miscellaneousLatin = ["autumnus", "dōnum", "fābula", "fāma", "glōria", "lingua",
  "matrīmōnium", "memōria", "mīrāculum", "praemium", "responsum", "spectāculum", "spīna",
  "tōga", "tūnica", "vehiculum", "verbum", "via", "victōria", "vīta"];
const miscellaneousAnswers = [
  "autumnī, m.—<em>autumn</em>",
  "dōnī, n.—<em>gift, grant</em>",
  "fābulae, f.—<em>story, fable, fictional account</em>",
  "fāmae, f.—<em>fame, reputation</em>",
  "glōriae, f.—<em>glory</em>",
  "linguae, f.—<em>language, tongue</em>",
  "matrīmōniī, n.—<em>marriage, matrimony</em>",
  "memōriae, f.—<em>memory</em>",
  "mīrāculī, n.—<em>miracle, wondrous sight</em>",
  "praemiī, n.—<em>reward</em>",
  "responsī, n.—<em>response, reply</em>",
  "spectāculī, n.—<em>spectacle, big show, event</em>",
  "spīnae, f.—<em>spine, thorn</em>",
  "tōgae, f.—<em>toga, gown, robe</em>",
  "tūnicae, f.—<em>tunic, long shirt</em>",
  "vehiculī, n.—<em>vehicle, cart, conveyance</em>",
  "verbī, n.—<em>word</em>",
  "viae, f.—<em>road, way</em>",
  "victōriae, f.—<em>victory, conquest</em>",
  "vītae, f.—<em>life</em>"
];

let peopleLength = peopleLatin.length;
let divinitiesLength = divinitiesLatin.length;
let nhaLength = nhaLatin.length;
let placesLength = placesLatin.length;
let buildingsLength = buildingsLatin.length;
let foodLength = foodDrinkLatin.length;
let learningLength = artScienceLatin.length;
let miscLength = miscellaneousLatin.length

function displayPeople() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < peopleLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${peopleLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${peopleAnswers[i]}</strong></span></li>`;
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
    iteration += `<span id="noun-span-${j}" class="col-2">${nhaLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${nhaAnswers[i]}</strong></span></li>`;
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
    iteration += `<span id="noun-span-${j}" class="col-2">${placesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${placesAnswers[i]}</strong></span></li>`;
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
    iteration += `<span id="noun-span-${j}" class="col-2">${buildingsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${buildingsAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayFoodDrink() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < foodLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${foodDrinkLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${foodDrinkAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayLearning() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + foodLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < learningLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${artScienceLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${artScienceAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function displayMiscellany() {
  let j = peopleLength + nhaLength + placesLength + buildingsLength + foodLength + learningLength + 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";
  for (let i = 0; i < miscLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${miscellaneousLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${miscellaneousAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
