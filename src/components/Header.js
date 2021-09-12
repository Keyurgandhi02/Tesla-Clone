/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.token);
  const userIsLoggedIn = !!authData;
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <Container>
      <Link to="/home">
        <img src="/images/logo.svg" alt="tesla logo" />
      </Link>

      <MenuGroup>
        <div>
          <Link to="/models/s">Model S</Link>
        </div>
        <div>
          <Link to="/models/x">Model X</Link>
        </div>
        <div>
          <Link to="/models/y">Model Y</Link>
        </div>
        <div>
          <Link to="/models/3">Model 3</Link>
        </div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Shop</a>
        {!userIsLoggedIn && <Link to="/account">Tesla Account</Link>}
        {userIsLoggedIn && (
          <Link to="/" onClick={logoutHandler}>
            Logout
          </Link>
        )}
        <MenuIconContainer onClick={() => setIsOpen(true)}>
          <MenuIcon></MenuIcon>
        </MenuIconContainer>
      </RightMenu>
      <BurgerMenu status={isOpen}>
        <CloseContainer>
          <Close onClick={() => setIsOpen(false)}></Close>
        </CloseContainer>
        <li>
          <a href="#"> Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#"> Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a>Solar Roof</a>
        </li>
        <li>
          <a>Solar Panels</a>
        </li>
        <li> Existing Inventory</li>
        <li> Used Inventory</li>
        <li> Trade-In</li>
        <li> Powerwall</li>
        <li> Commercial Energy</li>
        <li> Utilities</li>
        <li> Test Drive</li>
        <li> Charging</li>
        <li> Find Us</li>
        <li> Support</li>
        <li>Careers</li>
        <li> Shop</li>
        <li> Account</li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

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
const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 10px;
  }
`;
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  width: 300px;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  list-style: none;
  transform: ${(props) =>
    props.status ? "translatex(0)" : "translatex(100%)"};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;
