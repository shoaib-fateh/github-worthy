import React from "react";
import { AppContainerStyled } from "./App.styled";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./pages/home-component/home.component";
import ProjectsComponent from "./pages/projects.component/projects.component";
import ContactsComponent from "./pages/contacts.component/contacts.component";
import SearchComponent from "./pages/search/search.component";

const App = () => {
  return (
    <AppContainerStyled>
      <Routes>
        <Route path="/" Component={HomeComponent} />
        <Route path="/projects" Component={ProjectsComponent} />
        <Route path="/contacts" Component={ContactsComponent} />
        <Route path="/search" Component={SearchComponent} />
      </Routes>
    </AppContainerStyled>
  );
};

export default App;
