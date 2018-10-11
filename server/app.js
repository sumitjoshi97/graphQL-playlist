const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./models/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const keys = require('./config/keys')
const app = express()

// allow cross-orign-request
app.use(cors())

// connect to mongo db
mongoose.connect(keys.mongoURI)

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
