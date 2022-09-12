import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { ITag } from "../../../interfaces/tag.interface";

const Tagscomponent = ({ tags, onTagSelection, currentTag }) => {
  return (
    <div>
      <h3 className="mb-6"> Tags </h3>
      <nav className="flex flex-wrap flex-row">
        {tags.length > 0 ? (
          tags.map((tag: ITag) => (
            <Tag
              tag={tag}
              key={tag.text}
              onTagSelection={onTagSelection}
              currentTag={currentTag}
            />
          ))
        ) : (
          <span className="text-lg">No tags available at the moment</span>
        )}
      </nav>
    </div>
  );
};

export default Tagscomponent;
