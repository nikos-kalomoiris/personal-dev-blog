import React from 'react';
import Tag from './Tag';

const Tagscomponent = () => {
    return (
        <div>
            <h3 className="mb-6"> Tags </h3>
            <nav className="flex flex-wrap flex-row">
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
                <Tag tag={{'text': 'React'}} />
            </nav>
        </div>
    );
}

export default Tagscomponent;
