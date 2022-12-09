/** @format */

import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";
import GraphQL from "../graphql/EXPORT";

type EPISODES = {
  episodes: {
    results: [
      {
        air_date: string;
        episode: string;
        id: number;
        created: string;
      }
    ];
  };
};

const Test = () => {
  const { data, loading } = useQuery<EPISODES>(
    GraphQL.Query.Episodes.fetchEpisodes
  );

  const result = data && data?.episodes && data?.episodes?.results;

  const isLoading = useCallback(() => <div>Loading...</div>, [loading]);

  return (
    <div>
      {loading
        ? isLoading()
        : result?.map((episode, index) => {
            return (
              <div
                key={index}
                style={{ background: "green", marginBottom: "10px" }}>
                <div>{episode.id}</div>
                <div>{episode.episode}</div>
                <div>{episode.air_date}</div>
                <div> {episode.created} </div>
              </div>
            );
          })}
    </div>
  );
};

export default Test;
