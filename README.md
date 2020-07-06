# General Assembly Project 2: MovieRater

### Overview
Movie Rater - a game in which the user chooses which of two films is better rated on the Movie Database API. Built as a pair coded hackathon in 48 hours using react and a publicly available API.

### Brief
To build a React application that consumes a public API.

### Timescale
48 hours

### Team Mate
Kimberly Tham (https://github.com/kimbertham)

### Technologies
- React.js
- JavaScript
- Github
- Insomnia
- Webpack
- Node.js
- Express
- SCSS
- Babel

### Deployment
The application is deployed on Netlify and can be found at https://movieraterquiz.netlify.app/
To install the code for MovieRater:
- Clone or download the repo
- Install Yarn in terminal with command: yarn
- Start server with terminal command: yarn start

##### User Experience
The main focus of the website is the game - to choose which one of two films you think is better rated on the Movie Database API. Alongside that, the website provides an index page of the newest films that have recently been released as well as a show page with more information on the film. A landing page was added to improve the user experience. 

##### Functionality
On the game page, the majority of the functionality is focused on the user selecting which of two films they think is better rated. Once the player makes their selection, the page is then updated with the winning choice, whether they have made the right choice, a tongue-in-cheek taunt to encourage them to try again and an animated reset button which, when clicked, resets the game and makes another API call.

![Screenshot1](src/components/styles/imgs/MovieRater-Screenshot-1.png)

To reduce the number of calls made to the API, a selection of 20 films is brought to the website with each call and stored as an array of objects. Two random numbers are then generated and the second is checked to ensure it is different to the first. We chose to structure it like this so that the API returns 20 similarly ranked films to make the choice more closely contested for the player. 

![Screenshot2](src/components/styles/imgs/MovieRater-Screenshot-2.png)

The navbar also includes a link to New Movies which have been released recently. The functionality here is relatively basic, with an index page of film titles and cover posters which, when clicked, link to a show page with further information on the film. 

![Screenshot3](src/components/styles/imgs/MovieRater-Screenshot-3.png)

### Bugs and Challenges
The main bug and challenge stemmed from the deadline of 48 hours and is the screen sizing and mobile responsiveness isn't as good as it could be. Given more time, it would have been possible to use media queries to resize items and move from flex rows to columns, however we chose to focus more on getting the game logic, user interaction and user experience aspects of the application thoroughly sorted.

### Wins
Creating a game which is addictive enough to keep playing it! We knew the concept was sound when we found ourselves playing the game rather than continuing to write code! That also gives rise to the second major win, which was I thoroughly enjoyed working with Kimberly on the project, we got on well, communicated excellently and I'm proud of what we achieved.

### Future Content
The main change to be made in the future would be to improve the mobile and screen size responsiveness using ratios rather than simply fixed pixel sizes, which arose from making the game look good under time pressure to our specific screens. It would also be good to include some search functionality on the index page and on the show page, show similar films or films in the same genre.

