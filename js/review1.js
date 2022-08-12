const peopleLatin = ["agricola", "alumnus", "alumna", "aurīga", "dea", "deus", "discipula", "discipulus",
  "domina", "dominus", "famīlia", "fēmina", "fīlia", "fīlius", "incola", "magister", "magistra", "nauta",
  "philosophus", "pīrāta", "poēta", "politicus", "puella", "puer", "scrība", "vir"];
const peopleAnswers = [
  "agricolae, u.—farmer",
  "alumnae, f.—foster daughter",
  "alumnī, m.—foster son",
  "aurīgae, u.—charioteer",
  "deae, f.—goddess",
  "deī, m.—god",
  "discipulae, f.—female student",
  "discipulī, m.—male student",
  "dominae, f.—lady, mistress",
  "dominī, m.—lord, master",
  "famīliae, f.—family, household",
  "fēminae, f.—woman, wife",
  "fīliae, f.—daughter",
  "fīliī, m.—son",
  "incolae, u.—inhabitant",
  "magistrī, m.—teacher, schoolmaster",
  "magistrae, m.—teacher, schoolmistress",
  "nautae, u.—sailor",
  "philosophī, u.—philosopher",
  "pīrātae, u.—pirate",
  "poētae, u.—poet",
  "politicī, u.—politician",
  "puellae, f.—girl",
  "puer, m.—boy, child",
  "scrībae, u.—scribe, clerk",
  "vir, m.—man"
]

function displayPeople() {
  let html = `<ol style="1" start="1">`;
  let iteration = "";
  let j = 1;
  for (let i = 0; i < peopleLatin.length; i++) {
    iteration += `<li><div class="row" id="li-${j}" style="width: 100%; height: 50px">`;
    iteration += `<span id="noun-span-${j}" class="col-2">${peopleLatin[i]}</span>`;
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span>`;
    iteration += `<span id="vocab${j}" class="vocab-span col-5"><strong>${peopleAnswers[i]}</strong></span></li>`;
    j++;
    console.log(iteration);
  }
  html += iteration;
  html += "</ol>";
  return html;
}
