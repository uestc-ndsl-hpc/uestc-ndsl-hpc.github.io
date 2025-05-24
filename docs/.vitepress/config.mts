import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UESTC NDSL HPC",
  description: "A groud led by Dr.Zhang is focus on HPC and numerical linear algebra.",
  themeConfig: {
    logo: "https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/teams' },
      { text: 'Pub', link: '/pub'}
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/uestc-ndsl-hpc' }
    ]
  }
})
