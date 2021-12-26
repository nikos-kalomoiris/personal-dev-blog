import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const TableOfContents = () => {

    const [headings, setHeadings] = useState([])

    function getHeadings() {
		let tmpHeadings = Array.from(document.querySelectorAll("h2"))
        return tmpHeadings.map((heading, index) => {
            heading.id = `heading-${index}`
            return {
                text: heading.innerText,
            }
        })
	}

    useEffect(() => {
        setHeadings(getHeadings())
    }, []);

    return (
        <nav className="sticky top-3 h-full">
            <h3>Table of Contents</h3>
            <nav>
                {headings && headings.map((heading, index) => (
                    <li key={index}>
                        <a href={`#heading-${index}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#heading-${index}`).scrollIntoView({
                                  behavior: "smooth"
                                })}}
                        >{heading.text}</a>
                    </li>
                ))}
            </nav>
        </nav>
    );
}

export default TableOfContents;
