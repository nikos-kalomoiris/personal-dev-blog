import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path, { format } from "path";
import { useEffect, useState } from "react/cjs/react.development";
import CustomLink from "../../components/CustomLink";
import DateComponent from "../../components/Posts/Date/DateComponent";
import CustomCode from "../../components/Posts/Post/CustomHtmlTags/CustomCode";
import CustomH1 from "../../components/Posts/Post/CustomHtmlTags/CustomH1";
import CustomH2 from "../../components/Posts/Post/CustomHtmlTags/CustomH2";
import CustomH3 from "../../components/Posts/Post/CustomHtmlTags/CustomH3";
import CustomParagraph from "../../components/Posts/Post/CustomHtmlTags/CustomParagraph";
import TableOfContents from "../../components/Posts/TableOfContents";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  p: CustomParagraph,
  code: CustomCode,
  Head,
};

export default function PostPage({ content, source, frontMatter }) {
  const tags = getTags(frontMatter.tags);

  function getTags(tags: string) {
    if (tags) {
      let tagsArray = tags.split(",");
      return tagsArray.map((tag) => {
        return {
          text: tag,
        };
      });
    }
  }

  return (
    <div className="flex single-post-container">
      <TableOfContents />
      <div className="bg-white drop-shadow-md mr-4 w-3/4 rounded-tl-lg rounded-lg">
        <header className="px-16 pt-8">
          <h1 className="font-bold">{frontMatter.title}</h1>
          <DateComponent date={frontMatter.date} />
          <div className="flex pt-6">
            {tags &&
              tags.map((tag, index) => (
                <div className="flex flex-row mr-2" key={index}>
                  <p className="text-green-400">#</p>
                  <span>{tag.text.trim()}</span>
                </div>
              ))}
          </div>
        </header>
        <main className="px-16 py-8">
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      content: content,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
