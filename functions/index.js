
'use strict';
const functions = require('firebase-functions');
const { WebhookClient, Payload } = require('dialogflow-fulfillment');
const carousel = require('./intents/carousel');
const card = require('./intents/card');
const quickReplies = require('./intents/quickReplies');
const video = require('./intents/video');
const image = require('./intents/image');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const _agent = new WebhookClient({ request: request, response: response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  let PLATFORM = _agent.originalRequest.source;
  switch (PLATFORM) {

    case 'facebook':
      PLATFORM = 'FACEBOOK'
      break;

    case 'slack_testbot':
      PLATFORM = 'SLACK'
      break

    case 'skype':
      PLATFORM = 'SKYPE'
      break;

    case null:
      PLATFORM = null
      break;

  }
  exports.PLATFORM = PLATFORM;


  const welcome = (agent) => {
    agent.add(`welcome to my website`)
    const payload = {

      "fulfillmentMessages": [
        {
          "quickReplies": {
            "title": `Hi this is website chatbot`,
            "quickReplies": [
              "show image",
              "show carousel",
              "show card",
              "show video",
              "show quick replies"
            ]
          },
          "platform": PLATFORM
        }
      ]
    }
    return response.json(payload);
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
    let Response = image.imageFun();
    return response.json(Response);
  }


  const videoIntent = (agent) => {
    if (PLATFORM !== 'FACEBOOK') {
      agent.add(`video response is not available for ${PLATFORM}`);
    }
    else {
      video.videoFunc(agent);
    }
  }

  const carouselIntent = () => {
    let Response = carousel.cardFun();
    return response.json(Response);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('card Intent', cardIntent);
  intentMap.set('button Intent', buttonIntent);
  intentMap.set('image Intent', imageIntent);
  intentMap.set('video Intent', videoIntent);
  intentMap.set('carousel Intent', carouselIntent);
  _agent.handleRequest(intentMap);
});
