const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json({limit : '10mb'}));
app.use(express.urlencoded({ extended: true, limit : '10mb' }));

const port = 3000

app.listen(port, () => {
    console.log('ok')
})