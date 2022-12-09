/** @format */

import { gql } from "@apollo/client";

export const fetchEpisodes = gql`
  query ExampleQuery {
    episodes {
      results {
        air_date
        episode
        id
        created
      }
    }
  }
`;
