import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug) => {
  const folder = "./posts";
  const file = `${folder}/${slug}.md`;
  const fileContent = fs.readFileSync(file, "utf8");
  return fileContent;
};

const PostPage = ({ params }) => {
  const { slug } = params;
  const content = getPostContent(slug);
  return (
    <div>
      <h1>{slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;
