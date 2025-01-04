import { defineConfig } from "vitepress";

const base = "/my-online-blog/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "桀桀桀",
  description: "A VitePress Site",
  // 最后更新于
  lastUpdated: true,
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: `${base}favicon-96x96.png`,
        size: "96x96",
      },
    ],
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: `${base}favicon.svg` },
    ],
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        type: "image/png",
        href: `${base}apple-touch-icon.png`,
        size: "180x180",
      },
    ],
    ["link", { rel: "manifest", href: `${base}site.webmanifest` }],
  ],

  themeConfig: {
    logo: "/favicon-96x96.png",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      copyright:
        'Copyright © 2025-present <a href="https://github.com/zkf990305">ZHENG</a>',
    },
  },
});
