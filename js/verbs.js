// Attach a set of endings to a verb root depending on the verb's conjugation.
// Here the endings include either thematic vowels, either short or long depending on the personal ending,
// or 'spacer' vowels for conjugation III (usually i, but also u and e).
// Notice that Conjugation III-i has similarities with both III and IV.
// The conjugation must be specified because there are pairs of verbs that are identical in their
// first-person singular (dictionary) forms but conjugate differently—e.g., volō (fly) and volō (want).
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

// Attach an active or passive infinitive ending to a verb root depending on the verb's conjugation.
// Deponent verbs will get the passive infinitive endings even when they are active.
const presentActiveInfinitiveEndings = ["āre", "ēre", "ere", "īre"]
const presentPassiveInfinitiveEndings = ["ārī", "ērī", "ī", "īrī"]

// Extract the root of a verb, not to be confused with the present stem.
// The root as used here is the stem minus any thematic vowel particular to a conjugation.
// Irregular verbs do not have predictable roots; their peculiar conjugations will be stored
// as a special field in the database.
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

// Depending on the verbs conjugation and the specified voice (active or passive),
// attach the appropriate infinitive ending to the verb root.
function formInfinitive (verb, conj, voice) {
  var infinitiveIndex;
  var myRoot = formRoot(verb,conj);
  var len = verb.length;

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
  if (verb.substring(len - 2, len) == "or") {
    return myRoot + presentPassiveInfinitiveEndings[infinitiveIndex];
  } else if (voice == "active") {
    return myRoot + presentActiveInfinitiveEndings[infinitiveIndex];
  } else {
    return myRoot + presentPassiveInfinitiveEndings[infinitiveIndex];
  }
}

// Attach the conjugational endings from the constants to a verb root depending on the verb's
// conjugation and voice.
function conjPresentTense(verb, conj, voice) {
  var conjArray = [];
  var conjugation = [];
  var len = verb.length;

  if (verb.substring(len - 1) == "t") {
    return verb;
  }
  if (voice == "active" && verb.substring(len - 1) == "ō") {
    switch (conj) {
      case "Irregular":
        return;
      case "I":
        conjArray = presentConj1Active;
        break;
      case "II":
        conjArray = presentConj2Active;
        break;
      case "III":
        conjArray = presentConj3Active;
        break;
      case "III-i":
        conjArray = presentConj3IActive;
        break;
      case "IV":
        conjArray = presentConj4Active;
    }
  } else {
    switch (conj) {
      case "Irregular":
        return;
      case "I":
        conjArray = presentConj1Passive;
        break;
      case "II":
        conjArray = presentConj2Passive;
        break;
      case "III":
        conjArray = presentConj3Passive;
        break;
      case "III-i":
        conjArray = presentConj3IPassive;
        break;
      case "IV":
        conjArray = presentConj4Passive;
    }
  }

  for (i=0; i<=conjArray.length -1; i++) {
    conjugation.push(formRoot(verb,conj) + conjArray[i]);
  }
  return conjugation;
}

console.log(conjPresentTense("misereor","II","active"));
