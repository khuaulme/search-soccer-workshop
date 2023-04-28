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
  const GET_PLAYERS_ENDPOINT =
    "https://europe-west1.gcp.data.mongodb-api.com/app/karenappservice-jwjzd/endpoint/players";

  // https://europe-west1.gcp.realm.mongodb.com/api/client/v2.0/app/karenappservice-jwjzd/graphql
  // https://europe-west1.gcp.data.mongodb-api.com/app/karenappservice-jwjzd/endpoint/players

  const fetchPlayers = async (searchTerm) => {
    console.log("HITTING FETCH PLAYERS API");
    console.log("SEARCHTERM: ", searchTerm);

    try {
      // BASIC SEARCH - append searchTerm as URL parameter to GET endpoint
      const endpoint = GET_PLAYERS_ENDPOINT + "?searchTerm=" + searchTerm;
      const results = await (await fetch(endpoint)).json();
      setPlayers(results.players);
      console.log("PLAYERS: ", results.players);
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
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="stadium"
          style={{ position: "absolute", height: "full", width: "100%" }}
          // className="w-full h-full object-cover absolute"
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
