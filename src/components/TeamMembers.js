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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  align-items: center;
  justify-items: center;
`

export default TeamMembers
