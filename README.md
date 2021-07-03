# Team-Profile-Generator-

* Team Profile Generator is a command line application that generates a Team Profile and creates code for a web page to display that information. Each user or "Employee" will be prompted with questions for thier name,title, and email. Depending if they are a Manager, Intern, or other questions will be prompted.  Once the they are finished entering thier informationman HTML is popluated with the finished Team Profile that can be viewed on the browser. 

# Built With: 
* Node.js
* JavaScript
* Bootstrap
* CSS 
* HTML


## Constructing the tests: 
For the tests I created four seperate test.js files:
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
In each I file I created tests for corresponding questions that were neccisary to gain the information to build each profile.
The Employee test was the standered test that tesed questions that all the employees would be asked. Those tests wer for the questions for the name, id , and email.
For the Engineer, Intern, Manager, additional questions will be tested.
For Engineer a test will be done for a question requsting a gihub user name.
For Intern a test will be done for a question requesting for thier school.
For Manager a test will be done for a question requestion for the office number.

## Constructing the classes and methods for the tests in .js files:
Each test file has a corresponding .js file:
Employee.js
Engineer.js
Intern.js
Manager.js

In each file a class was created with a costructer function that contained methods that corresponded with the each test and the questions that they were testing. As expected, Employee has a class and methods for name,id,email.  Engineer has class and methods for questions about gitgub user info.  Intern has a class and methods for shchool. Manager has a class and methods for office Number.
The Manager, Intern, and Engineer classes build off of the Employee class. To be able to do that I used "extends" and "super" keywords.

## Constructing the generateHTML:
I created a function called createHTML that I used to generate the HTML code that was nesiccary to populate the index.html file so that the Team profiles could be displayed on the browser. Using back ticks and template literal's to embed the HTML and populate the areas of the HTML with the infromation given by the users responses.  In the HTML I hard coded basic boiler plate code plus links to for the boostrap CDN and my style.css file. I used cards from bootstrap to encase each indivdual profile.  The beginnig of the funciton I loop through the infromation given by the user using a "switch statement" to see if the they were adding an Engineer or an Intern.  Since there would be only one Manager that card was hard coded in. Depending if and how many Engineer's and or Intern's the user created those cards would be generated and placed after the Manager card.  All of that code was stored in a function and exported to be used in the index.js file. 

## Constructing the index.js:
To begin I started with requiring the following:
inqurer
fs
Employee.js
Engineer.js
Intern.js
Manager.js
generateHTML.js

I started by creating an empty array called data. Then I created 4 array's of objectos, one for each of the employee types and thier questions as well as one for the menue questions. Each had a type name and message keys. All of them and messages that asked questions for name, id, and email.  The managerQuestions had an addtional question for office nuber. The engineerQuestions had addtional question git hub user name. The internQuestions had an additonal question for school.   The menuQuestions were given a list of options to choose from and those were: " "Add an Engineer", "Add an Intern", or "Finished adding new Employee's."  At the end I created functions that corresponded with each oject of arrays to push that users response to those questions to the empty array called "data" at the beggining top of the file.  From there I wrote a "write to file" funciton that passes the data array as a paramter and is called when the user chooses the "Finished adding new Employee's" menue option.  That data array is also used in generateHTMLfile in the template literals to populate the areas of the HTML that changes depending on the user input. 






