import React from "react";
import {
  LinkStyled,
  SearchComponentStyled,
  SearchStyled,
} from "./search.styled";

const SearchComponent = () => {
  return (
    <SearchComponentStyled>
      <LinkStyled to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          class="w-6 h-6"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          style={{
            display: "inlineBlock",
            userSelect: "none",
            verticalAlign: "text-bottom",
            overflow: "visible",
          }}
        >
          <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path>
        </svg>
      </LinkStyled>

      <SearchStyled>
        <label for="username">GitHub username</label>
        <div>
          <input placeholder="Search GitHub" type="text" value="shoaib-fateh" />
          <span class="search-button">
            <svg
              aria-hidden="true"
              focusable="false"
              class="octicon octicon-search"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
              style={{
                display: "inline-block",
                userSelect: "none",
                verticalAlign: "text-bottom",
                overflow: "visible",
              }}
            >
              <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
            </svg>
          </span>
        </div>

        <span class="guide">
          <span class="pe-2">Click</span>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            style={{
              display: "inlineBlock",
              userSelect: "none",
              verticalAlign: "text-bottom",
              overflow: "visible",
            }}
          >
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
          </svg>
          <span class="ps-2">
            or pres <kbd>Enter</kbd> to search GitHub.
          </span>
        </span>
      </SearchStyled>

      <div class="animated-h-line hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
    </SearchComponentStyled>
  );
};

export default SearchComponent;
