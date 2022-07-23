const { Post } = require('../models')

const postdata =
  [
    {
      "postTitle": "Pheonix",
      "postContent": "Stuck in the pheonix airport but at least I have my new macbook air LOL",
      "userId": 1
    },
    {
      "postTitle": "Gaming PC",
      "postContent": "Anyone here know how to build a gaming pc?",
      "userId": 2
    },
    {
      "postTitle": "Micro Center",
      "postContent": "Just waited in line at Micro Center for 4 hours to get the new RTX 3080ti...",
      "userId": 3
    },
    {
      "postTitle": "iWatch HELP",
      "postContent": "Anyone else have a weird bug on their iWatch causing it to permanently vibrate???",
      "userId": 4
    },
    {
      "postTitle": "Logitech headset for sale",
      "postContent": "Hey guys selling my logitech g340 for $50 any takers?",
      "userId": 5
    },
    {
      "postTitle": "Windows VS Mac",
      "postContent": "I just started getting into tech and was wondering the best OS to program on?",
      "userId": 6
    }
  ]

const seedPost = () => Post.bulkCreate(postdata)
module.exports = seedPost