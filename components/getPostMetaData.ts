import matter from "gray-matter";
import { PostMetaData } from "../types/PostMetaData";
import fs from "fs";

const getPostMetaData = (): PostMetaData[] => {
  const folder = "./posts";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));

  // Get the metadata for all blog posts
  const allPostsData = markdownFiles.map((file) => {
    const fileContent = fs.readFileSync(`${folder}/${file}`, "utf8");
    const { data } = matter(fileContent);
    return {
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      slug: file.replace(".md", ""),
    };
  });

  return allPostsData;
};

export default getPostMetaData;
