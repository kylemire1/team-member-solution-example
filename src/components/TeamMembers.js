import React from "react"
import styled from "styled-components"

import TeamMember from "./TeamMember"

const TeamMembers = ({ teamMembers }) => {
  return (
    <TeamMembersWrapper>
      {teamMembers.length &&
        teamMembers.map(t => {
          return <TeamMember key={t.id} {...t} />
        })}
    </TeamMembersWrapper>
  )
}

const TeamMembersWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;

  @media (min-width: 52em) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default TeamMembers
