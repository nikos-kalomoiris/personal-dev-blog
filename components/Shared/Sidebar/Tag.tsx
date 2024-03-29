import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tag = ({ tag, onTagSelection, currentTag }) => {
  return (
    <div
      onClick={() => onTagSelection(tag)}
      className={`flex items-center p-2 bg-${tag.bgColor} w-max p-1.5 text-white mr-2 mb-2 rounded-3xl cursor-pointer hover:scale-110 duration-75 transition-all ease-linear dark:bg-${tag.bgColorDark}`}
    >
      <FontAwesomeIcon className="m-1" icon={tag.icon} />
      <p className="pr-2">{tag.text}</p>
      {currentTag === tag.text && <FontAwesomeIcon icon={["fas", "check"]} />}
    </div>
  );
};

export default Tag;
