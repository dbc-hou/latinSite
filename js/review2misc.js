const miscLatin = ["ante", "anteā", "antequam", "apud", "atque", "atque..atque", "autem", "circum", "contrā", "ego",
  "ergō", "igitur", "inter", "intereā", "interim", "nam", "neque", "neque..neque", "nisi", "nōs", "ob", "per",
  "post", "posteā", "postquam", "praeter", "prope", "propter", "proptereā", "quod", "quōmodō?", "sē", "sī",
  "tamen", "trāns", "tū", "vel", "vel..vel", "vōs"];

const miscType = ["preposition", "adverb", "conjunction", "preposition", "conjunction", "conjunction", "conjunction",
  "preposition", "preposition", "pronoun", "conjunction", "conjunction", "preposition", "adverb", "adverb",
  "conjunction", "conjunction", "conjunction", "conjunction", "pronoun", "preposition", "preposition", "preposition",
  "adverb", "conjunction", "preposition", "preposition", "preposition", "adverb", "conjunction", "adverb", "pronoun",
  "conjunction", "conjunction", "preposition", "pronoun", "conjunction", "conjunction", "pronoun"]

const miscAnswers = [
  "<em>before, in front of</em>",
  "<em>beforehand, previously</em>",
  "<em>before</em>",
  "<em>among, admist</em>",
  "<em>and also</em>",
  "<em>both..and</em>",
  "<em>however</em> (postpositive)",
  "<em>around</em>",
  "<em>against, facing</em>",
  "<em>I</em>",
  "<em>therefore</em> (postpositive)",
  "<em>therefore</em> (postpositive)",
  "<em>between, among</em>",
  "<em>meanwhile, for the time being</em>",
  "<em>meanwhile, for the time being</em>",
  "<em>for, because</em>",
  "<em>neither, and not</em>",
  "<em>neither..nor</em>",
  "<em>unless, if not, except</em>",
  "<em>we</em>",
  "<em>because of, facing</em>",
  "<em>through</em>",
  "<em>after, behind</em>",
  "<em>afterward</em>",
  "<em>after, following</em>",
  "<em>beyond</em>",
  "<em>near</em>",
  "<em>because of</em>",
  "<em>for this/that/these/those reason(s)</em>",
  "<em>because</em>",
  "<em>how?</em>",
  "<em>--self/selves</em> (reflexive)",
  "<em>if</em>",
  "<em>nevertheless</em> (postpositive)",
  "<em>across, over</em>",
  "<em>you, thou</em>",
  "<em>or</em> (inclusive)",
  "<em>either..or</em> (inclusive)",
  "<em>you, ye, y'all</em>",
];

let miscLength = miscLatin.length;

function displayMisc() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < miscLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="misc-span-${j}" class="col-3">${miscLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="col-6" style="margin-left: 10px; display: none">${miscType[i]}—${miscAnswers[i]}</span>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
