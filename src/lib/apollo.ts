import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:"https://api-sa-east-1.graphcms.com/v2/cl4ol4yyp0b0g01xn4tv8hj7k/master",
  cache: new InMemoryCache()
})