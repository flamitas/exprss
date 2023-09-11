const express = require('express') 
const bodyParser = require('body-parser')

const app = express()               
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({

}))


const port = process.env.PORT ?? 4200 

const router = require('./routes')
app.use('/api', router)

app.listen(port)
console.log('API listening on port:' + port)