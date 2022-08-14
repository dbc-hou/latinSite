const verbsLatin = ["adōrāre", "amāre", "ambulāre", "clāmāre", "dare", "dēbēre", "docēre", "equitāre",
  "errāre", "esse", "fiērī", "habēre", "habitāre", "iacēre", "īre", "iuvāre", "lābōrāre", "laudāre",
  "līberāre", "manēre", "monēre", "mōnstrāre", "movēre", "narrāre", "natāre", "nāvigāre", "nōlle", "nūntiare",
  "occupāre", "ōrāre", "parāre", "portāre", "posse", "prohibēre", "pugnāre", "ridēre", "saltāre", "salūtāre",
  "sedēre", "servāre", "spectāre", "stāre", "tenēre", "terrēre", "timēre", "velle", "vidēre", "vocāre", "volāre"];

const verbsAnswers = [
  "<em>to worship, to pray to</em>",
  "<em>to love, to like</em>",
  "<em>to walk</em>",
  "<em>to shout</em>",
  "<em>to give</em>",
  "<em>to owe, to be obligated (ought)</em>",
  "<em>to teach</em>",
  "<em>to to ride (a horse)</em>",
  "<em>to wander, to stray, to err</em>",
  "<em>to be</em>",
  "<em>to become, to be made</em>",
  "<em>to have, to hold</em>",
  "<em>to inhabit, to dwell</em>",
  "<em>to lie (in place)</em>",
  "<em>to go</em>",
  "<em>to help</em>",
  "<em>to work, to suffer</em>",
  "<em>to praise</em>",
  "<em>to liberate, to set free</em>",
  "<em>to stay</em>",
  "<em>to warn, to advise</em>",
  "<em>to show, to point out</em>",
  "<em>to move</em>",
  "<em>to tell, to relate</em>",
  "<em>to swim, to float</em>",
  "<em>to sail</em>",
  "<em>to not want</em>",
  "<em>to announce, to report</em>",
  "<em>to seize</em>",
  "<em>to pray, to plead, to speak publicly</em>",
  "<em>to prepare</em>",
  "<em>to carry</em>",
  "<em>to be able</em>",
  "<em>to prevent, to stop</em>",
  "<em>to fight</em>",
  "<em>to laugh, to laugh at</em>",
  "<em>to leap, to dance</em>",
  "<em>to greet</em>",
  "<em>to sit</em>",
  "<em>to keep, to guard</em>",
  "<em>to look at, to watch</em>",
  "<em>to stand (in place)</em>",
  "<em>to hold, to have</em>",
  "<em>to frighten</em>",
  "<em>to fear, to be afraid of</em>",
  "<em>to want</em>",
  "<em>to see</em>",
  "<em>to call, to summon</em>",
  "<em>to fly</em>",
];

let verbsLength = verbsLatin.length;

function displayVerbs() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < verbsLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${verbsLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${verbsAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
