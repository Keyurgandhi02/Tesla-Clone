import React from "react";
import styled from "styled-components";
function Section(props) {
  return (
    <Container bgImage={props.backImage}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>{props.leftbtn}</LeftButton>
        <RightButton>{props.rightBtn}</RightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" alt="downarrow" />
    </Container>
  );
}

export default Section;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  txt-align: center;
  flex-grow: 1;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: white;
  display: flex;
  font-szie: 12px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 50px;
`;
