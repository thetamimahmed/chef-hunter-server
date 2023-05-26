const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json')

app.use(cors())

//test
app.get('/', (req, res)=>{
    res.send('Italian Chef Hunt Server Running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedChef = chefs.find(chef => chef.id == id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Italian Chef Hunt Server Running on port ${port}`)
  })