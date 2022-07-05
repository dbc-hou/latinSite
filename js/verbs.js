const presentConj1Active = ["ō", "ās", "at", "āmus", "ātis", "ant"];
const presentConj1Passive = ["or", "āris", "ātur", "āmur", "āminī", "antur"];
const presentConj2Active = ["eō", "ēs", "et", "ēmus", "ētis", "ent"]
const presentConj2Passive = ["eor", "ēris", "ētur", "ēmur", "ēminī", "entur"];
const presentConj3Active = ["ō", "is", "it", "imus", "itis", "unt"];
const presentConj3Passive = ["or", "eris", "itur", "imur", "iminī", "untur"];
const presentConj3IActive = ["iō", "is", "it", "imus", "itis", "iunt"];
const presentConj3IPassive = ["ior", "ieris", "itur", "imur", "iminī", "iuntur"];
const presentConj4Active = ["iō", "īs", "it", "īmus", "ītis", "iunt"];
const presentConj4Passive = ["ior", "īris", "ītur", "īmur", "īminī", "iuntur"];
const presentActiveInfinitiveEndings = ["āre", "ēre", "ere", "īre"]
const presentPassiveInfinitiveEndings = ["ārī", "ērī", "ī", "īrī"]

function formRoot(verb, conj) {
  var len = verb.length
  var lastLetter = verb.substring(len - 1);
  var lastTwoLetters = verb.substring(len - 2, len);
  var lastThreeLetters = verb.substring(len - 3, len);
  var minusLastLetter = verb.substring(0,len - 1);
  var minusLastTwoLetters = verb.substring(0,len - 2);
  var minusLastThreeLetters = verb.substring(0,len - 3);

  if (conj == "Irregular") {
    return "";
  }
  if (lastThreeLetters == "eor" || lastThreeLetters == "ior") {
    return minusLastThreeLetters;
  } else if (lastTwoLetters == "eō" || lastTwoLetters == "iō" || lastTwoLetters == "or" || lastLetter == "t") {
    return minusLastTwoLetters;
  } else if(lastLetter == "ō") {
    if (conj == "I" || conj == "III") {
      return minusLastLetter;
    }
  }
}

function formInfinitive (verb, conj, voice) {
  var infinitiveIndex;
  var myRoot = formRoot(verb,conj);
  switch (conj) {
    case "Irregular":
      return;
    case "I":
      infinitiveIndex = 0;
      break;
    case "II":
      infinitiveIndex = 1;
      break;
    case "III":
      infinitiveIndex = 2;
      break;
    case "III-i":
      infinitiveIndex = 2;
      break;
    case "IV":
      infinitiveIndex = 3;
  }
  if (voice == "active") {
    return myRoot + presentActiveInfinitiveEndings[infinitiveIndex];
  } else {
    return myRoot + presentPassiveInfinitiveEndings[infinitiveIndex];
  }
}

console.log(formInfinitive("mereor","II","passive"))
