import React from 'react';
import Tagscomponent from './TagsComponent';

const Sidebar = ({ tags }) => {
    return (
        <div>
            <Tagscomponent tags={tags}/>
        </div>
    );
}

export default Sidebar;
