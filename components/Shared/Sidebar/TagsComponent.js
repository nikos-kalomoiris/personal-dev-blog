import React, { useEffect, useState } from 'react';
import Tag from './Tag';
import { TagsMap } from '../../Utils/TagsMap';

const Tagscomponent = ({ tags }) => {

    const [propTags, setPropTags] = useState(tags)

    const mapTagsOptions = () => {
        propTags = propTags.map(tag => {
            console.log(tag)
            return TagsMap.map(tagMap => {
                if(tag.text === tagMap.text) {
                    console.log(tagMap)
                    return tagMap
                }
            })
        })
    }

    useEffect(() => {
        mapTagsOptions()
    }, [propTags]);

    console.log(propTags)

    return (
        <div>
            <h3 className="mb-6"> Tags </h3>
            <nav className="flex flex-wrap flex-row">
                {tags && tags.map(tag => (
                    <Tag tag={tag} key={tag.text}/>
                ))}
            </nav>
        </div>
    );
}

export default Tagscomponent;
