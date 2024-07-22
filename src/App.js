import React from "react";
import { AppContainerStyled } from "./App.styled";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./components/home-component/home.component";
import ProjectsComponent from "./components/projects.component";
import ContactsComponent from "./components/contacts.component";

const App = () => {
  return (
    <AppContainerStyled>
      <Routes>
        <Route path="/" Component={HomeComponent} />
        <Route path="/projects" Component={ProjectsComponent} />
        <Route path="/contacts" Component={ContactsComponent} />
      </Routes>
    </AppContainerStyled>
  );
};

export default App;
