const axios = require('axios');

let people;

// we use .then and .catch to deal with PROMISES
// .then(response => console.log('11111', response))
// .catch(err => console.log('error', err))
axios.get('https://swapi.co/api/people')
.then(response => {
    people = response.data.results
})
.catch(err => console.log('error', err))


module.exports = {
    get: (req, res) => {
        res.send(people)
    }
}