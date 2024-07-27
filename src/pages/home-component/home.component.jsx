import React from "react";
import {
  ButtonStyled,
  HeaderStyled,
  BodyStyled,
  FootStyled,
  HomeComponentStyled,
  LinkStyled,
} from "./home.styled";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {
    const username = "edris-taji";

    const url = `https://api.github.com/users/${username}`;
    const eventsUrl = `https://api.github.com/users/${username}/events`;

    // Current User
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ currentUser: data });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  render() {
    // const navigate = useNavigate();
    const { currentUser } = this.state;
    return (
      <HomeComponentStyled>
        <HeaderStyled>
          <LinkStyled to="/projects">Projects</LinkStyled>
          <LinkStyled to="/contacts">Contacts</LinkStyled>
          <ButtonStyled
            onClick={() => {
              // navigate("/search");
            }}
          >
            Try Yourself
          </ButtonStyled>
        </HeaderStyled>
        <div>
          <BodyStyled>
            <h1 className="username">{currentUser.login}</h1>
            <img
              src={`${currentUser.avatar_url}`}
              alt="shoaib-fateh-profile-image"
            />
          </BodyStyled>
          <FootStyled>
            <div className="description">{currentUser.bio}</div>

            <div className="activities">
              In last 90 days on GitHub I pushed 11 commits, opened 1 PR, merged
              4 PRs, created 2 branches, made 1 comment in public repositories.
            </div>
          </FootStyled>
        </div>
      </HomeComponentStyled>
    );
  }
}

export default HomeComponent;
