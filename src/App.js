import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import {BlogDashboardPage} from "./containers/blogDashboardPage/BlogDashboardPage";
import {TablesPage} from "./containers/tablesPage/TablesPage";
import {ConstructionPage} from "./containers/constructionPage/ConstructionPage";
import {Footer} from './components/footer/Footer';
import {Navbar} from './components/navbar/Navbar';

function App() {
  const ROUTES = {
    BlogDashboard: "/blogDashboard",
    Tables: "/tables",
    ConstructionPage: "/constructionPage"
  }
  return (
    <Container>
    <Sidebar>
      <Navlink to = {ROUTES.BlogDashboard}>Blog Dashboard</Navlink>
      <Navlink to = {ROUTES.ConstructionPage}>Blog Posts</Navlink>
      <Navlink to = {ROUTES.ConstructionPage}>Add New Post</Navlink>
      <Navlink to = {ROUTES.Tables}>Tables</Navlink>
      <Navlink to = {ROUTES.ConstructionPage}>User Profile</Navlink>
    </Sidebar>
    <Navbar></Navbar>
    <Main>
      <Switch>
      <Redirect exact from="/" to={ROUTES.BlogDashboard} />
        <Route path= {ROUTES.BlogDashboard}>
          <BlogDashboardPage />
        </Route>
        <Route path = {ROUTES.Tables}>
          <TablesPage />
        </Route>
        <Route path = {ROUTES.ConstructionPage}>
          <ConstructionPage />
        </Route>
      </Switch>
    </Main>
    <Footer></Footer>
    </Container>
  );
}

export default App;

const Container = styled.body`
  box-sizing: border-box;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 0.2fr 1.7fr 0.2fr; 
  grid-template-areas: 
  'sidebar header header'
  'sidebar main main'
  'sidebar footer footer'
`

const Sidebar = styled.nav`
  grid-area: sidebar;
  background: grey;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const Navlink = styled(NavLink)`
  border: 2px solid green;
`;

const Main = styled.main`
  grid-area: main;
  background: teal;
`