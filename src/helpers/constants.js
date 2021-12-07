import reportLogo from '../images/gallery/report-making.png'
import dataVizLogo from "../images/gallery/data-viz.png"
import researchTracksLogo from "../images/gallery/research-tracks.png"
import storyGatheringLogo from "../images/gallery/story-gathering.png"
import dataScienceLogo from "../images/gallery/data-science.png"

export const HeaderLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Data",
    url: "/data/reports",
    sublinks: [
      {
        text: "Congressional Report Cards",
        url: "/data/congress",
      },
      {
        text: "Notebooks",
        url: "/data/notebooks",
      },
      {
        text: "Research",
        url: "/data/research",
      },
      {
        text: "2020 Congressional Committee Report Cards",
        url: "/data/reports",
      },
      {
        text: "External Resources",
        url: "/data/resources",
      },
      {
        text: "2020 Congressional Committee Report Cards",
        url: "/data/reports",
      },
    ],
  },
  {
    text: "Learn",
    url: "/learn/events",
    sublinks: [
      {
        text: "Events",
        url: "/learn/events",
      },
      {
        text: "Tutorials",
        url: "/learn/tutorials",
      },
    ],
  },
  {
    text: "About",
    url: "/about",
    sublinks: [
      {
        text: "People",
        url: "/about/people",
      },
      {
        text: "Funding",
        url: "/about/funding",
      },
      {
        text: "Press",
        url: "/about/press",
      },
      {
        text: "Contact",
        url: "/about/contact",
      },
      {
        text: "FAQ",
        url: "/about/faq",
      },
    ],
  },
  {
    text: "Blog",
    url: "https://envirodatagov.org/tag/eew/",
  },
  {
    text: "EDGI",
    url: "https://envirodatagov.org",
  },
];

export const AboutSidebarLinks = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "People",
    url: "/about/people",
  },
  {
    text: "Funding",
    url: "/about/funding",
  },
  {
    text: "Press",
    url: "/about/press",
  },
  {
    text: "Contact",
    url: "/about/contact",
  },
  {
    text: "FAQ",
    url: "/about/faq",
  },
];

export const LearnPageSidebarLinks = [
  {
    text: "Events",
    url: "/learn/events/",
  },
  {
    text: "Tutorials",
    url: "/learn/tutorials",
  },
];

export const DataPageSidebarLinks = [
  {
    text: "Congressional Report Cards",
    url: "/data/reports",
  },
  {
    text: "Notebooks",
    url: "/data/notebooks",
  },
  {
    text: "Research",
    url: "/data/research",
  },
  {
    text: "External Resources",
    url: "/data/resources",
  },
];

export const TabGallery = {
  "title": "EEW Events",
  "content": "events-content.md",
  "eventsSnippet": "events-snippet.md",
  "gallery": [{
    "title": "Report–Making",
    "copy": "All workshops begin by making a customized report on violations, inspections and enforcement of environmental laws in the congressional district, state, watershed or city of interest to participants.",
    "image": reportLogo
    },
    {
    "title": "Data Visualization",
    "copy": "Brainstorm and develop different ways that data can be visualized in order to convey powerful messages used for reports, social media, classroom outreach, direct action, and more.",
    "image": dataVizLogo
   },
   {
    "title": "Research Contextualization",
    "copy": "Provide location-specific context for emissions and enforcement data. Investigate facilities and locations of interest by finding news articles, community group publications, and other public documentation and incorporate relevant information into the reports.",
    "image": researchTracksLogo
    },
    {
    "title": "Story Gathering",
    "copy": "Capture the reactions, thoughts, & stories of yourself and other attendees. Use these reflections to supplement data, generate research questions, and connect.",
    "image": storyGatheringLogo
    },
    {
    "title": "Data Science",
    "copy": "Consider additional questions that the data can address. Expand the Jupyter notebooks to answer questions posed by participants.",
    "image": dataScienceLogo
     }
  ]
}
