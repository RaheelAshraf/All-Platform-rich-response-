const platform = require('../index'); 

module.exports = {

    imageFun () {

        const payload = {
            "fulfillmentMessages": [
              {
                "text": {
                  "text": [
                    `showing image response for ${platform.PLATFORM}`
                  ]
                },
                "platform": platform.PLATFORM
              },
              {
                "image": {
                  "imageUri": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                },
                "platform": platform.PLATFORM
              },
            ]
          }
          return payload; 
    }
}