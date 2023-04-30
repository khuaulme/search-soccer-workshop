import React, { useState, useEffect } from "react";

// import whichever Apollo hooks you're using
import { useLazyQuery } from "@apollo/client";
import { FIND_PLAYER } from "../graphql-operations";

import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(false);

  const [getPlayer, { loading, error, data }] = useLazyQuery(FIND_PLAYER);

  const performSearchQuery = async (searchTerm) => {
    const players = await getPlayer({
      variables: { Input: searchTerm },
    });

    console.log("PLAYERS: ", players);
    if (players.data && players.data.search) setPlayers(players.data.search);
  };

  useEffect(() => {
    if (!submitted) return;

    console.log("SUBMITTED");
    performSearchQuery(searchTerm);

    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  return (
    <>
      {" "}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSubmitted={setSubmitted}
      />
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="stadium"
          style={{ position: "absolute", height: "full", width: "100%" }}
        />
        {showNeedEndpointMessage ? (
          <div className="needEndpoint">Build Endpoint Please 🥺</div>
        ) : (
          <Grid header={searchTerm ? null : "Player Search Results"}>
            {players.map((player) => (
              <Thumb
                key={player._id}
                player={player}
                clickable
                playerID={player._id}
                image={player.player_face_url ? player.player_face_url : ""}
              ></Thumb>
            ))}
          </Grid>
        )}
      </div>{" "}
    </>
  );
};

export default Home;
