const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')

var app = express()

app.use(cors({
    origin: '*',
    //headers: "Origin, X-Requested-With, Content-Type, Accept",
    methods: "GET, POST, PUT, DELETE"
}))

app.use(express.json())

app.use("/brands", routes.brandsRouter)
app.use("/autos", routes.autosRouter)
app.use("/summary", routes.summaryRouter)

app.listen(3333, () => {
    console.log("Backend is running on port 3333")
})


