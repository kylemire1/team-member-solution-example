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
      <ContentWrapper>
        <PageTitle>{name}</PageTitle>
        <ContentBox>
          <Portrait>
            <GatsbyImage
              image={getImage(portrait.localFile)}
              alt={portrait.altText}
            />
          </Portrait>
          <h3>{jobTitle}</h3>
          {parse(bio)}
        </ContentBox>
      </ContentWrapper>
    </Layout>
  )
}

const ContentBox = styled.div`
  position: relative;
  background-color: white;
  padding: 2em;
  border-radius: 1rem;
`

const Portrait = styled.div`
  position: absolute;
  top: -3.5rem;
  right: 2rem;

  .gatsby-image-wrapper {
    border-radius: 999px;
    border: solid 5px white;
  }
`

export default TeamMemberPage
