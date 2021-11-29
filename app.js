const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/api/request',(req, res)=>{
    res.send('Hello user')
})

app.listen(3000)