const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./models/schema')

const app = express()
app.use('/', (req, res) => {
  res.send('graphql server')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema
  })
)

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
