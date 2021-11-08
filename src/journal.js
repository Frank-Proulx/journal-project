function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCounter = function() {
  return this.body.split(" ").length;
};