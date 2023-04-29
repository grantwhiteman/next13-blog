import fs from "fs";
import Link from "next/link";

const getPostMetaData = () => {
  const folder = "./posts";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <div>{postPreviews}</div>;
}
