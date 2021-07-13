const express = require('express')
const cors = require('cors')

const brandsRouter = require('./routes/brands.routes')
const autosRouter = require('./routes/autos.routes')

var app = express()

app.use(cors({
    origin: '*',
    //headers: "Origin, X-Requested-With, Content-Type, Accept",
    methods: "GET, POST, PUT, DELETE"
}))

app.use(express.json())

app.use("/brands", brandsRouter)
app.use("/autos", autosRouter)

app.listen(3333, () => {
    console.log("Backend is running on port 3333")
})


