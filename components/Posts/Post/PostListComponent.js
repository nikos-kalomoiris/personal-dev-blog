import React from 'react';
import Link from 'next/link'


const PostListComponent = ({ post }) => {
    return (
        <Link 
            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={`/posts/[slug]`}>
            <div className="mb-6 p-4 bg-gray-100">
                <h2 className="mb-4 hover:text-green-500 font-bold">{ post.data.title }</h2>
                <p className="mb-4">{ post.data.description }</p>
                <a className="font-bold">Read More</a>
            </div>
        </Link>
    );
}

export default PostListComponent;
