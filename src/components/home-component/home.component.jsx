import React from "react";
import {
  ButtonStyled,
  HeaderStyled,
  BodyStyled,
  FootStyled,
  HomeComponentStyled,
  LinkStyled,
} from "./home.styled";

const HomeComponent = () => {
  return (
    <HomeComponentStyled>
      <HeaderStyled>
        <LinkStyled to="/projects">Projects</LinkStyled>
        <LinkStyled to="/contacts">Contacts</LinkStyled>
        <ButtonStyled>Try Yourself</ButtonStyled>
      </HeaderStyled>
      <div>
        <BodyStyled>
          <h1 className="username">shoaib-fateh</h1>
          <img src="./avatar.png" alt="shoaib-fateh-profile-image" />
        </BodyStyled>
        <FootStyled>
          <div className="description">
            Hi, my name is Jiří Hofman. 👨‍💻👩‍🍼👦👶🍵🍺🤘
            <br />
            I'm building stuff at client IOclient IO and MindManagerMindManager
          </div>

          <div className="activities">
            In last 90 days on GitHub I pushed 11 commits, opened 1 PR, merged 4
            PRs, created 2 branches, made 1 comment in public repositories.
          </div>
        </FootStyled>
      </div>
    </HomeComponentStyled>
  );
};

export default HomeComponent;
