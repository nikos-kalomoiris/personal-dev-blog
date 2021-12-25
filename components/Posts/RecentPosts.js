import React from 'react';
import PostListComponent from './Post/PostListComponent';

const RecentPosts = ({ posts, tags, currentTag }) => {

    return (
        <div>
            <h2 className="mb-6">{currentTag !== 'all' ? `Tag: ${currentTag}` : 'Recent Posts'}</h2>
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


