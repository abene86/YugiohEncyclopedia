const express = require('express')
const fetch = require('node-fetch')
const path = require('path');
const admin = require('firebase-admin'); 
const processcard = require('./processcard')
const app = express()
let cardProcesser = null
app.use(express.static(path.join(__dirname, 'client/build')));

// Firebase starter code appears below

let serviceAccount = require('./swe-432-project3-firebase-adminsdk-mrs0u-6c67d05b0d.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

//Creates cardProcessor object that maninuplates the datasets using firebase
//It retrieves the all dataset from firebase to create a processcard object
//which facilitates all the necessary api to modify and get the needed information
async function createCardProcessor(){
    await getDataFromYugiohApi();
    const cardRef = db.collection('cardInformations').doc('one');
    const document = await cardRef.get();
    if(document.exists){
      cardProcesser = new processcard(document.data());
    }

}
//Fetchs dataset from the api and checks if exits already in firebase
//before storing it
async function getDataFromYugiohApi(){
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon';
  try{
    let responseApi = await fetch(url);
    let jsonDataSet = await responseApi.json();
    let dataOfCards = await jsonDataSet;
    let document = db.collection('cardInformations').doc('one')
    if(!document.exists){
      document.set(dataOfCards);
    }
  }catch(error){
    console.log(error)
  }
}

createCardProcessor();

//It uses class processcard tof find all the cards  by level
app.get('/findAllCardWithGivenLevel/:level', (req, res) => {
  if(!cardProcesser.isCardLevelAppropriate(req.params.level)){
      return res.status(400).send("Bad request currenlty only cards from level 0 to 12 exist")
  }
  return res.json(cardProcesser.findAllCardWithSpecifiedLevel(parseInt(req.params.level)))
})
//It uses class processcard to find the card information by name
app.get('/cardinformation/:nameCard', (req, res) => {
  if(!cardProcesser.doesTheCardExistInCache(req.params.nameCard)){
    return res.status(400).send("Bad request name with card does not exist")
  }
  return res.json(cardProcesser.getInformationByCardName(req.params.nameCard))
})
//It uses class processcard to find the card Images by name
app.get('/Image/:nameCard', (req, res) => {
  if(!cardProcesser.doesTheCardExistInCache(req.params.nameCard)){
    return res.status(400).send("Bad request name with card does not exist")
  }
  return res.json(cardProcesser.getImageCard(req.params.nameCard))
})
//It uses class processcard to find all the names of the card
app.get('/allCardNames', (req, res) => {
  return res.json(cardProcesser.getOnlyCardNames())
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;