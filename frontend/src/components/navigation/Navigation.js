import React from 'react'
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";
import {nav} from "./data";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #212529;
  margin-top: 10px;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding: 0px 20px;
  line-height: 1.5;
  margin-top: -6px;
  color: #f8f9fa;

  :hover {
    cursor: default;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  color: #f8f9fa;
  border-radius: 20px;
  ${(props) => props.isActive ? 'background: #343a40;' : ''};
  margin: 0px 5px;

  :hover {
    background: #343a40;
    text-decoration: none;
  }
`

function Navigation(props) {

  return (
    <Wrapper>
      <Logo>DeskDocker</Logo>
      {nav.map(item => (
        <NavItem isActive={props.location.pathname === item.url} to={item.url}>{item.display}</NavItem>
      ))}
    </Wrapper>
  )
}

export default withRouter(Navigation)