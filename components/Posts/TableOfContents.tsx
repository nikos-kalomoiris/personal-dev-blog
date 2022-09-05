import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  function getHeadings() {
    let tmpHeadings = document.querySelectorAll("h2, h3");
    const nestedHeadings = [];

    tmpHeadings.forEach((heading: HTMLElement, index: number) => {
      heading.id = `heading-${index}`;
      const { innerText: title, id } = heading;

      if (index === 0) heading.className += " mt-0";

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });

    return nestedHeadings;
  }

  useEffect(() => {
    setHeadings(getHeadings());
  }, []);

  return (
    <nav className="sticky top-3 h-full w-80 p-4 bg-white rounded-lg shadow-md mr-4">
      <p className="text-3xl text-center">Table of Contents</p>
      <hr className="mb-6" />
      <nav>
        {headings &&
          headings.map((heading) => (
            <li className="mb-4" key={heading.id}>
              <a
                className="text-[1rem]"
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${heading.id}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {heading.title}
              </a>
              {heading.items.length > 0 && (
                <ul className="list-[circle]">
                  {heading.items.map((nestedHeading) => (
                    <li className="my-3 ml-14" key={nestedHeading.id}>
                      <a
                        className="text-sm"
                        href={`#${nestedHeading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${nestedHeading.id}`)
                            .scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                      >
                        {nestedHeading.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </nav>
    </nav>
  );
};

export default TableOfContents;
