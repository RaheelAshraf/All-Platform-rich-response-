
'use strict';
const functions = require('firebase-functions');
const { WebhookClient, Payload } = require('dialogflow-fulfillment');
const carousel = require('./intents/carousel');
const card = require('./intents/card');
const quickReplies = require('./intents/quickReplies');
const video = require('./intents/video');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const _agent = new WebhookClient({ request: request, response: response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  let PLATFORM = _agent.originalRequest.source;
  PLATFORM = PLATFORM.toUpperCase();
  exports.PLATFORM = PLATFORM;

  if (PLATFORM === 'SLACK_TESTBOT') {
    PLATFORM = 'SLACK'
  }

  const welcome = () => {
    let Response = carousel.cardFun();
    return response.json(Response);
  }

  const fallback = (agent) => {
    agent.add(`Sorry! Can you say that again?`)
  }

  const cardIntent = () => {
    let Response = card.cardFun();
    return response.json(Response);
  }

  const buttonIntent = () => {
    let Response = quickReplies.quickReplies();
    return response.json(Response);
  }

  const imageIntent = () => {
    let payload = {
      "fulfillmentMessages": [
        {
          "text": {
            "text": [
              "showing image from webhook"
            ]
          },
          "platform": PLATFORM
        },
        {
          "image": {
            "imageUri": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          },
          "platform": PLATFORM
        },
      ]
    }
    return response.json(payload);
  }

  
  const videoIntent = (agent) => {
    if (PLATFORM !== 'FACEBOOK') {
      agent.add(`video response is not available for ${PLATFORM}`);
    }
    else {
       video.videoFunc(agent); 
    }
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('card Intent', cardIntent);
  intentMap.set('button Intent', buttonIntent);
  intentMap.set('image Intent', imageIntent);
  intentMap.set('video Intent', videoIntent);
  _agent.handleRequest(intentMap);
});
