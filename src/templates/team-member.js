import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { ContentWrapper, PageTitle } from "../components/styled/global"
import parse from "html-react-parser"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const pageQuery = graphql`
  query TeamMember($slug: String!) {
    wpKyleTeamMember(slug: { eq: $slug }) {
      name: title
      kyleTeamMemberFields {
        bio
        jobTitle
        portrait {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const TeamMemberPage = ({ data }) => {
  const { name, kyleTeamMemberFields } = data.wpKyleTeamMember
  const { bio, jobTitle, portrait } = kyleTeamMemberFields
  return (
    <Layout>
      <PageTitle>{name}</PageTitle>
      <ContentBox>
        <Portrait>
          <GatsbyImage
            image={getImage(portrait.localFile)}
            alt={portrait.altText}
          />
        </Portrait>
        <h3>{jobTitle}</h3>
        <p>{parse(bio)}</p>
      </ContentBox>
    </Layout>
  )
}

const ContentBox = styled.div`
  position: relative;
  background-color: white;
  padding: 4em 2em 2em;
  margin-top: 3.5rem;
  border-radius: 1rem;

  p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 48em) {
    padding-top: 3em;
    margin-top: 0;
  }
`

const Portrait = styled.div`
  position: absolute;
  top: -2.75rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  .gatsby-image-wrapper {
    border-radius: 999px;
    border: solid 3px white;
    max-width: 100px;
  }

  @media (min-width: 48em) {
    justify-content: flex-end;
    right: 2rem;
    .gatsby-image-wrapper {
      border: solid 5px white;
      max-width: 100%;
    }
  }
`

export default TeamMemberPage
