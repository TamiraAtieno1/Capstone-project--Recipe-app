const express = require("express")
const app = express()
const cors =require("cors")
app.use(
    cors({
        origin: "*",
    })
)

app.get("/v2", (req, res) => {
    res.json({})
 
})

app.listen(5500)