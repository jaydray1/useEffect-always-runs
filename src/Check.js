import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckboxHolder = styled.div`
  display: flex;
  width: 8em;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 8em;
`;

const CustomButton = styled.button`
  height: 3rem;
  border-radius: 10px;
  border-color: red;
  font-size: 16px;
  &:hover {
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    background-color: red;
    cursor: pointer;
    color: white;
  }
`;

const Check = ({ random, checker, checkedBool }) => {
  React.useEffect(() => {
    console.log("Clicked");
  });

  return (
    <Container>
      <CheckboxHolder>
        <input
          type="checkbox"
          value={checkedBool}
          label="Check Me!"
          name="checker"
          onClick={checker}
        />
        <label for="checker">Check Me!</label>
      </CheckboxHolder>
      <ButtonHolder>
        <CustomButton onClick={random}>Press Me!</CustomButton>
      </ButtonHolder>
    </Container>
  );
};

export default Check;
