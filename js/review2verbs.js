const verbsLatin = ["abesse", "adesse", "appellāre", "appropinquāre", "audēre", "augēre", "cēlāre", "cēnāre", "cogitāre",
  "cūrāre", "decēre", "dolēre", "dōnāre", "favēre", "formāre", "gaudēre", "horrēre", "imperāre", "interesse",
  "iubēre", "iūrāre", "lavāre", "licēre", "locāre", "nēcāre", "negāre", "nocēre", "nōmināre", "novāre",
  "numerāre", "oportēre", "oppugnāre", "parēre", "placēre", "plēre", "potāre", "praeesse", "properāre", "putāre",
  "respondēre", "rogāre", "solēre", "spērāre", "spīrāre", "studēre", "suādēre", "superāre", "tacēre", "temptāre", "valēre",
  "vetāre", "vulnerāre"];

const conjForms = [
  "2nd pl. present active",
  "1st s. imperfect active",
  "3rd pl. present passive",
  "2nd s. future active",
  "1st pl. imperfect active",
  "3rd s. present passive",
  "1st s. future passive",
  "2nd pl. imperfect active",
  "3rd s. imperfect passive",
  "1st s. future passive",
  "3rd s. present active",
  "1st pl. present active",
  "2nd s. present passive",
  "3rd pl. imperfect active",
  "2nd pl. future passive",
  "3rd pl. future active",
  "2nd s. present active",
  "2nd pl. future active",
  "1st pl. present active",
  "3rd s. imperfect passive",
  "3rd s. future passive",
  "2nd pl. present passive",
  "3rd s. imperfect active",
  "1st s. imperfect passive",
  "1st pl. future active",
  "3rd pl. present active",
  "3rd pl. future passive",
  "1st pl. present passive",
  "3rd pl. future passive",
  "3rd pl. imperfect passive",
  "3rd s. future active",
  "2nd pl. imperfect passive",
  "1st s. future active",
  "2nd s. future passive",
  "1st s. present active",
  "2nd s. imperfect active",
  "3rd pl. imperfect active",
  "1st pl. future active",
  "3rd s. present passive",
  "2nd s. imperfect active",
  "2nd s. imperfect active",
  "2nd s. imperfect passive",
  "3rd s. future active",
  "1st s. imperfect active",
  "3rd pl. future active",
  "2nd pl. present active",
  "1st s. present passive",
  "3rd s. imperfect active",
  "1st pl. imperfect passive",
  "2nd s. future active",
  "3rd s. present passive",
  "3rd pl. present passive"
]

const verbsAnswers = [
  "<strong>abestis</strong>, <em>y'all are absent</em>, I",
  "<strong>aderam</strong>, <em>I was present</em>, I",
  "<strong>appellantur</strong>, <em>they are called/named</em>, T",
  "<strong>appropinquābis</strong>, <em>you will approach</em>, T",
  "<strong>audēbāmus</strong>, <em>we were daring</em>, I",
  "<strong>augētur</strong>, <em>it is increased</em>, T",
  "<strong>cēlābimur</strong>, <em>we shall hide</em>, T",
  "<strong>cēnābātis</strong>, <em>y'all were dining,</em>, I",
  "<strong>cogitābātur</strong>, <em>it was (being) thought</em>, I",
  "<strong>cūrābor</strong>, <em>I shall be cared for</em>, T",
  "<strong>decet</strong>, <em>it is proper</em>, I",
  "<strong>dolēmus</strong>, <em>we hurt/grieve</em>, I+T",
  "<strong>dōnāris</strong>, <em>you are given/granted</em>, T",
  "<strong>favēbant</strong>, <em>they were favoring</em>, D",
  "<strong>formābiminī</strong>, <em>y'all will form</em>, T",
  "<strong>gaudēbunt</strong>, <em>they will rejoice</em>, I",
  "<strong>horrēs</strong>, <em>you tremble/shiver</em>, I+T",
  "<strong>imperābitis</strong>, <em>y'all will command</em>, D",
  "<strong>intersumus</strong>, <em>we are between</em>, I",
  "<strong>iubēbātur</strong>, <em>it was (being) ordered</em>, T",
  "<strong>iūrābitur</strong>, <em>it shall be sworn</em>, I+T",
  "<strong>lavāminī</strong>, <em>y'all are washed</em>, T",
  "<strong>licēbat</strong>, <em>it was permitted</em>, I",
  "<strong>locābar</strong>, <em>I was (being) placed</em>, T",
  "<strong>nēcābimus</strong>, <em>we shall kill</em>, T",
  "<strong>negant</strong>, <em>they deny</em>, T",
  "<strong>nocēbuntur</strong>, <em>they will be harmed</em>, T",
  "<strong>nōmināmur</strong>, <em>we are nominated</em>, T",
  "<strong>novābuntur</strong>, <em>they will be renewed</em>, T",
  "<strong>numerābantur</strong>, <em>they were being counted</em>, T",
  "<strong>oportēbit</strong>, <em>it will be necessary</em>, I",
  "<strong>oppugnābāminī</strong>, <em>y'all were (being) attacked</em>, T",
  "<strong>parēbō</strong>, <em>I shall obey</em>, D",
  "<strong>placēberis</strong>, <em>you will be pleased</em>, D",
  "<strong>pleō</strong>, <em>I fill</em>, T",
  "<strong>potābās</strong>, <em>you were drinking</em>, T",
  "<strong>praeerant</strong>, <em>they were in charge</em>, D",
  "<strong>properābimus</strong>, <em>we shall hurry</em>, I+T",
  "<strong>putātur</strong>, <em>it is thought</em>, I+T",
  "<strong>respondēbās</strong>, <em>you were responding</em>, I",
  "<strong>rogābāris</strong>, <em>you were (being) asked</em>, T",
  "<strong>solēmus</strong>, <em>we are accustomed</em>, I",
  "<strong>spērābit</strong>, <em>he/she will hope</em>, I",
  "<strong>spīrābam</strong>, <em>I was breathing</em>, I+T",
  "<strong>studēbunt</strong>, <em>they will be enthused (about)</em>, D",
  "<strong>suādētis</strong>, <em>y'all persuade</em>, D",
  "<strong>superāmur</strong>, <em>we are overcome</em>, T",
  "<strong>tacēbat</strong>, <em>he/she was (being) silent</em>, I",
  "<strong>temptābāmur</strong>, <em>we were (being) tried</em>, T",
  "<strong>valēbis</strong>, <em>you will fare well</em>, I",
  "<strong>vetātur</strong>, <em>it is forbidden</em>, T",
  "<strong>vulnerantur</strong>, <em>they are wounded</em>, T"
];

let verbsLength = verbsLatin.length;

function displayVerbs() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < verbsLength; i++) {
    iteration += `<li>`;
    iteration += `<span id="verb-span-${j}" class="col-5">${verbsLatin[i]}—${conjForms[i]}</span><br/>`;
    iteration += `<span id="input-span-${j}"><input id="form-${j}" type="text" size="12" placeholder="(form)"> `
    iteration += `<input id="translation-${j}" type="text" size="20" placeholder="(translated form)"> `
    iteration += `<input id="verbtype" type="text" size="5" placeholder="(type)"></span>`
    iteration += `<span id="button-span-${j}" class="col-2"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark col-2">Answer</button></span><br/>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5">${verbsAnswers[i]}</span></li><hr/>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}

function shuffle(array) {
  let k = []
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    k.push(array[i]);
  }
  return k;
}

function generateSlides() {
  let html = "";
  let verbArray = shuffle(verbsLatin)
  for (let i = 2; i <= verbArray.length; i++) {
    html += `<div id="${i}" class="item"><h1>${verbArray[i-1]}</h1></div>`;
  }
  return html;
}


