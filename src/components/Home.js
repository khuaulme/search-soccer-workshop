import React, { useState, useEffect } from "react";

// import whichever Apollo hooks you're using
import { useLazyQuery } from "@apollo/client";
import { FIND_PLAYERS, FIND_PLAYERS_ADVANCED } from "../graphql-operations";

import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [operator, setOperator] = useState("text");
  const [functionScore, setFunctionScore] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(false);

  const [getPlayers] = useLazyQuery(FIND_PLAYERS);

  const [getPlayersAdvanced] = useLazyQuery(FIND_PLAYERS_ADVANCED);

  // BASIC SEARCH QUERY FOR ONLY SEARCHBAR
  const performSearchQuery = async (searchTerm) => {
    const players = await getPlayers({
      variables: { Input: searchTerm },
    });
    console.log("PLAYERS: ", players);
    if (players.data && players.data.search) setPlayers(players.data.search);
  };
  /*-------------------END PERFORMSEARCHQUERY------------------------*/

  // SEARCH QUERY FOR SEARCHBAR - SELECTOR - FUNCTION BTN
  const performSearchQueryAdvanced = async (
    searchTerm,
    functionScore,
    operator
  ) => {
    const players = await getPlayersAdvanced({
      variables: {
        Input: {
          searchTerm: searchTerm,
          functionScore: functionScore,
          operator: operator,
        },
      },
    });

    console.log("PLAYERS: ", players);
    if (players.data && players.data.searchAdvanced)
      setPlayers(players.data.searchAdvanced);
  };
  /*-------------------END PERFORMSEARCHQUERYADVANCED------------------------*/

  useEffect(() => {
    if (!submitted) return;

    console.log("SUBMITTED");

    // call only one of the following functions - comment out the other
    performSearchQuery(searchTerm, functionScore, operator);
    //performSearchQueryAdvanced(searchTerm, functionScore, operator);

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
        operator={operator}
        setOperator={setOperator}
        functionScore={functionScore}
        setFunctionScore={setFunctionScore}
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
