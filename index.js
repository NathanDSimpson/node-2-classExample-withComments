// to start a node project, run "npm init -y" in the terminal
// then 'npm i express'
// then 'npm i axio'
// to see if we have express and axios, check the package.json file
// 'nodemon' starts your server

const express = require('express') // we need this to do stuff
let app = express() // this creates out app object, and allows us to use express methods on that object
const port = 5001

// import our "controller" that contains data and methods associated with that data
const UserCtrl = require('./controllers/Users')
const Swapi = require('./controllers/Swapi')

//this is top-level middleware
//allows use to use "req.body" in our UserCtrl.create method
app.use(express.json())

// define an endpoint and use a callback function to determine what is displayed there
// we named our method in the controller 'get', not to be confused with the app.get method associated with our express() object
app.get('/api/users', UserCtrl.get)
// whatever comes after the : is the name of our parameter - it can be named anything
app.get('/api/users/:id', UserCtrl.getUserById)
// this allows us to gather data (think registering for a website)
app.post('/api/users', UserCtrl.create)
// allows your to edit existing data
app.put('/api/users/:id', UserCtrl.update)
app.delete('/api/users/:id', UserCtrl.delete)


app.get('/api/swapi', Swapi.get)

// set up our server "http://localhost:${port}/$(endpoint}
app.listen(port, () => {
    console.log(`We are up an running on port number: ${port}`)
})

