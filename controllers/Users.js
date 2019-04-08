let id = 1;
let users = [
    {
      "id": id++,
      "first_name": "Raul",
      "last_name": "Wynter",
      "email": "rwynter0@google.com"
    },
    {
      "id": id++,
      "first_name": "Demetri",
      "last_name": "Dakin",
      "email": "ddakin1@google.com"
    },
    {
      "id": id++,
      "first_name": "Lira",
      "last_name": "Collishaw",
      "email": "lcollishaw2@google.com"
    },
    {
      "id": id++,
      "first_name": "Jennette",
      "last_name": "O'Brollachain",
      "email": "jobrollachain3@msn.com"
    },
    {
      "id": id++,
      "first_name": "Annaliese",
      "last_name": "Marishenko",
      "email": "amarishenko4@msn.com"
    },
    {
      "id": id++,
      "first_name": "Delano",
      "last_name": "Millins",
      "email": "dmillins5@yahoo.com"
    },
    {
      "id": id++,
      "first_name": "Allister",
      "last_name": "Rizzetti",
      "email": "arizzetti6@yahoo.com"
    },
    {
      "id": id++,
      "first_name": "Yul",
      "last_name": "Slite",
      "email": "yslite7@yahoo.com"
    },
    {
      "id": id++,
      "first_name": "Stu",
      "last_name": "Liveing",
      "email": "sliveing8@devmountain.com"
    },
    {
      "id": id++,
      "first_name": "Carla",
      "last_name": "Gisbye",
      "email": "cgisbye9@devmountain.com"
    }
  ]


  // export an object of our methods
  // these methods also export out data because of scope
  module.exports = {
    get: (req,res) => {
      res.status(200).send(users) // we send a code of 200 by default, so that part of this line is not needed
  // however, we could hard code in a different message with an if statement do deal with other cases
    },

    getUserById: (req, res) => {
      let {id} = req.params // We destructure our parameter off of our endpoint in index.js
      res.status(200).send(users.find(user => +user.id === +id)) // the +'s make sure we are comparing strings and not string/number
    },
    
    create: (req, res) => {
      let user = req.body // only allowed because we use "app.use(express.json())" in index.js
      user.id = id++
      users.push(user)
      res.status(200).send(users)
    }, 

    update: (req, res) => {
      let {id} = req.params // params come from the url: http://localhost:5000/api/users?PARAMNAME='PARAMVALUE'
      let userData = req.body  // only allowed because we use "app.use(express.json())" in index.js
      let index = users.findIndex(user => +user.id === +id)
      users.splice(index, 1, userData)
      res.status(200).send(users)
    },

    delete: (req, res) => {
      let {id} = req.params
      let index = users.findIndex(user => +user.id === +id)
      users.splice(index, 1)
      res.status(200).send(users)
    }

  }