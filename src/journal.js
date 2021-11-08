export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCounter = function() {
  this.wordCount = this.body.split(" ").length;
};

export function letterChecker(string) {
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
  for (let i = 0; i < vowelArray.length; i++) {
    for (let j = 0; j < lowercaseLetterArray.length; j++) {
      if (lowercaseLetterArray[j] === vowelArray[i]) {
        vowelCount++;
      }
    }
  }
  this.vowelCount = vowelCount;
  this.consonantCount = letterArray.length - vowelCount;
};

Entry.prototype.getTeaser = function() {
  let wordArray = this.body.split(" ").slice(0, 8);
  let element = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].charAt(wordArray[i].length - 1) == ".") {
      element = wordArray.slice(0, i);
      this.teaser = element.join(" ");
    } else {
      this.teaser = wordArray.join(" ");
    }
  }
};