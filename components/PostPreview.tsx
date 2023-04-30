import getPostMetaData from "./getPostMetaData";
import Link from "next/link";
import { PostMetaData } from "@/types/PostMetaData";

const PostPreview = (props: PostMetaData) => (
  <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white ">
    <Link href={`/posts/${props.slug}`}>
      <h2 className="font-bold text-violet-500 hover:underline">
        {props.title}
      </h2>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-700">{props.subtitle}</p>
    </Link>
  </div>
);

export default PostPreview;
