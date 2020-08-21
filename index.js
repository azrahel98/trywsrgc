import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import morgan from 'morgan'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolver'
import data from './servicios/ws/setcookie'
require('dotenv').config()
const server = new ApolloServer({typeDefs,resolvers})
const app = express()
const port  = process.env.PORT || 8080

data()
app.use(morgan('short'))


server.applyMiddleware({app,path:'/'})
app.listen(port)