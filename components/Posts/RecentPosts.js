import React from 'react';
import PostListComponent from './Post/PostListComponent';

const RecentPosts = ({ posts, tags }) => {

    return (
        <div>
            <h2 className="mb-6">Recent Posts</h2>
            <ul>
                {posts.map((post) => (
                <li key={post.filePath}>
                    <PostListComponent post={ post } tags={ tags }/>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default RecentPosts


