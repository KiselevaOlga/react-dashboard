import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import {BlogDashboardPage} from "./containers/blogDashboardPage/BlogDashboardPage";
import {TablesPage} from "./containers/tablesPage/TablesPage";
import {ConstructionPage} from "./containers/constructionPage/ConstructionPage";
import {NewsPage} from "./containers/newsPage/NewsPage";
import {Footer} from './components/footer/Footer';
import {Navbar} from './components/navbar/Navbar';
import {ROUTES, Sidebar} from './components/sidebar/Sidebar';

function App() {

  return (
    <Container>
      <Sidebar></Sidebar>
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
          <Route path = {ROUTES.NewsPage}>
            <NewsPage />
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
  background: #F2F4F6;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 0.15fr 1fr;
  grid-template-rows: 0.2fr 1.7fr 0.2fr; 
  grid-template-areas: 
  'sidebar header header'
  'sidebar main main'
  'sidebar footer footer'
`

const Main = styled.main`
  grid-area: main;
`