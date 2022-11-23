# SWE-432 HW-3 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name: Abenezer Gebeyehu** 
* **Student G-Number: G01281469** 
* **Heroku Deployment URL: https://yugiohencyopedia.herokuapp.com/**

### Documentation of your Web App and React Components

**General App Description:** Yugioh is monster card franchise, which has created multiple generation, that have very beautiful and aesthetically pleasing cards. This web Application allows users to fully imerse in the world of duel monsters by allowing them to examine and read a specific card, be exposed to multiple card designs, and finally interact with unique villians and hero from certain generation and add on to their dilogue tree.

* **Endpoint 1:** Retrieve ALl the Dragon Cards
  * API Endpoint: GET /allCardNames
  * Example: GET /allCardNames
  * Expected Output: All the Card Dragon names 

  * **Endpoint 2:** Retrieve Image of Card
  * API Endpoint: Get /Image/:nameCard
  * Example: Get /Image/Alligator's Sword Dragon
  * Expected Output: [{"id":3366982,"image_url":"https://images.ygoprodeck.com/images/cards/3366982.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/3366982.jpg"}]

* **Component 1:** Examine Component
  * Purpose: Allows user to search for Dragon Card Name and display the image and meta data of the card
  * Note/Comment: The name of each card must be capitalized and must be correct spell out or server will throw not found 404
  * Here are sample name to making testing easier more can be found:https://yugiohdragonencyopedia.herokuapp.com/
  * Ancient Fairy Dragon
  * Ancient Pixie Dragon
  * Anesthrokket Dragon
  *  Anotherverse Dragon
  *  Arc Rebellion Xyz Dragon
  * Archfiend Black Skull Dragon
  * Archnemeses Eschatos
  *  Arkbrave Dragon
  * Armed Dragon LV10
  *  Armed Dragon LV10 White
  *  Armed Dragon LV3
  *  Armed Dragon LV5
  *  Armed Dragon LV7
  * Helper: It uses two special Components DisplayImage and DisplayCardInformation
* **Component 2:**DisplayCardImage:
  * API Endpoint(s):
  		* Get /Image/:nameCard
  * Purpose: it fetches card image using  prop.name and formats and display the image.
* **Component 3:**DisplayCardInformation:
  * API Endpoint(s):
  		* Get /CardInformation/:nameCard
  * Purpose: it fetches the meta data of the card and display it in a list
* **Component 4:** All Cards Component
	* API Endpoint(s):
  		* GET /allCardNames
  * Purpose: it fetches all card names and using grid layout display the image like it placed in a binder beautifully and using button generate the next batch of images
  * **Component 5:** TitleBanner
  * Purpose: it display the title of yugioh from each generation and with mouse hover it does a special animation
  * 
  * **Component 6:** CharacterSlider
  * Purpose: It shows famous character from yugioh universe and allows users to play around with the dialogue tree
  * 




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
