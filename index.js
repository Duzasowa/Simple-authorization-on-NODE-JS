var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors(({ origin: true })))

app.post('/auth/login', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})

// const express = require('express')
// const mongoose = require('mongoose')
// const authRouter = require('./components/authRouter')

// const PORT = process.env.PORT || 5000

// const app = express()

// app.use(express.json())
// app.use('/auth', authRouter)

// const start = async () => {
//   try {
//     await mongoose.connect(`mongodb+srv://qwenty:qwenty@cluster0.iaacw.mongodb.net/?retryWrites=true&w=majority`)
//     app.listen(PORT, () => console.log(`Server started ${PORT}`))
//   } catch (e) {
//     console.log(e)
//   }
// }

// start()