const adjectivesLatin = ["bonus/-a/-um", "centēsimus/-a/-um", "centum", "decem", "decimus/-a/-um", "duo/duae/duo", "Ītālus/-a/-um",
  "laetus/-a/-um", "Lātīnus/-a/-um", "magnus/-a/-um", "malus/-a/-um", "meus/-a/-um", "miser/-era/-erum", "multī/-ae/-a", "multus/-a/-um",
  "noster/-tra/-trum", "nōnus/-a/-um", "novem", "octāvus/-a/-um", "octō", "parvus/-a/-um", "paucī/-ae/-a",
  "prīmus/-a/-um", "quartus/-a/-um", "quattuor", "quīnque", "quīntus/-a/-um", "Rōmānus/-a/-um",
  "secundus/-a/-um", "septem", "septimus/-a/-um", "sex", "sextus/-a/-um", "tertius/-a/-um", "trēs/trēs/tria", "tuus/-a/-um",
  "ūnus/-a/-um", "vester/-tra/-trum", "vīcēsimus/-a/-um", "vīgintī"];

const adjectivesAnswers = [
  "<em>good</em>",
  "<em>hundredth</em>",
  "<em>one hundred (C)</em>",
  "<em>tenth</em>",
  "<em>ten (X)</em>",
  "<em>two (II)</em>",
  "<em>Italian, of Italy</em>",
  "<em>happy, fortunate</em>",
  "<em>Latin, of Latium (Lazio)</em>",
  "<em>great, large</em>",
  "<em>bad, wicked</em>",
  "<em>my, mine</em>",
  "<em>sad, wretched</em>",
  "<em>many</em>",
  "<em>much</em>",
  "<em>our, ours</em>",
  "<em>ninth</em>",
  "<em>nine (IX or VIIII)</em>",
  "<em>eighth</em>",
  "<em>eight (VIII)</em>",
  "<em>small</em>",
  "<em>few, a few</em>",
  "<em>first</em>",
  "<em>fourth</em>",
  "<em>four (IV or IIII)</em>",
  "<em>five (V)</em>",
  "<em>fifth</em>",
  "<em>Roman, of Rome</em>",
  "<em>second, following</em>",
  "<em>seven (VII)</em>",
  "<em>seventh</em>",
  "<em>six (VI)</em>",
  "<em>sixth</em>",
  "<em>third</em>",
  "<em>three (III)</em>",
  "<em>your, yours (s.), thy, thine</em>",
  "<em>one (I)</em>",
  "<em>your, yours (pl.), y'all's</em>",
  "<em>twentieth</em>",
  "<em>twenty (XX)</em>",
];

let adjectivesLength = adjectivesLatin.length;

function displayAdjectives() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < adjectivesLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-4">${adjectivesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-4"><strong>${adjectivesAnswers[i]}</strong></span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
