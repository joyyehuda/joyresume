import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            description
            categories {
              slug
              category
            }
            blogImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query);
  return result.postsConnection.edges;
};

export const getPortfolios = async () => {
  const query = gql`
    query MyQuery {
      portofolios {
        id
        portofolioImage {
          url
        }
        link
      }
    }
  `;

  const result = await request(graphqlAPI!, query);
  return result.portofolios;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        createdAt
        author {
          bio
          name
          id
          avatar {
            url
          }
        }
        content {
          html
        }
        blogImage {
          id
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query, { slug });
  return result.post;
};
