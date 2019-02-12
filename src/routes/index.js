import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();

const defaultState = {
signUp :{
  __typename : 'signup data',
    name : '',
    userName : '',
    email : '',
    password : ''

}
}



const stateLink = withClientState({
  cache,
  defaults:defaultState,
  resolvers: {
    Mutation: {
      signup: (_, { name , userName, email, password }, { cache }) => {
        const user = { name: name, userName: userName, email:email, password:password}
        const data = { user: user };
        cache.writeData({ id: `User:${username}`, data });
        return null ;
      }
    },
  },

})

 const client = new ApolloClient({
link: ApolloLink.from([
stateLink,
new HttpLink({
  uri:'http://localhost:2000/graphql'
})
]),
cache:cache,

 });

const RouterLayout = () => (
    
      <div>
        <ApolloProvider client = {client}>
        <BrowserRouter>
        <Switch>
          {routes.map(route => <Route key={`route-${route.name}`} {...route} />)}
        </Switch>
        </BrowserRouter>
        </ApolloProvider>
      </div>
   
  );

  export default RouterLayout ;