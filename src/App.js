import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import './App.css';
import {BlogDashboardPage} from "./containers/blogDashboardPage/BlogDashboardPage";
import {TablesPage} from "./containers/tablesPage/TablesPage";
import {ConstructionPage} from "./containers/constructionPage/ConstructionPage";

function App() {
  const ROUTES = {
    BlogDashboard: "/blogDashboard",
    Tables: "/tables",
    ConstructionPage: "/constructionPage"
  }
  return (
    <>
    <nav>
      <NavLink to = {ROUTES.BlogDashboard}>Blog Dashboard</NavLink> 
      <NavLink to = {ROUTES.ConstructionPage}>Blog Posts</NavLink>
      <NavLink to = {ROUTES.ConstructionPage}>Add New Post</NavLink>
      <NavLink to = {ROUTES.Tables}>Tables</NavLink>
      <NavLink to = {ROUTES.ConstructionPage}>User Profile</NavLink>
    </nav>
    <main>
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
    </main>
    </>
  );
}

export default App;
