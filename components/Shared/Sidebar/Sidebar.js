import React, { useEffect } from 'react';
import Tagscomponent from './TagsComponent';


const Sidebar = ({ tags, onTagSelection }) => {
    return (
        <div>
            <Tagscomponent tags={tags} onTagSelection={onTagSelection}/>
        </div>
    );
}

export default Sidebar;
