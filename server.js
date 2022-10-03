const PORT = 8000
//triba ih sve npm install u terminalu, i nodemon isto instalirat(za pratit konstantno promjene u server.js)
const axios = require('axios')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

//prepravia sam script, kao u crypto-dash projektu

const app = express()
app.use(cors())

app.get('/flights', (req, res) => {
    const options = {
        url: process.env.URL + '?page-size=7',//default page size je 3
        headers : {
            accept: 'application/json',
            'X-Cassandra-Token' : process.env.TOKEN
        }
    }

    axios.request(options).then(response => {
        //console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
});

app.listen(PORT, () => console.log('running on port ' + PORT))