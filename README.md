# SWE-432 HW-3 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name: Abenezer Gebeyehu** 
* **Student G-Number: G01281469** 
* **Heroku Deployment URL: https://yugiohdragonencyopedia.herokuapp.com/**

### Documentation of your Web App and React Components

*Here please describe your (at least) 3 different React components as well as the overall purpose of your web application. We provide an example below of what we expect this documentation to look like.*

**General App Description:** Yugioh is monster card franchise that have very beautiful and aesthetically pleasing cards. This web Application allows users to examine and appreciet Dragon cards by searching its name. It allows provides all the name of possible Dragon cards to aid in the exploration.

* **Endpoint 1:** Retrieve ALl the Dragon Cards
  * API Endpoint: GET /allCardNames
  * Example: GET /allCardNames
  * Expected Output: All the Card Dragon names 

  * **Endpoint 2:** Retrieve Image of Card
  * API Endpoint: Get /Image/:nameCard
  * Example: Get /Image/Alligator's Sword Dragon
  * Expected Output: [{"id":3366982,"image_url":"https://images.ygoprodeck.com/images/cards/3366982.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/3366982.jpg"}]

* **Component 1:** Examine Component
	* API Endpoint(s):
  		* Get /Image/:nameCard
  * Purpose: Allows user to search for Dragon Card using Image Component it displays the image that is stored in firebase
* **Component 2:** Image Component
  * Purpose: It takes the url of image through props and display the card image
* **Component 3:** All Cards Component
	* API Endpoint(s):
  		* GET /allCardNames
  * Purpose: Display all the card names



## Project Overview

This repo contains a barebones Node.js app using [Express 4](http://expressjs.com/) and a barebones React app with a single component. You will use this as the "base" version of your Microserivce + Front-end application for HW Assignment #3. You will simply create a copy of this repo through GitHub classroom and then work in that repo. 

## Homework Assignment 3 Detailed Instructions

You can find the deatiled instructions for HW Assignment #3 on the [course webpage](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/) and (optionally) the [Heroku CLI](https://cli.heroku.com/) installed. You only need the Heroku CLI installed if you plan to deploy the project from the CLI instead of the Heroku web interface. See the [HW Assignment #3 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for more details.

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm run setup
$ npm start
```

You can also indepedently start the express and React servers using the following commands:

```sh
$ npm run start-express
$ npm run start-react
```

After executing these commands, your express backend should now be running on [localhost:6000](http://localhost:6000/) and your React frontend should now be running at [localhost:3000](http://localhost:3000/). You can visit this page in your web browser to view your front-end user interface. You can also access your microservice endpoints (e.g., [localhost:6000/cities](http://localhost:6000/cities). Please see the [HW #3 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for more information on how this works.

## Deploying to Heroku

Check out [our instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for deploying your application to Heroku. You can use the button below for quick access to your Heroku account.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Testing with Continuous Integration

**Note that you are not required to test your project with Jest for HW3, however, we have enabled this functionality in case you would like to use it. If you would like to remove the tests, you can remove the `.github` directory from the repo.**

Currently, this repo is set up to run the Jest tests in the `app.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Additional Resources

For more information about using Node.js on Heroku, see these Heroku Dev Center articles:

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Express Documentation](https://expressjs.com/en/5x/api.html)
- [Supertest Documentation](https://www.npmjs.com/package/supertest)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
