const platform = require('../index');


module.exports = {

  cardFun () {
  const payload = {
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "choose an option from below"
          ]
        },
        "platform": platform.PLATFORM
      },
      {
        "card": {
          "title": "title webhook",
          "subtitle": "subtitle webhook",
          "imageUri": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          "buttons": [
            {
              "text": "Google",
              "postback": "https://www.google.com/"
            },
            {
              "text": "SKYPE",
              "postback": "https://www.skype.com/"
            },
            {
              "text": "Youtube",
              "postback": "https://www.youtube.com/"
            }
          ]
        },
        "platform": platform.PLATFORM
      }, {
        "card": {
          "title": "title webhook",
          "subtitle": "subtitle webhook",
          "imageUri": "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "buttons": [
            {
              "text": "Google"
            },
            {
              "text": "SKYPE"
            },
            {
              "text": "Youtube"
            }
          ]
        },
        "platform": platform.PLATFORM
      }, {
        "card": {
          "title": "title webhook",
          "subtitle": "subtitle webhook",
          "imageUri": "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg",
          "buttons": [
            {
              "text": "Google"
            },
            {
              "text": "SKYPE"
            },
            {
              "text": "Youtube"
            }
          ]
        },
        "platform": platform.PLATFORM
      }, {
        "card": {
          "title": "title webhook",
          "subtitle": "subtitle webhook",
          "imageUri": "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg",
          "buttons": [
            {
              "text": "Google"
            },
            {
              "text": "SKYPE"
            },
            {
              "text": "Youtube"
            }
          ]
        },
        "platform": platform.PLATFORM
      },
    ]
  }
  return payload; 
}
}