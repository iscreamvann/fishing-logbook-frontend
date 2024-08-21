import React from 'react';
import { Link } from 'react-router-dom';
import {styled} from "styled-components"
import color from "../../styles/colors"
import {deleteToken} from "../../services/apiServices"
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import {getToken} from "../../services/apiServices"

const navbarHeight = "50px"

const SideBarStyled = styled.nav`
    background-color: ${color.theme.primary};
    color: #fff;
    box-sizing: border-box;
    position: fixed;
    height: ${navbarHeight};
    width: 100%;
    z-index: 10;
    a{
      color: white;
    }
    &.closed{
      overflow: hidden;
    }
/* If desktop overide these styles */
    @media (min-width: 720px){
      height: 100%;
      width: 200px;
    }
`

const MenuButtonStyled = styled.button`
 font-weight: 800;
 background: none;
 font-size: 30px;
 border: none;
 color: white;
 width: ${navbarHeight};
 height: ${navbarHeight};
margin-left: auto;
display: block;

 /* border */
@media (min-width: 720px){
  display: none;
}
`

const LinkListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
    background-color: ${color.theme.primary};
    margin: 0;
    padding: 10px 20px;
    @media (min-width: 720px){
      width: 200px;
      margin: 0;
      box-sizing: border-box;

}
    `

const LinkStyled = styled.li`
  /* background-color: ${color.theme.primaryLight}; */
  width: 100%;
  padding: 0;
  &:hover{
    background-color: ${color.theme.primaryLight};
  }
  a{
  
    display: block;
    /* background-color: red; */
    width: 100%;
    padding: 10px 10px;
    text-decoration: none;
  }
`

const UserNameStyled  = styled.div`
font-weight: 600;
font-size: 20px;
color: white;
display: inline-block;
position: absolute;
top: 0;
left: 20px;
height: 50px;
line-height: 50px;
@media (min-width: 720px){
  padding: 30px;
padding-bottom: 60px;
position: relative;
padding-left:10px;
padding-top: 10px;
}
`

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const navigate = useNavigate()

  const logOut = () => {
    console.log("hi")
    deleteToken()
    navigate("/")
  }
console.log("token", getToken())
  const user = jwtDecode(getToken());

console.log("user: ", user)
  return (
  <SideBarStyled className={isMenuOpen ? "open" : "closed"}>
    <UserNameStyled>{user.firstName} {user.lastName}</UserNameStyled>
    <MenuButtonStyled onClick={() => {
      if(isMenuOpen == false){
        setIsMenuOpen(true)
      }
      else{
        setIsMenuOpen(false)
      }
    }}>
      {isMenuOpen ? "x" : "-"}
    </MenuButtonStyled>
    <LinkListStyled>
    
      <LinkStyled><Link to="/dashboard">Dashboard</Link></LinkStyled>
      <LinkStyled><Link to="/add-fish">Add Fish</Link></LinkStyled>
      <LinkStyled><Link to="/leaderboard">Leaderboard</Link></LinkStyled>
      <br/><br/>
      <LinkStyled><Link to="/" onClick={(ev) => {ev.preventDefault(); logOut()}}>Log out</Link></LinkStyled>
    </LinkListStyled>
  </SideBarStyled>
)};

export default Sidebar;
