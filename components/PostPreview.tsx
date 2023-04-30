import getPostMetaData from "./getPostMetaData";
import Link from "next/link";
import { PostMetaData } from "@/types/PostMetaData";

const PostPreview = (props: PostMetaData) => (
  <div>
    <Link href={`/posts/${props.slug}`}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </Link>
  </div>
);

export default PostPreview;
