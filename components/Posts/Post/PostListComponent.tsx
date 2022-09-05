import React from "react";
import Link from "next/link";
import DateComponent from "../Date/DateComponent";

const PostListComponent = ({ post }) => {
  return (
    <Link
      as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
      href={`/posts/[slug]`}
    >
      <div className="mb-6 md:p-6 xs:py-4 cursor-pointer transition-all duration-500 md:border-l-2 hover:border-green-400">
        <h2 className="mb-4 hover:text-green-400 font-bold">
          {post.data.title}
        </h2>
        <DateComponent
          className="mb-4 text-green-700 font-bold"
          date={post.data.date}
        />
        <p className="mb-4">{post.data.description}</p>
        <a className="font-bold hover:text-blue-500">Read More</a>
      </div>
    </Link>
  );
};

export default PostListComponent;
