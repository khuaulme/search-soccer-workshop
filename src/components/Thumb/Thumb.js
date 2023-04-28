import React from "react";

import { Wrapper, Content, Image, ScoreBadge } from "./Thumb.styles";

const Thumb = ({ player, image }) => {
  const score = player.score.toString().slice(0, 5);

  return (
    <Wrapper>
      <Content>
        <h2>{player.short_name}</h2>
        <Image src={image} alt="player-thumb" />
        <ScoreBadge>Score: {score}</ScoreBadge>
      </Content>
    </Wrapper>
  );
};

export default Thumb;
