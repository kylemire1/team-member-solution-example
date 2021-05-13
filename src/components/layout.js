/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ContentWrapper } from "./styled/global"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>
        <ContentWrapper>{children}</ContentWrapper>
      </Main>
      <Footer>
        <ContentWrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </ContentWrapper>
      </Footer>
    </>
  )
}

const Main = styled.main`
  padding-bottom: 8rem;
`
const Footer = styled.footer`
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.05);
  padding-top: 1.5rem;

  a {
    color: white;
  }

  @media (min-width: 48em) {
    position: fixed;
  }
`

export default Layout
