import React from "react";
import Trophy from "../../images/cup.png";

import { Wrapper, Content, Image, TraitLine } from "./CountryCard.styles";

const CountryCard = ({ nation, stats }) => {
  // console.log("STATS", stats);
  console.log("NATION: ", nation);
  return (
    <Wrapper>
      <Content>
        <Image src={Trophy} alt="WorldCup"></Image>
        <div>
          <h2>{nation}</h2>
          <h3>{stats.ChampionshipCount} Championships</h3>
          <h3>{stats.FinalsCount} Finals</h3>
          <h3>{stats.SemisCount} Semifinals</h3>
          <h3>{stats.QuartersCount} Quarterfinals</h3>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CountryCard;
