import styled from "styled-components";
const AuthHeader = () => {
  return (
    <Container>
      <img src="/images/logo.svg" alt="tesla logo" />
    </Container>
  );
};

export default AuthHeader;
const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
