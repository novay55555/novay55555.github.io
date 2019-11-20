module.exports = {
  title: 'Make your code cp easily!',
  base: '/js-fragment/',
  themeConfig: {
    sidebar: [
      {
        title: 'polyfills',   // required
        path: '/polyfills/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1    // optional, defaults to 1
      },
      {
        title: 'functions',
        path: '/functions/'
      },
      {
        title: 'doms',
        path: '/doms/'
      },
      {
        title: 'urls',
        path: '/urls/'
      },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}