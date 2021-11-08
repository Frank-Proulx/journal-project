# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_

### Tests

Describe: Entry()
Test: "It will return an Entry object with properties title, body"
Code: const myEntry = new Entry("April 1st", "Dear Diary")
Expected Output: Entry {title: "April 1st", body: "Dear Diary"}

Describe: Entry.prototype.wordCounter()
Test: "It will return the number of words that the user inputs into a text field"
Code: const myEntry = new Entry("April 1st", "Dear Diary")
  myEntry.wordCounter()
Expected Output: 2

Describe: letterChecker()
Test: "It will discard any puncuation or spaces and only keep letters"
Code: letterCheck("a string!")
Expected Output: ["a", "s", "t", "r", "i", "n", "g"]

Describe: Entry.prototype.letterCounter()
Test: "It should take an array of letters and create properties in Entry holding the number of vowels and the number of consonants respectively"
Code: const myEntry = new Entry("April 1st", "Dear Diary");
  myEntry.letterCounter();
  myEntry;
Expected Output: Entry {title: "April 1st", body: "Dear Diary", vowels: 4, consonants: 5}
