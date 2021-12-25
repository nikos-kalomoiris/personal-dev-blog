import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/CustomLink'
import CustomH1 from '../../components/Posts/Post/CustomHtmlTags/CustomH1'
import Postsidebar from '../../components/Posts/Post/PostSidebar'
import Tag from '../../components/Shared/Sidebar/Tag'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	a: CustomLink,
	h1: CustomH1,
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
	// TestComponent: dynamic(() => import('../../components/TestComponent')),
	Head,
}

export default function PostPage({ source, frontMatter }) {
	const tags = getTags(frontMatter.tags)
	return (
		<div className="flex single-post-container">
			<div className="bg-white drop-shadow-md mr-4 w-3/4">
				<header className="px-16 pt-8">
					<h1 className="font-bold">{frontMatter.title}</h1>
					<div className='flex pt-6'>
						{tags && tags.map(tag => (
							<Tag tag={tag} />
						))}
					</div>
				</header>	
				<main className="px-16 py-8">
					<MDXRemote {...source} components={components} />
				</main>
			</div>
			<div className="bg-white drop-shadow-md w-1/4">
				<Postsidebar />
			</div>
		</div>
	)
}

function getTags(tags) {
	if(tags) {
		let tagsArray = tags.split(',')
		return tagsArray.map(tag => {
			return {
				'text': tag,
				'bgColor': 'bg-green-400'
			}
		})
	}
}

export const getStaticProps = async ({ params }, context) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
