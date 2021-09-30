import styled from "styled-components";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {Icon} from "../navbar/Navbar";
import edit from "../../images/icons/edit.svg";
import videoOut from "../../images/icons/youtube.svg"
import powerOff from "../../images/icons/power-off.svg";
import blogList from "../../images/icons/blogList.svg";
import home from "../../images/icons/home.svg";
import note from "../../images/icons/note.svg";
import settings from "../../images/icons/settings.svg";
import table from "../../images/icons/table.svg";
import theme from "../../images/icons/theme.svg";
import user from "../../images/icons/user2.svg";
import addFile from "../../images/icons/addFile.svg";

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
                <p>Welcome back, Olga!</p>
            </SideHeader>
            <ul className="navlist">
                <NavLI className="activeLink">
                    <Icon Src={home} width="20px" className="sideIcon" ></Icon>
                    <Navlink className="myLink" to = {ROUTES.BlogDashboard}>Blog Dashboard</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={blogList} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>Blog Posts</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={addFile} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>
                        Add New Post</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={table} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.Tables}>Tables</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={user} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>User Profile</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={note} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>Notes</Navlink>
                </NavLI>
            </ul>
            <SideHeader>
                <Icon Src={edit} width="30px"></Icon>
                <p>Edit settings</p>
            </SideHeader>
            <ul className="navlist">
                <NavLI>
                    <Icon Src={settings} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>Main setting</Navlink>
                </NavLI>
                <NavLI>
                    <Icon Src={theme} width="20px" className="sideIcon"></Icon>
                    <Navlink to = {ROUTES.ConstructionPage}>Themes</Navlink>
                </NavLI>
            </ul>
            <button className="logout">
                <Icon Src={powerOff}></Icon>
                Log out
            </button>
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
    padding: 5px 0px 5px 10px;
    & > * {
        z-index: 200;
    }
    &:hover {
        background: lightgrey;
        border-left: 5px solid #0BB3FF;
        ${Icon}{
            opacity: 0.5;
        }
    }

`;

const Navlink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

const SideHeader = styled.header`
    display: flex;
    border-bottom: 1px solid lightgrey;
`;