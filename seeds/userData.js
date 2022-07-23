const { User } = require('../models')

const userdata =
  [
    {
      "username": "sam",
      "password": "password"
    },
    {
      "username": "marie",
      "password": "password"
    },
    {
      "username": "eric",
      "password": "password"
    },
    {
      "username": "john",
      "password": "password"
    },
    {
      "username": "janelle",
      "password": "password"
    },
    {
      "username": "sarah",
      "password": "password"
    }
  ]
const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
})

module.exports = seedUser
