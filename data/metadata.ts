import avatarGraph from "@/app/opengraph-image.jpg";

const metadata = {
  author: {
    name: "Eggy Shrimp",
    email: "eggy.shrimp@gmail.com",
    url: "https://eggyshrimp.github.io",
    twitter: "https://x.com/MoShian90s",
    github: "https://github.com/eggyShrimp",
    avatar: avatarGraph.src,
  },
  title: "EggyShrimp's Writings", // title of the website
  description: "A blog about my life and experiences", // description of the website
  pages: [
    { name: "Home", url: "/" },
    { name: "Archive", url: "/archive" },
    { name: "About Me", url: "/about" },
  ],
};

export default metadata;
