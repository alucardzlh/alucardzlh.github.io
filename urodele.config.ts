export const config = {
  github: {
    login: "alucardzlh", // github login name, not user name
    repo: "alucardzlh.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Alucard's blog",
    brand: "Welcome",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© Alucardzlh",
    copyrightUrl: "https://github.com/alucardzlh",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
