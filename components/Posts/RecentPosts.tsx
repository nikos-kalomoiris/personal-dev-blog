import React from "react";
import { Post } from "../../interfaces/post.interface";
import PostListComponent from "./Post/PostListComponent";

interface Props {
  posts: Post[];
  currentTag: string;
}

const RecentPosts = ({ posts, currentTag }) => {
  return (
    <div>
      <h2 className="mb-6">
        {currentTag !== "all" ? `Tag: ${currentTag}` : "Recent Posts"}
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <PostListComponent post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
