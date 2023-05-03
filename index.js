const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json')

app.get('/', (req, res)=>{
    res.send('Italian Chef Hunt Server Running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.listen(port, () => {
    console.log(`Italian Chef Hunt Server Running on port ${port}`)
  })