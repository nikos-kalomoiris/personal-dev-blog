import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import RecentPosts from '../components/Posts/RecentPosts'
import Sidebar from '../components/Shared/Sidebar/Sidebar'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { useState, useEffect } from 'react';

export default function Index({ posts }) {

	const [tags, setTags] = useState([])

	useEffect(() => (
		setTags(exportPostsTags(posts))
	), [])

	const exportPostsTags = (posts) => {
		let tmpTagsArray = []
		posts.map(post => {
			post.data.tags && post.data.tags.split(",").map(tag => {
				if(!tags.includes(tag)) {
					tmpTagsArray.push({
						text: tag.trim()
					})
				}
			})
		})
		return tmpTagsArray
	}

	return (
	<>
		<div className="app-container">
			<h1 className="mb-2">Dev Blog</h1>
			<h4 className="mb-6">Nick Kalomoiris dev blog.</h4>
			<div className="flex justify-between md:flex-nowrap sm:flex-wrap-reverse xs:flex-wrap-reverse">
				<div className="md:w-1/3 sm:w-full xs:w-full">
					<Sidebar tags={tags}/>
				</div>
				<div className="md:w-2/3 sm:w-full xs:w-full md:ml-8">
					<RecentPosts posts={posts} />
				</div>
			</div>
		</div>
	</>
	)
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
