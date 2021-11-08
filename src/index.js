import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';

let newEntry;
$("form#Journal").submit(function(event) {
  event.preventDefault();
  newEntry = new Entry($("input#title").val(), $("textarea#entry").val());
  console.log($("textarea#entry").val());
  newEntry.letterCounter();
  // newEntry.wordCount();
  newEntry.getTeaser();
});
$("#vowel").click(function() {
  $("#response").text(newEntry.vowelCount);
});
$("#consonants").click(function() {
  $("#response").text(newEntry.consonantCount);
});
$("#preview").click(function() {
  $("#response").text(newEntry.teaser);
});