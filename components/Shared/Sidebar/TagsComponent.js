import React from 'react';
import Tag from './Tag';

const Tagscomponent = () => {
    return (
        <div>
            <h3 className="mb-6"> Tags </h3>
            <nav className="flex flex-wrap flex-row">
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-blue-400', 'icon': ['fab', 'react']}} />
                <Tag tag={{'text': 'Vue', 'bgColor' : 'bg-green-400', 'icon': ['fab', 'vuejs']}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-gray-400'}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-red-400'}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-blue-400'}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-blue-400'}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-blue-400'}} />
                <Tag tag={{'text': 'React', 'bgColor' : 'bg-blue-400'}} />
            </nav>
        </div>
    );
}

export default Tagscomponent;
