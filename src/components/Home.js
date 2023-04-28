import React, { useState, useEffect } from "react";
import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(false);

  // INSERT YOUR CREATED ENDPOINT
  const GET_PLAYERS_ENDPOINT = "";

  const fetchPlayers = async (searchTerm) => {
    console.log("HITTING FETCH PLAYERS API");
    console.log("SEARCHTERM: ", searchTerm);

    try {
      // BASIC SEARCH - append searchTerm as URL parameter to GET endpoint
      const endpoint = GET_PLAYERS_ENDPOINT + "?searchTerm=" + searchTerm;
      const returnedPlayers = await (await fetch(endpoint)).json();
      setPlayers(returnedPlayers);
      console.log("PLAYERS: ", returnedPlayers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!submitted) return;
    if (GET_PLAYERS_ENDPOINT === "") {
      setShowNeedEndpointMessage(true);
      return;
    }
    setShowNeedEndpointMessage(false);
    fetchPlayers(searchTerm);
    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  return (
    <>
      {" "}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPlayers={setPlayers}
        setSubmitted={setSubmitted}
      />
      <div className="container">
        {/* {showNeedEndpointMessage ? (
          <div className="needEndpoint">Build Endpoint Please 🥺</div>
        ) : (
          <Grid header={searchTerm ? null : "Player Search Results"}>
            {players.map((player) => (
              <Thumb
                key={player._id}
                player={player}
                clickable
                playerID={player._id}
                image={
                  player.player_face_url
                    ? player.player_face_url
                    : ""
                }
              ></Thumb>
            ))}
          </Grid>
            )} */}
      </div>{" "}
    </>
  );
};

export default Home;
