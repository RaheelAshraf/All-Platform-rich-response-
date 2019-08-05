const platform = require('../index'); 

module.exports = {

  quickReplies () {
    
    const payload = {

      "fulfillmentMessages": [
        {
          "quickReplies": {
            "title": "Here are your quick replies",
            "quickReplies": [
              "main menu",
              "Exit"
            ]
          },
          "platform": platform.PLATFORM
        }
      ]
    }
    return payload; 
  }
}