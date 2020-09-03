[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](https://github.com/edgi-govdata-archiving/overview/blob/master/CONDUCT.md)
[![Workflow Status](https://github.com/edgi-govdata-archiving/EEW-Website/workflows/Github%20Pages%20Deploy/badge.svg)](https://github.com/edgi-govdata-archiving/EEW-Website/actions?query=workflow%3A%22Github+Pages+Deploy%22)

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

### Adding images to .md page content
* Images should be uploaded to the same folder as the Markdown file they are used in (for example, an image on the homepage should be put in content/home).
  * If you're not comfortable with coding on your computer, you can use Github's [Upload Files](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository) functionality. Just make sure to put your image in the correct folder!
* From a Markdown (.md) content file, you can now use [Markdown syntax](https://daringfireball.net/projects/markdown/syntax#img) to link your image based on its location relative to the content file ("relative filepath"). This will look like `![alt text for image](./my-image.png)`. The `./` part means that the image is in the same folder as the file you're referencing it from.
* Don't forget to fill in the alt text! The image will render without it, but it's important to have a text description of the image for screen readers and in case the image fails to load properly.

## For developers
### Toolset
* Written in [Gatsby](https://www.gatsbyjs.org/), a Node React framework
* Hosted on Github Pages
* Continuous deployment uses Github Actions

### Deployment
#### Continuous deployment
The site currently deploys automatically on each merge to the `main` branch using Github Actions.

You can see automatic deployment status in the badge at the top of this readme.

Deployment configuration can be found in `.github/workflows/continuous-integration-workflow.yml`.

To debug, check the Actions tab of this repo.

#### Manual deployment
The site can be manually deployed using the npm module [gh-pages](https://github.com/tschaub/gh-pages) as recommended by Gatsby [here](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio).

Ensure you have dev dependencies installed and then run `npm run deploy` from a local clone of the `main` branch.

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
