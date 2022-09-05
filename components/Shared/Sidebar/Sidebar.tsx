import React, { useEffect } from 'react';
import Tagscomponent from './TagsComponent';


const Sidebar = ({ tags, onTagSelection, currentTag }) => {
    return (
        <div>
            <Tagscomponent tags={tags} onTagSelection={onTagSelection} currentTag={currentTag}/>
        </div>
    );
}

export default Sidebar;
