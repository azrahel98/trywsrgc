import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import morgan from 'morgan'
import typeDefs from './schema'
import resolvers from './resolver'


const server = new ApolloServer({typeDefs,resolvers})
const app = express()
const port  = process.env.PORT || 8080


app.use(morgan('short'))


server.applyMiddleware({app,path:'/'})
app.listen(port)