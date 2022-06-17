const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://qwenty:qwenty@cluster0.iaacw.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`Server started ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()