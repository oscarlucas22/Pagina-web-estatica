import hope from "vuepress-theme-hope";

export default hope.config({
  title: "LucasBlog",

  dest: "./dist",

  themeConfig: {
    logo: "/rosquilla.png",
    hostname: "https://github.com/oscarlucas22",

    author: "Óscar Lucas",
    repo: "https://github.com/oscarlucas22",

    nav: [
      { text: "Blog Home", link: "/", icon: "home" },
      {
        text: "Guía",
        icon: "creative",
        link: "/guide/",
      },
    ],
  },
});