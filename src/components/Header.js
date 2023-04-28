import React from "react";
import MLOGO from "../images/PlayerLogo.png";
import SearchBar from "./SearchBar/SearchBar";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding: 40px 40px;
  margin: 0 auto;
`;

export const InputForm = styled.div`
  width: 80%;
`;

export const Logo = styled.img`
  width: 15%;
`;

const Header = ({
  searchTerm,
  setSearchTerm,

  setMovies,
  setSubmitted,
}) => (
  <Wrapper>
    <Content>
      <Logo src={MLOGO} alt="mdb-logo" />
      <InputForm>
        <SearchBar
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setMovies={setMovies}
          setSubmitted={setSubmitted}
        />
      </InputForm>
    </Content>
  </Wrapper>
);

export default Header;
