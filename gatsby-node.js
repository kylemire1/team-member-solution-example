const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("src/templates/team-member.js")

  try {
    const gqlResult = await graphql(`
      query TeamMemberSlugs {
        allWpKyleTeamMember {
          nodes {
            slug
          }
        }
      }
    `)

    gqlResult.data.allWpKyleTeamMember.nodes.forEach(({ slug }) => {
      createPage({
        path: `/team-members/${slug}`,
        component: template,
        context: {
          slug,
        },
      })
    })
  } catch (error) {
    throw error
  }
}
