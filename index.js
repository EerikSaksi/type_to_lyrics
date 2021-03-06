const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');
const path = require('path');
const typeDefs = gql`
  type SyncedLyric {
    text: String!
    time: Float!
    id: Int!
    horizontalOffsetPercentage: Float!
  }
  type UserData {
    userName: String
    existsInDB: Boolean!
    synchronizations: [SynchronizationData!]!
    gameStats: [GameStats!]!
  }
  input InputSyncedLyric {
    text: String!
    time: Float!
    id: Int!
  }
  type SearchResult {
    imgUrl: String!
    bottomText: String!
    topText: String!
    forwardingUrl: String!
    centerText: String!
    createdAt: String!
    dateClassifier: DateClassifier!
    duration: Int!
  }
  enum DateClassified {
    TODAY
    YESTERDAY
    THIS_WEEK
    FURTHER_BACK
  }
  type DateClassifier {
    dateClassified: DateClassified!
  }
  type SynchronizationData {
    youtubeID: String!
    geniusID: String!
    userName: String!
    startTime: Float!
    endTime: Float!
    wordCount: Int!
    searchResult: SearchResult!
    createdAt: String!
  }
  type GameStats {
    youtubeID: String!
    geniusID: String!
    creatorUserName: String!
    playerUserName: String!
    wordsPerMinute: Int!
    accuracy: Int!
    searchResult: SearchResult!
    createdAt: String!
  }
  input InputGameStats {
    youtubeID: String!
    geniusID: String!
    creatorUserName: String!
    tokenId: String!
    totalCharacters: Int!
  }
  input InputSynchronizationData {
    youtubeID: String!
    geniusID: String!
    tokenId: String!
    startTime: Float!
    endTime: Float!
  }
  type Mutation {
    postSyncedLyrics(syncedLyrics: [[InputSyncedLyric]], synchronizationData: InputSynchronizationData): Boolean!
    createUser(tokenId: String, userName: String): Boolean!
    postGameStats(gameStats: InputGameStats!): Boolean!
  }
  type Query {
    syncedLyrics(youtubeID: String, geniusID: String): [[SyncedLyric]]
    geniusSearchResults(query: String): [SearchResult] @cacheControl(maxAge: 3600)
    synchronizationData(youtubeID: String, geniusID: String, userName: String): [SynchronizationData]
    youtubeSearchResults(query: String, geniusID: String!): [SearchResult] @cacheControl(maxAge: 3600)
    geniusSongData(id: String): SearchResult! @cacheControl(maxAge: 10000000)
    youtubeVideoData(url: String, id: String): SearchResult! @cacheControl(maxAge: 10000000)
    displayLyrics(id: String): [String]
    processedLyrics(id: String): [[SyncedLyric]] @cacheControl(maxAge: 10000000)
    userData(tokenId: String, userName: String): UserData!
    userNameTaken(userName: String!): Boolean!
    gameStats(geniusID: String, youtubeID: String, creatorUserName: String): [GameStats!]!
    mostPlayed: [SearchResult!]!
  }
`;
const myPlugin = {
  requestDidStart(requestContext) {
    console.log(requestContext.request.query);
    return {
      didEncounterErrors(requestContext) {
        console.log(requestContext.errors);
      },
    };
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [myPlugin],
});

const app = express();


app.use(function ensureSec(req, res, next){
    if (req.headers["x-forwarded-proto"] === "https"){
       return next();
    }
    res.redirect("https://" + req.headers.host + req.url);  
})

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 4000;

module.exports = server;

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  //res.send('hello world');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const runningServer = app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}/graphql`));
module.exports.server = server
module.exports.runningServer = runningServer

