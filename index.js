const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('Italian Chef Hunt Server Running')
})

app.listen(port, () => {
    console.log(`Italian Chef Hunt Server Running on port ${port}`)
  })