import { ApolloClient, InMemoryCache } from '@apollo/client';
const { REACT_APP_URL_SERVER } = process.env;

const graphClient = new ApolloClient({
  uri: `${REACT_APP_URL_SERVER}`,
  cache: new InMemoryCache(),
});

export default graphClient;
