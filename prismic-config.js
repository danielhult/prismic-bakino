import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

export const initPrismic = new ApolloClient({
    link: PrismicLink({
        uri: 'https://nuxt-prismic-testing.cdn.prismic.io/api/v2',
    }),
    cache: new InMemoryCache(),
});
