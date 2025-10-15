const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = 'https://github.com/TeamIngrid/home.git';

ghpages.publish(
  pathname,
  {
    branch: "main",//not master
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
