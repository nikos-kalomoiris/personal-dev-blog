import React, { useEffect, useState } from 'react';
import Tag from './Tag';
import { TagsMap } from '../../Utils/TagsMap';

const Tagscomponent = ({ tags }) => {

    const [propTags, setPropTags] = useState([])

    const mapTagsOptions = (tag) => {
        return TagsMap.filter(tagMap => {
            if(tag.text === tagMap.text) {
                return tagMap
            } 
        })[0]
    }

    useEffect(() => {
        setPropTags(tags.map(tag => {
           return mapTagsOptions(tag)
        }).filter(el => el !== undefined))
    }, [tags]);

    return (
        <div>
            <h3 className="mb-6"> Tags </h3>
            <nav className="flex flex-wrap flex-row">
                {propTags && propTags.map(tag => (
                    <Tag tag={tag} key={tag.text}/>
                ))}
            </nav>
        </div>
    );
}

export default Tagscomponent;
