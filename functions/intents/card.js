const platform = require('../index'); 

module.exports = {

  cardFun() {

    const payload = {

      "fulfillmentMessages": [
        {
          "text": {
            "text": [
              ""
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
        },
      ]
    }
    return payload;
  }
}