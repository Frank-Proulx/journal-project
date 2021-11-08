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

