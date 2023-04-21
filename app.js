const express = require('express')
const app = express()
const port = 8080
const history = require('connect-history-api-fallback')

app.use(history())

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
