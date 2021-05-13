import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TeamMembers from "../components/TeamMembers"
import { ContentWrapper, PageTitle } from "../components/styled/global"

export const pageQuery = graphql`
  query TeamMembers {
    allWpKyleTeamMember {
      nodes {
        id
        name: title
        slug
        kyleTeamMemberFields {
          jobTitle
          portrait {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  quality: 100
                  layout: FIXED
                  height: 128
                  width: 128
                )
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const teamMembers = data.allWpKyleTeamMember.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <ContentWrapper>
        <PageTitle>Our Innovative Team</PageTitle>

        <TeamMembers teamMembers={teamMembers} />
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
