
import { ApolloServer , gql } from 'apollo-server-express';
import typeDefs from '../typeDefs' ;
import resolvers from '../resolvers';
import Talk from '../../model/model';
import config from '../../config/config';

// const Query = gql`
// type Talk {
//     _id: String
//     name: String
//     conferenceName: String
//     video: String
//     votes: Int
//     description: String
//     speakerName: String
//     date: String
//   }
// type Query {
//    status: String

//    allTalks(
//     name: String,
//     conferenceName: String,
//     video: String,
//     description: String,
//     speakerName: String,
//   ): [Talk!]!
  
//   getTalk(
//     id: String!
//   ): Talk!
//  }
// `;

// const Mutation = `
//  type Mutation {
//    _empty: String,
//    createTalk(
//     name: String!,
//     conferenceName: String!,
//     video: String!,
//     description: String!,
//     speakerName: String!,
//     date: String!
//   ): Talk!
//  }
// `;

// let resolvers = {
//  Query: {
//    status: () => 'Hello deepak',

//    allTalks: async (parent, args, { Talk }) => {
//     const talks = await Talk.find(args)
//     return talks.map(x => {
//       x._id = x._id.toString()
//       return x
//     })
//   },

//   getTalk: async (parent, args, { Talk }) => {
//     const talk = await Talk.findById(args.id)
//     return talk
//   }
//  },


//  Mutation: {
//     createTalk: async (parent, args, { Talk }) => {
//         const talk = await new Talk(args).save()
//         talk._id = talk._id.toString()
//         return talk
//       } 
//  }
// };

// const typeDefs = [Query, Mutation];

// Read the current directory and load types and resolvers automatically
// fs.readdirSync(__dirname)
//  .filter(dir => (dir.indexOf('.') < 0))
//  .forEach((dir) => {
//    const tmp = require(path.join(__dirname, dir)).default; // eslint-disable-line
//    resolvers = merge(resolvers, tmp.resolvers);
//    typeDefs.push(tmp.types);
//  });

const schema = new ApolloServer({
    typeDefs,
    resolvers,
    playground: config.env === 'production' ? false : {
        endpoint: '/graphql',
        settings: {
            'editor.theme': 'light'
        }
    },
      context: ({ req , res }) => ({
       req
      })
});

export default schema ;