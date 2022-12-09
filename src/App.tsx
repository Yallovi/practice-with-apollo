/** @format */

import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Test from "./pages/test";

const App = () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
  );
};

export default App;
