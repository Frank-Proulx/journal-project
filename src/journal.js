function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCounter = function() {
  return this.body.split(" ").length;
};

function letterChecker(string) {
  let checking = string.split('');
  let checked = [];
  checking.forEach(function(element) {
    if (element.toLowerCase() != element.toUpperCase()) {
      checked.push(element);
    }
  });
  return checked;
}

Entry.prototype.letterCounter = function() {
  let letterArray = letterChecker(this.body);
  let lowercaseLetterArray = letterArray.join("").toLowerCase().split("");
  let vowelArray = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantCount = 0;
  for (i = 0; i < vowelArray.length; i++) {
    for (j = 0; j < lowercaseLetterArray.length; j++) {
      if (lowercaseLetterArray[j] === vowelArray[i]) {
        vowelCount++;
      }
    }
  }
  this.vowelCount = vowelCount;
  this.consonantCount = letterArray.length - vowelCount;
};
