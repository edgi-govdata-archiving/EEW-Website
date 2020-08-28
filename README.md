[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](https://github.com/edgi-govdata-archiving/overview/blob/master/CONDUCT.md)
![Workflow Status](https://github.com/edgi-govdata-archiving/EEW-Website/workflows/Github%20Pages%20Deploy/badge.svg)

# EEW Website

A website for the [Environmental Enforcement Watch](//environmentalenforcementwatch.org) project by [EDGI](//envirodatagov.org)

Currently staged at https://edgi-govdata-archiving.github.io/EEW-Website/

## For site maintainers
### Where to edit content
* Content is located in markdown files (`.md`) in the folder `content` > subfolder [name of the page]. *If you are not a coder, this will usually be the place to go to make edits!*
  * Images that go with a particular page should go into the same folder as the `.md` file
* Other places content might be:
  * In that same folder, a `.json` file might have some additional content that will show up on that page
  * `src/pages` and then the appropriately named `.js` file (this is the file that tells the information from the `.json` file and the `.md` file where and how to show up)
* Styling in general is in a `.css` file. The main one is in `src/global.css.js`. But it might also be in the `.js` file in `src`
* If this is all very obscure and overwhelming for you, that's ok! Just make sure to do your work in a [branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches) and submit it via a [pull request](https://docs.github.com/en/articles/about-pull-requests) and then we can review it before it goes live.

## For developers
### Toolset
* Written in [Gatsby](https://www.gatsbyjs.org/)
* Not yet hosted

### Deployment
This site is hosted on Github Pages and deployed using the npm module [gh-pages](https://github.com/tschaub/gh-pages) as recommended by Gatsby [here](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio).

Ensure you have dev dependencies installed and then run `npm run deploy` from a local clone of the `main` branch to deploy the branch to https://edgi-govdata-archiving.github.io/EEW-Website/

### Local development
1. Make sure you have [Node](https://nodejs.org/en/download/) installed
1. In a local clone of this repo, run `npm install` to install dependencies
1. You will need the Gatsby CLI tool: `npm install -g gatsby-cli`
1. Run locally with `gatsby develop` (defaults to [http://localhost:8000/](http://localhost:8000/))

[Gatsby quickstart docs](https://www.gatsbyjs.org/docs/quick-start/)

## License & Copyright

Copyright (C) 2020 Environmental Data and Governance Initiative (EDGI)

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img class="pa2" alt="Creative Commons Licence" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" /></a><br />EEW website is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

See the [`LICENSE`](/LICENSE) file for details.
