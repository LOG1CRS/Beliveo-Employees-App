import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphClient = new ApolloClient({
  uri: 'https://beliveo-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default graphClient;
