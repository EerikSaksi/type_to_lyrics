const path = require('path');
const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')
const resolvers = require('./resolvers');

const typeDefs = gql`
  type SyncedLyric {
    text: String
    time: Float
    id: Int
  }
  input InputSyncedLyric {
    text: String
    id: Int
    time: Float
  }
  type SearchResult {
    id: String
    imgUrl: String
    text: String
    isYoutube: Boolean
  }
  type Mutation {
    postSyncedLyrics(syncedLyrics:[[InputSyncedLyric]], youtubeID: String, geniusID: String): Boolean
  }
  type Query {
    findSynchronizationData(geniusID: String): String
    syncedLyrics(id: String): [SyncedLyric]
    geniusSearchResults(query: String): [SearchResult]
    youtubeSearchResults(query: String): [SearchResult]
    geniusSongData(id: String): SearchResult
    youtubeVideoData(url: String, id: String): SearchResult
    displayLyrics(id: String): [String]
    processedLyrics(id: String): [[SyncedLyric]]
  }
`
const myPlugin = {
  requestDidStart(requestContext) {
    if (requestContext.request.query.split("\n")[0] != 'query IntrospectionQuery {') {
      console.log('Variables: ' + JSON.stringify(requestContext.request.variables))
      console.log('Query: ' + requestContext.request.query);
    }
    return {
      didEncounterErrors(requestContext) {
        console.log(JSON.stringify(requestContext.errors));
      },
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    myPlugin
  ]
});

const app = express()
app.use(express.static('public'))

app.get(('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
}))

server.applyMiddleware({app, path: '/graphql'})
const port = process.env.PORT || 4000
app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
)
module.exports = server
