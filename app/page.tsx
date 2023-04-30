import Link from "next/link";
import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
}
