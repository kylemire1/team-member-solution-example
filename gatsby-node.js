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
        // Path for this page - required
        path: `/team-members/${slug}`,
        // The template for the page
        component: template,
        // Props that will be available in the page
        context: {
          slug,
        },
      })
    })
  } catch (error) {
    throw error
  }
}
