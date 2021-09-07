import styled from "styled-components";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {Icon} from "../navbar/Navbar";
import edit from "../../images/icons/edit.svg";
import videoOut from "../../images/icons/youtube.svg"
import powerOff from "../../images/icons/power-off.svg";

export const ROUTES = {
    BlogDashboard: "/blogDashboard",
    Tables: "/tables",
    ConstructionPage: "/constructionPage"
}

export const Sidebar = ()=>{

    return (
        <Sidenav>
            <SideHeader>
                <Icon Src={videoOut} width = "50px"></Icon>
                <p>Welcome back, User name!</p>
            </SideHeader>
            <ul className="navlist">
                <NavLI><Navlink className="myLink" to = {ROUTES.BlogDashboard}>Blog Dashboard</Navlink></NavLI>
                <NavLI><Navlink to = {ROUTES.ConstructionPage}>Blog Posts</Navlink></NavLI>
                <NavLI><Navlink to = {ROUTES.ConstructionPage}>Add New Post</Navlink></NavLI>
                <NavLI><Navlink to = {ROUTES.Tables}>Tables</Navlink></NavLI>
                <NavLI><Navlink to = {ROUTES.ConstructionPage}>User Profile</Navlink></NavLI>
            </ul>
            <SideHeader>
                <Icon Src={edit} width="30px"></Icon>
                <p>Edit settings</p>
            </SideHeader>
            <ul className="navlist">
                <NavLI><Navlink to = {ROUTES.ConstructionPage}>Main setting</Navlink></NavLI>
                <NavLI><Navlink to = {ROUTES.ConstructionPage}>Themes</Navlink></NavLI>
            </ul>
            <p className="logout">
                <Icon Src={powerOff}></Icon>
                Log out
            </p>
        </Sidenav>
    )
}


const Sidenav = styled.nav`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) -7px -7px 29px 10px;
 
`;
const NavLI = styled.li`
    text-align: left;
    transition: all 150ms linear;
    position: relative;
    z-index: 3;
    padding: 5px 0px 5px 15px;
    & > * {
        z-index: 200;
    }
    &:hover {
        background: lightgrey;
        border-left: 3px solid blue;
    }
`

const Navlink = styled(NavLink)`
    text-decoration: none;
`;

const SideHeader = styled.header`
    display: flex;
    border-bottom: 1px solid lightgrey;
`