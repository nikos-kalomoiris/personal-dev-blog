import Highlight, { defaultProps } from "prism-react-renderer";
import React, { useEffect } from "react";

const CustomCode = ({ children }) => {
  //   useEffect(() => {
  //     console.log(document.querySelectorAll("code"));
  //   }, []);

  return (
    <Highlight {...defaultProps} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left my-4 p-4 overflow-auto rounded-md`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div className="table-row" {...getLineProps({ line, key: i })}>
              <div className="table-cell text-right w-4 mr-4 opacity-50">
                {i + 1}
              </div>
              <div className="table-cell pl-4">
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CustomCode;
