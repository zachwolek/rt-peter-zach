### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The Rancid Tomatillos app helps users discover new movies. Upon page load, the app renders a series of movie cards containing data from an API call. Each movie card displays the movie poster, title, release date, movie rating, and button to give the user the option to see more movie data. The user has the ability to filter movies by either title or genre. Upon selection of the individual movie data, a modal is rendered to display the movie's genres, revenue, budget, runtime, rating, and description. The user has the ability to return to the main page from the individiual movie page to browse for more movies. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Access the form here: https://github.com/zachwolek/rt-peter-zach
2) Copy the SSH repository URL git@github.com:zachwolek/rt-peter-zach.git
3) Open terminal and 'cd' into the directory you wish to clone 
4) Clone the repository by submitting `git clone git@github.com:zachwolek/rt-peter-zach.git`

For Testing:
1) cd into the directory and run 'npm start' in the terminal
2) In another tab in your terminal, run 'npm run cy:open" 
3) Choose e2e testing
4) Run on your browser of choice (Preferebly Chrome)
5) Select 'rt-test.cy.js' in the browser

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Filter By Title](!(https://github.com/user-attachments/assets/504c0d16-e749-4998-afdd-286dfc7b8cd6)
)
The app has a live search function to filter movies based on inclusion of title. 

As can also be seen in this screenshot, the border of each movie presented is dependant on movie review. (Under 4: Red, 4 to under 7: Yellow, 7+: Green)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in two parts over Weeks 13 and Week 14 of Turing's School of Software and Design. This project was the introductory project of Turing "Module 3", with each module being six weeks in length. The first assignment of this app was to begin building a basic React app, and the second half was to convert the page into React Router functions with a "Choose Your Own Adventure" path for stretch tech (filtration options for data and responsive layouts were chosen) 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Peter Kim: https://github.com/peterkimpk1
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a single app using React and React Router to simulate a multi-page app.  

Technologies across the project involved React, JSX, Cypress, React Hooks, PropTypes, HTML, JS/ES6, and CSS. 


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) The primary win of the Rancid Tomatillos project was converting the first phase of the project into using React Routes for dynamic paths. 
2) The largest challenge we faced was the logic involved with creating a dropdown box to filter by genres, as the genre information is stored within the individual movie data, but not the overall set of data used to render the movie cards. We spent several hours in paired Tuple programming sessions access the necessary genre data by mapping fetch requests across the original array of general movie data, and filtering through mapped data allowing for re-rendering on genre choice. 
