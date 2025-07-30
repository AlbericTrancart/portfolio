const path = require('path');
const slugify = require('slugify');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then((result) => {
      const createdTagPages = [];

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.tsx`),
          context: {
            slug: node.fields.slug,
          },
        });

        node.frontmatter.tags.push('Theatre');
        node.frontmatter.tags.push('Heavy metal');
        node.frontmatter.tags.forEach((tag) => {
          if (createdTagPages.includes(tag)) {
            return;
          }

          createPage({
            path: `/tag/${slugify(tag, { lower: true })}`,
            component: path.resolve(`./src/templates/tag.tsx`),
            context: {
              tag,
            },
          });

          createdTagPages.push(tag);
        });
      });
      resolve();
    });
  });
};
