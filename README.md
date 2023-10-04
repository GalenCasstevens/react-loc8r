# Loc8r

Loc8r is an app that helps people find nearby places with wifi to get work done.

## About

_It's important to note that the location list is hardcoded and is being pulled from a MongoDB cluster. However, if there was some type of API I could call to get nearby restaurants, the code is set up so that it would list them in order from closest to furthest away._

This is a full stack web application that lets users find places nearby to work with wifi. The home page is a list of all of the near by locations.

Also, there is a location details page that shows more information about the location along with a map that shows where the location is geographically. Additionally, the user can leave a review, and the rating will update to be the average rating from all of the reviews.

## Install and Run the Project

_Note: There are two .env files that are not in source control. One should be in the root and the other should be in the frontend folder. For the app to work correctly, the one in the root should contain a `MONGO_URI` variable containing a connection string for MongoDB. You will need to create your own database that adheres to locationModel.js in the backend folder. For the .env in frontend, you will need a `REACT_APP_API_KEY` variable with your Google Maps API key that you can get for free at [https://developers.google.com/maps/documentation/javascript/get-api-key](url)._ 

1) clone the project onto your local machine
2) install Node.js and npm if you don't already have them: [https://nodejs.org/en/download](url)
3) navigate to your root folder, open a terminal, and run `npm install` to install your backend dependencies
4) run `cd frontend` and then `npm install` again to install your frontend dependencies
5) run `cd..` to navigate back to the root and then run `npm run dev`

## Technologies

React.js, Redux Toolkit, Node.js, Express, MongoDB, Bootstrap, JavaScript, Google Maps API

