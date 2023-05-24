import React from "react";
import CountryCard from "../CountryCard/CountryCard";

import {
  Wrapper,
  Content,
  Image,
  ScoreBadge,
  TraitLine,
  TraitImage,
} from "./Thumb.styles";

const Thumb = ({ player, image }) => {
  // const score = player?.score.toString().slice(0, 5);
  //const score = 100;

  let stats = {
    country: "UNKNOWN",
    ChampionshipCount: 0,
    FinalsCount: 0,
    QuartersCount: 0,
    SemisCount: 0,
  };
  let nation = "UNKNOWN";
  if (player.nationality_name !== null) {
    stats = player.nationality_name;
    nation = player.nationality_name.country;
  }

  return (
    <Wrapper>
      <Content>
        {/* <ScoreBadge>Score: {score}</ScoreBadge> */}
        <h2>{player.long_name}</h2>
        <TraitLine>
          <TraitImage src={player?.nation_flag_url} alt="flag"></TraitImage>
          <h4>{nation}</h4>
          <h4>{player.nation_jersey_number}</h4>
        </TraitLine>
        <Image src={image} alt="player-thumb" />
        <TraitLine>
          <TraitImage src={player?.club_logo_url} alt="club"></TraitImage>
          <h4>{player.club_name}</h4>
          <h4>{player.club_jersey_number}</h4>
        </TraitLine>
        <h4>Positions: {player?.player_positions}</h4>

        <hr></hr>
        <h1>Overall: {player?.overall}</h1>
        <CountryCard nation={nation} stats={stats} />
      </Content>
    </Wrapper>
  );
};

export default Thumb;
