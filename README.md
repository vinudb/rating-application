This application is built using create-react-app
other main libraries used include redux, react-redux, react-star-rating-component

Instructions to run the program
1. "npm install" to install all react dependencies.
2. "npm run startServer" to start the json server in watch mode
3. "npm run start" in anoter terminal to start the react application in the browser
    Open (http://localhost:3000) to view it in the browser.
4. "npm test" to run all test suits

The list of movies is stored in api.json file. json-server is setup for development purposes. 
Features:
1. Lists all the movies initially based on highest rated movie first.
2. Allows user to click on the start ratings to rate the movie. Immideately the list gets sorted in descending order of ratings
3. User can click on start random rating button at the bottom. For every random 0-2 secs, the rating of a random movie from the list is changed to a random number between 1-5 and saved to database, updated in the redux store and also sorted based on the rating.
4. User can click on stop random rating to stop this proces. 

