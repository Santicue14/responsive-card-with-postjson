const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

const cardRoutes = require('./routes/card.routes')

app.use(express.json())
app.use(cors())
app.use(cardRoutes)

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`)
})