import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Selector = ({ operator, setOperator }) => {
  const API_Options = [
    { value: "text", label: "text" },
    { value: "wildcard", label: "wildcard" },
    { value: "autocomplete", label: "autocomplete" },
  ];

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setOperator(e.value);
    console.log("OPERATOR: ", operator);
  };

  return (
    <Wrapper>
      <Select
        defaultValue={{ label: "text", value: "text" }}
        options={API_Options}
        onChange={handleChange}
        placeholder="Search Operator"
        styles={style}
      />
    </Wrapper>
  );
};

export default Selector;
const style = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export const Wrapper = styled.div`
  background: white;
  color: black;
  padding: 0 8px;
  display: flex-col;
  text-align: center;
  font-size: 24px;
  padding: 10px, 10px, 10px, 10px;
  border-radius: 5px;
  /* border: 5px solid green; */
  margin: 20px;
`;

export const Content = styled.div`
  width: full;
  border: none;
  focus: {
    outline: none !important;
  }
`;
