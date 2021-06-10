import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphClient = new ApolloClient({
  uri: 'https://beliveo-app.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default graphClient;
