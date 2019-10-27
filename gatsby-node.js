const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const content = require("./src/content");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  content.posts.forEach(post => {
    createPage({
      path: post.url,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        post
      }
    });
  });

  content.projects.forEach(project => {
    createPage({
      path: project.url,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        project
      }
    });
  });

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
      const { edges } = result.data.allMarkdownRemark;
      const numberOfArticles = edges.length;

      result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
        const previous = index > 0 ? edges[index - 1].node : null;
        const next =
          index < numberOfArticles - 1 ? edges[index + 1].node : null;
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
            previous,
            next
          }
        });
      });
      resolve();
    });
  });
};
