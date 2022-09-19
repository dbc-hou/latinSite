function tableOfContents() {
  var tocHTML = introLinks();
  tocHTML += volILinks();
  tocHTML += volIILinks();
  tocHTML += volIIILinks();
  tocHTML += volIVLinks();
  tocHTML += volVLinks();
  tocHTML += volVILinks();

  return tocHTML;
}

function volumeLinks() {
  let html = `<div id="main-page" class="list-group-item intro"><a href="index.html">Main Page</a></div>`;
  html += `<div id="intro-div" class="list-group-item intro" onclick="fillContentsBox(introLinks());">Introduction</div>`;
  html += `<div id="i-through-iii" class="d-flex row volume-row">`;
  html += `<span id="vol-i-span" class="list-group-item volume"  onclick="fillContentsBox(volILinks());">I</span>`;
  html += `<span id="vol-ii-span" class="list-group-item volume" onclick="fillContentsBox(volIILinks());">II</span>`;
  html += `<span id="vol-iii-span" class="list-group-item volume" onclick="fillContentsBox(volIIILinks());">III</span></div>`;
  html += `<div id="iv-through-vi" class="d-flex row volume-row">`;
  html += `<span id="vol-iv-span" class="list-group-item volume" onclick="fillContentsBox(volIVLinks());">IV</span>`;
  html += `<span id="vol-v-span" class="list-group-item volume" onclick="fillContentsBox(volVLinks());">V</span>`;
  html += `<span id="vol-vi-span" class="list-group-item volume" onclick="fillContentsBox(volVILinks());">VI</span></div>`;
  html += `<div id="volume-contents"></div>`;
  return html
}

function fillContentsBox(contents) {
  $("#volume-contents").html(contents);
}
function introLinks() {
  return `
    <ul id="intro-parts" class="list-group sublist">
      <li id="intro-main" class="list-group-item pl-2 chapter"><a id="intro-main-link" class="chapter-link" href="IntroMain.html">Vol. I Main</a></li>
      <li id="intro-prae" class="list-group-item pl-2 chapter"><a id="intro-prae-link" class="chapter-link" href="IntroPrae.html">Praelūdium</a></li>
      <li id="intro-a" class="list-group-item pl-2 chapter"><a id="intro-a-link" class="chapter-link" href="IntroA.html">A. Why Latin?</strong></li>
      <li id="intro-b" class="list-group-item pl-2 chapter"><a id="intro-b-link" class="chapter-link" href="IntroB.html">B. Evolution of Latin</a></li>
      <li id="intro-c" class="list-group-item pl-2 chapter"><a id="intro-c-link" class="chapter-link" href="IntroC.html">C. Pronunciation</a></li>
      <li id="intro-d" class="list-group-item pl-2 chapter"><a id="intro-d-link" class="chapter-link" href="IntroD.html">D. Important Facts</a></li>
      <li id="intro-e" class="list-group-item pl-2 chapter"><a id="intro-e-link" class="chapter-link" href="IntroE.html">E. Numbers/Numerals</a></li>
      <li id="intro-f" class="list-group-item pl-2 chapter"><a id="intro-f-link" class="chapter-link" href="IntroF.html">F. Conversation</a></li>
      <li id="intro-g" class="list-group-item pl-2 chapter"><a id="intro-g-link" class="chapter-link" href="IntroG.html">G. Months of the Year</a></li>
      <li id="intro-h" class="list-group-item pl-2 chapter"><a id="intro-h-link" class="chapter-link" href="IntroH.html">H. Days of the Week</a></li>
      <li id="intro-i" class="list-group-item pl-2 chapter"><a id="intro-i-link" class="chapter-link" href="IntroI.html">I. Easy Nouns</a></li>
    </ul>`
}

function volILinks() {
  return `
    <ul id="vol-i-parts" class="list-group sublist">
      <li id="i-prae" class="list-group-item pl-2 chapter"><a id="vol-i-prae-link" class="chapter-link" href="PraeludiumI.html">Praelūdium I</a></li>
      <li id="lesson01" class="list-group-item pl-2 chapter"><a id="lesson-i-link" class="chapter-link" href="LessonI.html">I. Famīliae Rōmānae</a></li>
      <li id="lesson02" class="list-group-item pl-2 chapter"><a id="lesson-ii-link" class="chapter-link" href="LessonII.html">II. Forms of Address</a></li>
      <li id="lesson03" class="list-group-item pl-2 chapter"><a id="lesson-iii-link" class="chapter-link" href="LessonIII.html">III. Conjugating Irregular Verbs</a></li>
      <li id="lesson04" class="list-group-item pl-2 chapter"><a id="lesson-iv-link" class="chapter-link" href="LessonIV.html">IV. Conjugation I Verbs</a></li>
      <li id="lesson05" class="list-group-item pl-2 chapter"><a id="lesson-v-link" class="chapter-link" href="LessonV.html">V. Ubi Est?</a></li>
      <li id="lesson06" class="list-group-item pl-2 chapter"><a id="lesson-vi-link" class="chapter-link" href="LessonVI.html">VI. Transitive Verbs and Direct Objects</a></li>
      <li id="lesson07" class="list-group-item pl-2 chapter"><a id="lesson-vii-link" class="chapter-link" href="LessonVII.html">VII. Conjugation II Verbs</a></li>
      <li id="lesson08" class="list-group-item pl-2 chapter"><a id="lesson-viii-link" class="chapter-link" href="LessonVIII.html">VIII. Place Whence, Place Whither</a></li>
      <li id="lesson09" class="list-group-item pl-2 chapter"><a id="lesson-ix-link" class="chapter-link" href="LessonIX.html">IX. Adjectives</a></li>
      <li id="lesson10" class="list-group-item pl-2 chapter"><a id="lesson-x-link" class="chapter-link" href="LessonX.html">X. Neuter Nouns</a></li>
      <li id="lesson11" class="list-group-item pl-2 chapter"><a id="lesson-xi-link" class="chapter-link" href="LessonXI.html">XI. Indirect Objects</a></li>
      <li id="lesson12" class="list-group-item pl-2 chapter"><a id="lesson-xii-link" class="chapter-link" href="LessonXII.html">XII. Recēnsus I</a></li>
    </ul>`
}

function volIILinks() {
  return `
    <ul id="vol-ii-parts" class="list-group sublist">
      <li id="ii-prae" class="list-group-item pl-2 chapter"><a id="vol-ii-prae-link" class="chapter-link" href="PraeludiumII.html">Praelūdium II</a></li>
      <li id="lesson13" class="list-group-item pl-2 chapter"><a id="lesson-xiii-link" class="chapter-link" href="LessonXIII.html">XIII. Accompaniment</a></li>
      <li id="lesson14" class="list-group-item pl-2 chapter"><a id="lesson-xiv-link" class="chapter-link" href="LessonXIV.html">XIV. Ego et Tū, Brūte</a></li>
      <li id="lesson15" class="list-group-item pl-2 chapter"><a id="lesson-xv-link" class="chapter-link" href="LessonXV.html">XV. Dative Objects</a></li>
      <li id="lesson16" class="list-group-item pl-2 chapter"><a id="lesson-xvi-link" class="chapter-link" href="LessonXVI.html">XVI. Imperative Verb Forms</a></li>
      <li id="lesson17" class="list-group-item pl-2 chapter"><a id="lesson-xvii-link" class="chapter-link" href="LessonXVII.html">XVII. Preposition Power</a></li>
      <li id="lesson18" class="list-group-item pl-2 chapter"><a id="lesson-xviii-link" class="chapter-link" href="LessonXVII.html">XVIII. Dative with Adjectives</a></li>
      <li id="lesson19" class="list-group-item pl-2 chapter"><a id="lesson-xix-link" class="chapter-link" href="LessonXIX.html">XIX. Fun with Infinitives</a></li>
      <li id="lesson20" class="list-group-item pl-2 chapter"><a id="lesson-xx-link" class="chapter-link" href="LessonXX.html">XX. Imperfect Tense (I was/were verbing)</a></li>
      <li id="lesson21" class="list-group-item pl-2 chapter"><a id="lesson-xxi-link" class="chapter-link" href="LessonXXI.html">XXI. Future Tense (I will verb)</a></li>
      <li id="lesson22" class="list-group-item pl-2 chapter"><a id="lesson-xxii-link" class="chapter-link" href="LessonXXII.html">XXII. Irregular Imperfect and Future</a></li>
      <li id="lesson23" class="list-group-item pl-2 chapter"><a id="lesson-xxiii-link" class="chapter-link" href="LessonXXIII.html">XXIII. Passive Voice Endings (I am verbed)</a></li>
      <li id="lesson24" class="list-group-item pl-2 chapter"><a id="lesson-xxiv-link" class="chapter-link" href="LessonXXIV.html">XXIV. Recēnsus II</a></li>
    </ul>`
}

function volIIILinks() {
  return `
    <ul id="vol-iii-parts" class="list-group sublist">
      <li id="iii-prae" class="list-group-item pl-2 chapter"><a id="vol-i-prae-link" class="chapter-link" href="PraeludiumIII.html">Praelūdium III</a></li>
      <li id="lesson25" class="list-group-item pl-2 chapter"><a id="lesson-xxv-link" class="chapter-link" href="LessonXXV.html">XXV. Colōrēs</a></li>
      <li id="lesson26" class="list-group-item pl-2 chapter"><a id="lesson-xxvi-link" class="chapter-link" href="LessonXXVI.html">XXVI. Superlative Adjectives</a></li>
      <li id="lesson27" class="list-group-item pl-2 chapter"><a id="lesson-xxvii-link" class="chapter-link" href="LessonXXVII.html">XXVII. Declension III (Regular)</a></li>
      <li id="lesson28" class="list-group-item pl-2 chapter"><a id="lesson-xxviii-link" class="chapter-link" href="LessonXXVIII.html">XXVIII. -or, -ōris Nouns</a></li>
      <li id="lesson29" class="list-group-item pl-2 chapter"><a id="lesson-xxix-link" class="chapter-link" href="LessonXXIX.html">XXIX. -ō, -ōnis Nouns</a></li>
      <li id="lesson30" class="list-group-item pl-2 chapter"><a id="lesson-xxx-link" class="chapter-link" href="LessonXXX.html">XXX. -x, -cis/-gis Nouns</a></li>
      <li id="lesson31" class="list-group-item pl-2 chapter"><a id="lesson-xxxi-link" class="chapter-link" href="LessonXXXI.html">XXXI. Declension III-i, Part I</a></li>
      <li id="lesson32" class="list-group-item pl-2 chapter"><a id="lesson-xxxii-link" class="chapter-link" href="LessonXXXII.html">XXXII. Declension III-i, Part II</a></li>
      <li id="lesson33" class="list-group-item pl-2 chapter"><a id="lesson-xxxiii-link" class="chapter-link" href="LessonXXXIII.html">XXXIII. Declension III-Neuter</a></li>
      <li id="lesson34" class="list-group-item pl-2 chapter"><a id="lesson-xxxiv-link" class="chapter-link" href="LessonXXXIV.html">XXXIV. Declension III Adjectives</a></li>
      <li id="lesson35" class="list-group-item pl-2 chapter"><a id="lesson-xxxv-link" class="chapter-link" href="LessonXXXV.html">XXXV. More Declension III Adjectives</a></li>
      <li id="lesson36" class="list-group-item pl-2 chapter"><a id="lesson-xxxvi-link" class="chapter-link" href="LessonXXXVI.html">XXXVI. Recēnsus III</a></li>
    </ul>`
}

function volIVLinks() {
  return `
    <ul id="vol-iv-parts" class="list-group sublist">
      <li id="iv-prae-a" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-a" class="chapter-link" href="PraeludiumIVa.html">Praelūdium IV: Principal Parts of Verbs</a></li>
      <li id="iv-prae-b" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-b" class="chapter-link" href="PraeludiumIVb.html">Praelūdium IV: Verbs into Nouns</a></li>
      <li id="iv-prae-c" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-c" class="chapter-link" href="PraeludiumIVc.html">Praelūdium IV: Verbs into Adjectives</a></li>
      <li id="iv-prae-d" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-d" class="chapter-link" href="PraeludiumIVd.html">Praelūdium IV: Adjectives into Nouns</a></li>
      <li id="lesson37" class="list-group-item pl-2 chapter"><a id="lesson-xxxvii-link" class="chapter-link" href="LessonXXXVII.html">XXXVII. Timely Nouns</a></li>
      <li id="lesson38" class="list-group-item pl-2 chapter"><a id="lesson-xxxviii-link" class="chapter-link" href="LessonXXXVIII.html">XXXVIII. Timely Adverbs</a></li>
      <li id="lesson39" class="list-group-item pl-2 chapter"><a id="lesson-xxxix-link" class="chapter-link" href="LessonXXXIX.html">XXXIX. Conjugation IV</a></li>
      <li id="lesson40" class="list-group-item pl-2 chapter"><a id="lesson-xl-link" class="chapter-link" href="LessonXL.html">XL. Conjugation III (Regular)</a></li>
      <li id="lesson41" class="list-group-item pl-2 chapter"><a id="lesson-xli-link" class="chapter-link" href="LessonXLI.html">XLI. Perfect Tense, Active</a></li>
      <li id="lesson42" class="list-group-item pl-2 chapter"><a id="lesson-xlii-link" class="chapter-link" href="LessonXLII.html">XLII. Conjugation III-i</a></li>
      <li id="lesson43" class="list-group-item pl-2 chapter"><a id="lesson-xliii-link" class="chapter-link" href="LessonXLIII.html">XLIII. Pluperfect and Future Perfect Tenses, Active</a></li>
      <li id="lesson44" class="list-group-item pl-2 chapter"><a id="lesson-xliv-link" class="chapter-link" href="LessonXLIV.html">XLIV. Comparative Adjectives</a></li>
      <li id="lesson45" class="list-group-item pl-2 chapter"><a id="lesson-xlv-link" class="chapter-link" href="LessonXLV.html">XLV. More Declension III-Neuter Nouns</a></li>
      <li id="lesson46" class="list-group-item pl-2 chapter"><a id="lesson-xlvi-link" class="chapter-link" href="LessonXLVI.html">XLVI. Comparative and Superlative Locations</a></li>
      <li id="lesson47" class="list-group-item pl-2 chapter"><a id="lesson-xlvii-link" class="chapter-link" href="LessonXLVII.html">XLVII. Asking for Directions</a></li>
      <li id="lesson48" class="list-group-item pl-2 chapter"><a id="lesson-xlviii-link" class="chapter-link" href="LessonXLVIII.html">XLVIII. Recēnsus IV</a></li>
    </ul>`
}

function volVLinks() {
  return `
    <ul id="vol-v-parts" class="list-group sublist">
      <li id="v-prae" class="list-group-item pl-2 chapter"><a id="vol-v-prae-link" class="chapter-link" href="PraeludiumV.html">Praelūdium V</a></li>
      <li id="lesson49" class="list-group-item pl-2 chapter"><a id="lesson-xlix-link" class="chapter-link" href="LessonXLIX.html">XLIX. Timely Nouns</a></li>
      <li id="lesson50" class="list-group-item pl-2 chapter"><a id="lesson-l-link" class="chapter-link" href="LessonL.html">L. Declension IV</a></li>
      <li id="lesson51" class="list-group-item pl-2 chapter"><a id="lesson-li-link" class="chapter-link" href="LessonLI.html">LI. Declension IV Neuter and Vebal Nouns</a></li>
      <li id="lesson52" class="list-group-item pl-2 chapter"><a id="lesson-lii-link" class="chapter-link" href="LessonLII.html">LII. Declension V</a></li>
      <li id="lesson53" class="list-group-item pl-2 chapter"><a id="lesson-liii-link" class="chapter-link" href="LessonLIII.html">LIII. In Exercitū Nunc Es</a></li>
      <li id="lesson54" class="list-group-item pl-2 chapter"><a id="lesson-liv-link" class="chapter-link" href="LessonLIV.html">LIV. Perfect System, Passive Voice</a></li>
      <li id="lesson55" class="list-group-item pl-2 chapter"><a id="lesson-lv-link" class="chapter-link" href="LessonLV.html">LV. Complex Compounds</a></li>
      <li id="lesson56" class="list-group-item pl-2 chapter"><a id="lesson-lvi-link" class="chapter-link" href="LessonLVI.html">LVI. More Compounds and a Complex Pronoun</a></li>
      <li id="lesson57" class="list-group-item pl-2 chapter"><a id="lesson-lvii-link" class="chapter-link" href="LessonLVII.html">LVII. Pronominal Declension</a></li>
      <li id="lesson58" class="list-group-item pl-2 chapter"><a id="lesson-lviii-link" class="chapter-link" href="LessonLVIII.html">LVIII. -dex, -fex, -spex, and -tas Nouns</a></li>
      <li id="lesson59" class="list-group-item pl-2 chapter"><a id="lesson-lix-link" class="chapter-link" href="LessonLIX.html">LIX. Nouns Having Been Verbed</a></li>
      <li id="lesson60" class="list-group-item pl-2 chapter"><a id="lesson-lx-link" class="chapter-link" href="LessonLX.html">LX. Recēnsus V</a></li>
    </ul>`
}

function volVILinks() {
  return `
    <ul id="vol-vi-parts" class="list-group sublist">
      <li id="vi-prae" class="list-group-item pl-2 chapter"><a id="vol-vi-prae-link" class="chapter-link" href="PraeludiumVI.html">Praelūdium VI</a></li>
      <li id="lesson61" class="list-group-item pl-2 chapter"><a id="lesson-lxi-link" class="chapter-link" href="LessonLXI.html">LXI. Adjectives in Review</a></li>
      <li id="lesson62" class="list-group-item pl-2 chapter"><a id="lesson-lxii-link" class="chapter-link" href="LessonLXII.html">LXII. Adjectives in Antonymic Pairs</a></li>
      <li id="lesson63" class="list-group-item pl-2 chapter"><a id="lesson-lxiii-link" class="chapter-link" href="LessonLXIII.html">LXIII. Deponent Verbs, Conjugation I</a></li>
      <li id="lesson64" class="list-group-item pl-2 chapter"><a id="lesson-lxiv-link" class="chapter-link" href="LessonLXIV.html">LXIV. Gerunds and Gerundives</a></li>
      <li id="lesson65" class="list-group-item pl-2 chapter"><a id="lesson-lxv-link" class="chapter-link" href="LessonLXV.html">LXV. Deponent Verbs, Conjungations II and III</a></li>
      <li id="lesson66" class="list-group-item pl-2 chapter"><a id="lesson-lxvi-link" class="chapter-link" href="LessonLXVI.html">LXVI. Deponent Verbs, Conjungations III-i and Iv</a></li>
      <li id="lesson67" class="list-group-item pl-2 chapter"><a id="lesson-lxvii-link" class="chapter-link" href="LessonLXVII.html">LXVII. Body Parts, Part I
      <li id="lesson68" class="list-group-item pl-2 chapter"><a id="lesson-lxviii-link" class="chapter-link" href="LessonLXVIII.html">LXVIII. Body Parts, Part II</a></li>
      <li id="lesson69" class="list-group-item pl-2 chapter"><a id="lesson-lxix-link" class="chapter-link" href="LessonLXIX.html">LXIX. Leōnēs, Tigrēsque, Ursīque! Ō Mī!</a></li>
      <li id="lesson70" class="list-group-item pl-2 chapter"><a id="lesson-lxx-link" class="chapter-link" href="LessonLXX.html">LXX. Avēs</a></li>
      <li id="lesson71" class="list-group-item pl-2 chapter"><a id="lesson-lxxi-link" class="chapter-link" href="LessonLXXI.html">LXXI. Famīlia Extenta</a></li>
      <li id="lesson72" class="list-group-item pl-2 chapter"><a id="lesson-lxxii-link" class="chapter-link" href="LessonLXXII.html">LXXII. Recēnsus VI</a></li>
    </ul>`
}
