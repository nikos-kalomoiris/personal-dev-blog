import React from 'react';
import Link from 'next/link'


const PostListComponent = ({ post }) => {
    return (
        <Link 
            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}?foo=jojo`}
            href={`/posts/[slug]`}>
            <div className="mb-6 py-4 cursor-pointer">
                <h2 className="mb-4 hover:text-green-500 font-bold">{ post.data.title }</h2>
                <p className="mb-4">{ post.data.description }</p>
                <a className="font-bold">Read More</a>
            </div>
        </Link>
    );
}

export default PostListComponent;
