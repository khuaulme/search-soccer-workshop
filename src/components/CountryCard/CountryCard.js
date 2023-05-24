import React from "react";
import Trophy from "../../images/cup.png";

import { Wrapper, Content, Image, TraitLine } from "./CountryCard.styles";

const CountryCard = ({ nation }) => {
  // console.log("STATS", stats);
  console.log("NATION: ", nation);
  return (
    <Wrapper>
      <Content>
        <Image src={Trophy} alt="WorldCup"></Image>
        <div>
          <h2>{nation}</h2>
          <h3>8 Championships</h3>
          <h3>8 Finals</h3>
          <h3>8 Semifinals</h3>
          <h3>8 Quarterfinals</h3>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CountryCard;
