import React from "react";
import MLOGO from "../images/PlayerLogo.png";
import SearchBar from "./SearchBar/SearchBar";
import SearchIcon from "../images/Search.png";
import styled from "styled-components";

const Header = ({ searchTerm, setSearchTerm, setPlayers, setSubmitted }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <Wrapper>
      <Title>
        <h8>Atlas Search Soccer</h8>
      </Title>

      <Content>
        <Logo src={MLOGO} alt="mdb-logo" />
        <InputForm>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setPlayers={setPlayers}
            setSubmitted={setSubmitted}
          />
        </InputForm>

        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSubmit}
          width="100px"
        />
      </Content>
      <hr></hr>
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
  display: flex-col;
  text-align: center;
  font-size: 40px;
`;
export const Title = styled.div`
  display: flex-col;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 40px 0px auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding: 0 40px;
  margin: 0 auto;
`;

export const InputForm = styled.div`
  width: 80%;
`;

export const Logo = styled.img`
  width: 15%;
`;
