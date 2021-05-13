import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import { PageTitle } from "../components/styled/global"

export const pageQuery = graphql`
  query TeamMember($slug: String) {
    wpKyleTeamMember(slug: { eq: $slug }) {
      name: title
      kyleTeamMemberFields {
        bio
        jobTitle
        portrait {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: DOMINANT_COLOR
                height: 128
                width: 128
              )
            }
          }
        }
      }
    }
  }
`

const TeamMemberPage = ({ data }) => {
  const { name, kyleTeamMemberFields } = data.wpKyleTeamMember
  const { jobTitle, bio, portrait } = kyleTeamMemberFields

  return (
    <Layout>
      <PageTitle>{name}</PageTitle>
      <ContentBox>
        <Portrait>
          <GatsbyImage
            image={getImage(portrait.localFile)}
            altText={portrait.altText}
          />
        </Portrait>
        <h2>{jobTitle}</h2>
        <p>{bio}</p>
      </ContentBox>
    </Layout>
  )
}

const ContentBox = styled.div`
  position: relative;
  background: white;
  padding: 2em;
  padding-top: 4.5rem;
  margin-top: 4rem;
  border-radius: 1rem;

  @media (min-width: 48em) {
    margin-top: 0;
    padding-top: 3em;
  }
`

const Portrait = styled.div`
  position: absolute;
  top: -3rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  .gatsby-image-wrapper {
    border-radius: 999px;
    border: solid 3px white;
  }

  @media (min-width: 48em) {
    justify-content: flex-end;

    .gatsby-image-wrapper {
      border-width: 5px;
    }
  }
`

export default TeamMemberPage
