import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import RecentPosts from "../components/Posts/RecentPosts";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { useState, useEffect, FC } from "react";
import { TagsMap } from "../components/Utils/TagsMap";
import { Post } from "../interfaces/post.interface";
import { ITag } from "../interfaces/tag.interface";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Moon from "moon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  posts: Post[];
}

const Index: FC<Props> = ({ posts }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>("all");
  const [currentPosts, setCurrentPosts] = useState(posts);
  const { theme, setTheme } = useTheme();

  const extractSinglePostTags = (post: Post) => {
    return post.data.tags.split(",").map((tag: string) => tag.trim()); //Split all single post tags in an array and trim excess spaces
  };

  const exportPostsTags = (posts: Post[]) => {
    let tmpTagsArray = [];
    posts.map((post) => {
      if (post.data.tags) {
        const curPostTags = extractSinglePostTags(post);
        curPostTags.map((tag) => {
          const isTagNotIncluded = curPostTags.find((searchingTag) => {
            if (!searchingTag.includes(tag)) {
              return true;
            }
          });

          if (isTagNotIncluded) {
            tmpTagsArray.push({
              text: tag.trim(),
            });
          }
        });
      }
    });

    tmpTagsArray = tmpTagsArray
      .map((tag) => {
        return mapTagsOptions(tag);
      })
      .filter((el) => el !== undefined);

    return tmpTagsArray;
  };

  const mapTagsOptions = (tag: ITag) => {
    return TagsMap.filter((tagMap) => {
      if (tag.text.toUpperCase() === tagMap.text.toUpperCase()) {
        return tagMap;
      }
    })[0];
  };

  const onTagSelectionHandler = (tagsSelected) => {
    if (tagsSelected.text.toUpperCase() !== currentTag.toUpperCase())
      setCurrentTag(tagsSelected.text);
    else setCurrentTag("all");
  };

  useEffect(() => {
    setTags(exportPostsTags(posts));
  }, []);

  useEffect(() => {
    if (currentTag !== "all") {
      setCurrentPosts(
        posts.filter((post) => {
          if (post.data.tags) {
            const postTags = extractSinglePostTags(post);
            const isTagIncluded = postTags.find((tag) => {
              if (tag.toUpperCase().includes(currentTag.toUpperCase())) {
                return true;
              }
            });

            if (isTagIncluded) {
              return post;
            }
          }
        })
      );
    } else {
      setCurrentPosts(posts);
    }
  }, [currentTag]);
  console.log(theme === "light");
  return (
    <>
      <div className="app-container ">
        <div className="flex justify-between">
          <h1 className="mb-2">Dev Blog</h1>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme !== "light" ? (
              <FontAwesomeIcon icon={faSun} size="2x" />
            ) : (
              <img src="moon.png" alt="moon-icon" className="w-7" />
            )}
          </button>
        </div>

        <h4 className="mb-6">Nick Kalomoiris dev blog.</h4>
        <div className="flex justify-between md:flex-nowrap xs:mb-0 xs:flex-wrap">
          <div className="w-full mb-4 sm:w-1/3">
            <Sidebar
              tags={tags}
              onTagSelection={onTagSelectionHandler}
              currentTag={currentTag}
            />
          </div>
          <div className="md:w-2/3 sm:w-full xs:w-full md:ml-8">
            <RecentPosts posts={currentPosts} currentTag={currentTag} />
          </div>
        </div>
      </div>
    </>
  );
};

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default Index;
