import * as React from "react"
import { Link } from "gatsby"
import { ContentWrapper } from "./styled/global"
import styled from "styled-components"

const Header = () => (
  <StyledHeader>
    <ContentWrapper>
      <SiteTitle>
        <Link to="/">FreshApps</Link>
      </SiteTitle>
    </ContentWrapper>
  </StyledHeader>
)

const StyledHeader = styled.header`
  padding-top: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
`

const SiteTitle = styled.p`
  margin: 0;

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
  }
`

export default Header
