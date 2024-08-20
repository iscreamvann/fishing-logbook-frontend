import React from 'react';
import { Link } from 'react-router-dom';
import {styled} from "styled-components"

const SideBarStyled = styled.nav`
    background-color: #176e05;
    color: #fff;
    padding: 1rem;
    box-sizing: border-box;
    width: 200px;
    position: fixed;
    height: 100%;
    a{
      color: white;
    }
`

const Sidebar = () => (
  <SideBarStyled>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/add-fish">Add Fish</Link></li>
      <li><Link to="/">Log out</Link></li>
    </ul>
  </SideBarStyled>
);

export default Sidebar;
