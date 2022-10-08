import hope from "vuepress-theme-hope";

export default hope.config({
  title: "LucasBlog",
  description: "Tu página de confianza",

  dest: "./dist",

  themeConfig: {
    logo: "/heat.png",
    hostname: "https://github.com/oscarlucas22",

    author: "Óscar Lucas",
    repo: "https://github.com/oscarlucas22",

    nav: [
      { text: "Blog Home", link: "/", icon: "home" },
      {
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      },
    ],
  },
});