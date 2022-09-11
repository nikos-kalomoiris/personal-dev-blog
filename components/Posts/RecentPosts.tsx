import React from "react";
import { Post } from "../../interfaces/post.interface";
import PostListComponent from "./Post/PostListComponent";
import NoPosts from "../../assets/images/no-posts.svg";

interface Props {
  posts: Post[];
  currentTag: string;
}

const RecentPosts = ({ posts, currentTag }) => {
  return (
    <div>
      <h2 className="mb-4">
        {currentTag !== "all" ? `Tag: ${currentTag}` : "Recent Posts"}
      </h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <PostListComponent post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <span className="text-lg font-bold">
            Currently there are no recent posts
          </span>
          <NoPosts className="w-68 p-6 sm:w-96 sm:p-10" />
        </>
      )}
    </div>
  );
};

export default RecentPosts;
