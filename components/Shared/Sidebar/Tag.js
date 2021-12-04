import React from 'react';

const Tag = ({ tag }) => {
    return (
        <div className="p-2 bg-green-700 rounded-full w-max text-white mr-2 mb-2">
            <p>{ tag.text }</p>
        </div>
    );
}

export default Tag;
