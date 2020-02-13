var randomed;
function loadWord() {
  document.getElementById("form").setAttribute("class", "formb");

  document.getElementById("hanger1").setAttribute("class", "hangervisible");
  document.getElementById("hanger2").setAttribute("class", "hangervisible");
  document.getElementById("hanger3").setAttribute("class", "hangervisible");
  document.getElementById("hanger4").setAttribute("class", "hangervisible");
  document.getElementById("hanger5").setAttribute("class", "hangervisible");

  var wordlist = [
    "COMPANY",
    "GOVERNMENT",
    "PROBLEM",
    "SYSTEM",
    "STUDENT",
    "STORY",
    "PEPPERONI",
    "BLACK",
    "OLIVE",
    "BUSINESS",
    "UNDERSTANDING",
    "KNOWLEDGE",
    "TELEVISION",
    "TEMPERATURE",
    "INVESTMENT"
  ];

  var randomWord = Math.floor(Math.random() * wordlist.length);
  randomed = wordlist[randomWord];
  var randomWordLength = wordlist[randomWord].length;

  for (i = 0; i < randomWordLength; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("letter");
    newDiv.id = "letter" + i;
    var newContent = document.createTextNode(wordlist[randomWord].charAt(i));
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById("word");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
  }
}
var miss = 0;
var count = 0;
function wordGuess() {
  var hit = 0;

  for (i = 0; i < randomed.length; i++) {
    var upperCaseInput = form.value.toUpperCase();
    if (randomed.charAt(i) === upperCaseInput) {
      document.getElementById("letter" + i).classList.add("revealed");
      hit++;
      count++;
      if (count === randomed.length) {
        setTimeout(function() {
          alert("Good job! You saved your neck");
        }, 10);
        setTimeout(function() {
          location.reload();
        }, 10);
      }
    }
  }
  if (hit === 0) {
    miss++;
    document.getElementById("miss" + miss).setAttribute("class", "missvisible");
    if (miss === 1) {
      document.getElementById("firstTime").setAttribute("class", "imgvisible");
    }
  }
  if (miss === 6) {
    setTimeout(function() {
      alert("GG. Better luck next time");
    }, 10);
    setTimeout(function() {
      location.reload();
    }, 10);
  }
  form.value = "";
}
