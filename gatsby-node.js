const path = require("path");
const content = require("./src/content");

exports.createPages = async ({ actions }) => {
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
};
