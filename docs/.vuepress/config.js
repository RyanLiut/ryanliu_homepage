const fs = require("fs");

module.exports = {
  title: "Zhu Liu",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Publications", link: "/projects/" },
      { text: "Blog", link: "/blog/" },
      // { text: "Guide", link: "/guide/" },
      // { text: "GitHub", link: "https://github.com/mtobeiyf/vuepress-homepage" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  extendPageData($page) {
    if ($page._filePath) {
      const mtime = fs.statSync($page._filePath).mtime;
      $page.lastUpdated = new Date(mtime).toLocaleString(
        $page._computed.$lang
      );
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

