import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
  const folder = "./posts";
  const file = `${folder}/${slug}.md`;
  const fileContent = fs.readFileSync(file, "utf8");
  const matterResult = matter(fileContent);

  return matterResult;
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }: PostPageProps) => {
  const { slug } = params;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
