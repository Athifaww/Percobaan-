const express = require('express')
const app = express()
const port = 3035

app.get('/', (req, res) => {
  res.send('Hallow')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
