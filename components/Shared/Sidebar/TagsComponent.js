import React, { useEffect, useState } from 'react';
import Tag from './Tag';
import { TagsMap } from '../../Utils/TagsMap';

const Tagscomponent = ({ tags, onTagSelection, currentTag }) => {

    return (
        <div>
            <h3 className="mb-6"> Tags </h3>
            <nav className="flex flex-wrap flex-row">
                {tags && tags.map(tag => (
                    <Tag tag={tag} key={tag.text} onTagSelection={onTagSelection} currentTag={currentTag} />
                ))}
            </nav>
        </div>
    );
}

export default Tagscomponent;
