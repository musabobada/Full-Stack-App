if (process.env.NODE_ENV !== "production") { require("dotenv").load() }
const expressLayouts = require("express-ejs-layouts")
const express = require("express")
const indexRouter = require("./routes/router")
const app = express()
const mongoose = require("mongoose")
const { urlencoded } = require("express")
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.on('open', error => console.log("Connected to Db"))
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")

app.use(expressLayouts)
app.use(express.static("public"))
app.use("/", indexRouter)

app.listen(process.env.PORT || 3000)

console.log("server is running on http://localhost:3000")