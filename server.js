const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3500

// Middleware starts here
app.use(logger)
console.log("before cors")
app.use(cors(corsOptions))
console.log("aftercors cors")
app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public ')))

// Middleware ends here
app.use('/', require('./routes/root'))

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')){
        res.json({message:'404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})
console.log("before errhandler")
app.use(errorHandler)
console.log("after errhandler")

app.listen(PORT, ()=> console.log(`Server running on prt ${PORT}`))