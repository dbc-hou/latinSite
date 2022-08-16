const adjectivesLatin = ["amīcus/-a/-um", "angustus/-a/-um", "antīquus/-a/-um", "aquilīnus/-a/-um", "asinīnus/-a/-um",
  "benīgnus/-a/-um", "bovīnus/-a/-um", "Britānnus/-a/-um", "cervīnus/-a/-um", "Dācus/-a/-um", "equīnus/-a/-um",
  "Eurōpaeus/-a/-um", "Gallus/-a/-um", "Germānus/-a/-um", "Graecus/-a/-um", "Helvētius/-a/-um", "Hispānus/-a/-um",
  "Illyrius/-a/-um", "inimīcus/-a/-um", "lātus/-a/-um", "longinquus/-a/-um",
  "longus/-a/-um", "novus/-a/-um", "porcīnus/-a/-um", "propinquus/-a/-um", "pulcher/-chra/-chrum",
  "Sardus/-a/-um", "Siculus/-a/-um", "suus/-a/-um", "taurīnus/-a/-um", "Thrāx", "vaccīnus/-a/-um", "validus/-a/-um"];

const adjectivesAgreeWith = ["imperium", "gladiō", "amīcitiam", "puer (2)", "nautam", "nūntī (2)", "incolārum",
  "populōs", "fīliās", "auxilia", "deīs", "patriae", "silvārum", "portīs", "aquilā", "lectōrum", "rēgīna",
  "responsīs", "scūtum", "porcō", "locī", "sagittīs", "servābus", "magistrōs", "pugnae", "asinōs", "decentiā",
  "beneficī", "angustiārum", "scribae (2)", "pecūnia", "dōna", "cerve"]

const adjectivesAnswers = [
  "<em>friendly</em>—<strong>amīcum</strong>",
  "<em>narrow</em>—<strong>angustō</strong>",
  "<em>ancient, of old</em>—<strong>antīquam</strong>",
  "<em>eagle-like</em>—<strong>aquilīnus, aquilīne</strong>",
  "<em>donkey-like</em>—<strong>asinīnum/-am</strong>",
  "<em>kindly</em>—<strong>benīgnī, benīgne</strong>",
  "<em>cattle-like</em>—<strong>bovīnōrum/-ārum</strong>",
  "<em>British, Briton</em>—<strong>Britānnōs</strong>",
  "<em>deer-like</em>—<strong>cervīnās</strong>",
  "<em>Dacian</em>—<strong>Dāca</strong>",
  "<em>horse-like</em>—<strong>equīnīs</strong>",
  "<em>European</em>—<strong>Eurōpaeae</strong>",
  "<em>Gallic, Celtic</em>—<strong>Gallārum</strong>",
  "<em>German, Germanic</em>—<strong>Germānīs</strong>",
  "<em>Greek</em>—<strong>Graecā</strong>",
  "<em>Helvetia, Swiss</em>—<strong>Helvētiōrum</strong>",
  "<em>Spanish</em>—<strong>Hispāna</strong>",
  "<em>Illyrian</em>—<strong>Illyriīs</strong>",
  "<em>unfriendly</em>—<strong>inimīcum</strong>",
  "<em>wide, broad</em>—<strong>lātō</strong>",
  "<em>far away</em>—<strong>longinquī</strong>",
  "<em>long</em>—<strong>longīs</strong>",
  "<em>new, strange</em>—<strong>novīs</strong>",
  "<em>pig-like</em>—<strong>porcīnōs</strong>",
  "<em>nearby, close (to)</em>—<strong>propinquae</strong>",
  "<em>beautiful, handsome</em>—<strong>pulchrōs</strong>",
  "<em>Sardinian (V)</em>—<strong>Sardā</strong>",
  "<em>Sicilian</em>—<strong>Sicule</strong>",
  "<em>his/her/its/their own</em>—<strong>suārum</strong>",
  "<em>bull-like</em>—<strong>taurīnī/-ae, taurīnō/-ae</strong>",
  "<em>Thracian</em>—<strong>Thrāx</strong>",
  "<em>cow-like</em>—<strong>vaccīna</strong>",
  "<em>strong, healthy</em>—<strong>valide</strong>",
];

let adjectivesLength = adjectivesLatin.length;

function displayAdjectives() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < adjectivesLength; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-3">${adjectivesLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="agrees-with-${j}" class="col-2" style="margin-left: 10px">${adjectivesAgreeWith[i]}</span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-4">${adjectivesAnswers[i]}</span></li>`;
    j++;
  }
  html += iteration;
  html += "</ol>";
  return html;
}
