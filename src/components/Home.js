import React, { useState, useEffect } from "react";
import { APP_ID } from "../index";
import { GRAPHQL_ENDPOINT } from "../index";

// import whichever Apollo hooks you're using
import { useLazyQuery } from "@apollo/client";
import {
  FIND_PLAYERS_BASIC,
  FIND_PLAYERS_SEARCH,
  FIND_PLAYERS_ADVANCED,
  FIND_RELATED_DATA,
} from "../graphql-operations";

import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import styled from "styled-components";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [operator, setOperator] = useState("text");
  const [functionScore, setFunctionScore] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(
    GRAPHQL_ENDPOINT === ""
  );
  const [showNeedAppIDtMessage, setShowNeedAppIDtMessage] = useState(
    APP_ID === ""
  );
  const [calledGQL, setCalledGQL] = useState("BASIC");

  const [getPlayersBasic] = useLazyQuery(FIND_PLAYERS_BASIC);
  const [getPlayersSearch] = useLazyQuery(FIND_PLAYERS_SEARCH);

  const [getRelatedPlayers] = useLazyQuery(FIND_RELATED_DATA);

  const [getPlayersAdvanced] = useLazyQuery(FIND_PLAYERS_ADVANCED);

  //  BASIC QUERY
  const performBasicQuery = async (searchTerm) => {
    console.log("PERFORMING BASIC");

    const players = await getPlayersBasic({
      variables: { Input: searchTerm },
    });
    // setPlayers(players.data.players);
    console.log("PLAYERSDATA: ", players.data);
    setPlayers(players.data.players);
    console.log(typeof players);
  };
  //   const players = await getPlayersBasic({ variables: { Input: searchTerm } });
  /*-------------------END BASIC------------------------*/

  // BASIC SEARCH QUERY FOR ONLY SEARCHBAR
  const performSearchQuery = async (searchTerm) => {
    console.log("PERFORMING SEARCH");
    setCalledGQL("SEARCH");
    const players = await getPlayersSearch({
      variables: { Input: searchTerm },
    });
    console.log("PLAYERS: ", players);
    if (players.data && players.data.search) setPlayers(players.data.search);
  };
  /*-------------------END PERFORMSEARCHQUERY------------------------*/

  // BASIC SEARCH QUERY FOR ONLY SEARCHBAR
  const performRelatedQuery = async (searchTerm) => {
    setCalledGQL("RELATED");
    const players = await getRelatedPlayers({
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
    console.log("FUNCTIONSCORE ", functionScore);
    console.log("OPERATOR ", operator);
    setCalledGQL("ADVANCED");
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

    // performBasicQuery(searchTerm);
    performSearchQuery(searchTerm);

    // performRelatedQuery(searchTerm);

    //  performSearchQueryAdvanced(searchTerm, functionScore, operator);

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
      {showNeedAppIDtMessage ? (
        <Title>
          <h2>INSERT APP_ID ON LINE 17 IN INDEX.JS FILE PLEASE 🥺</h2>
        </Title>
      ) : (
        ""
      )}
      {showNeedEndpointMessage ? (
        <Title>
          <h2>INSERT GRAPHQL ENDPOINT LINE 22 IN INDEX.JS FILE PLEASE 🥺</h2>
        </Title>
      ) : (
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="stadium"
            style={{ position: "absolute", height: "full", width: "100%" }}
          />
          {Array.isArray(players) && (
            <Grid header={searchTerm ? null : "Player Search Results"}>
              {players.map((player) => (
                <Thumb
                  key={player._id}
                  player={player}
                  clickable
                  playerID={player._id}
                  image={player.player_face_url ? player.player_face_url : ""}
                  calledGQL={calledGQL}
                ></Thumb>
              ))}
            </Grid>
          )}
        </div>
      )}
    </>
  );
};

export default Home;

export const Title = styled.div`
  display: flex-col;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 40px 0px auto;
`;
