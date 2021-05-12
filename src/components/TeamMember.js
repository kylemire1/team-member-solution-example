import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const TeamMember = ({ kyleTeamMemberFields, name, slug }) => {
  const { portrait, jobTitle } = kyleTeamMemberFields
  return (
    <BioPageLink to={`/team-members/${slug}`}>
      <Portrait>
        <GatsbyImage
          image={getImage(portrait.localFile)}
          alt={portrait.altText}
        />
      </Portrait>
      <div>
        <NameAndTitle>
          <h2>{name}</h2>
          <p>{jobTitle}</p>
        </NameAndTitle>
      </div>
    </BioPageLink>
  )
}

const portraitOffset = "4.5rem"

const BioPageLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${portraitOffset};
  padding: 2em;
  border-radius: 1rem;
  background-color: white;
  color: currentColor;
  text-decoration: none;
`

const Portrait = styled.div`
  margin-top: -${portraitOffset};
  .gatsby-image-wrapper {
    border: solid 5px white;
    border-radius: 999px;
    overflow: hidden;
  }
`

const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2,
  p {
    margin: 0;
  }
`

export default TeamMember
