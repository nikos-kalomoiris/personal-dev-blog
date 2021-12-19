import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import RecentPosts from '../components/Posts/RecentPosts'
import Sidebar from '../components/Shared/Sidebar/Sidebar'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { useState, useEffect } from 'react';
import { TagsMap } from '../components/Utils/TagsMap';

export default function Index({ posts }) {

	const [tags, setTags] = useState([])
	const [currentTag, setCurrentTag] = useState("all")
	const [currentPosts, setCurrentPosts] = useState(posts)

	const extractSinglePostTags = (post) => {
		return post.data.tags.split(',').map(tag => tag.trim()) //Split all single post tags in an array and trim excess spaces
	}

	const exportPostsTags = (posts) => {
		let tmpTagsArray = []
		posts.map(post => {

			if(post.data.tags) {
				const curPostTags = extractSinglePostTags(post)
				curPostTags.map(tag => {
					const isTagNotIncluded = curPostTags.find(searchingTag => {
						if(!searchingTag.includes(tag)) {
							return true
						}
					})
	
					if(isTagNotIncluded) {
						tmpTagsArray.push({
							text: tag.trim()
						})
					}
				})
			}
		})

		tmpTagsArray = tmpTagsArray.map(tag => {
			return mapTagsOptions(tag)
		}).filter(el => el !== undefined)

		return tmpTagsArray
	}

    const mapTagsOptions = (tag) => {
        return TagsMap.filter(tagMap => {
            if(tag.text === tagMap.text) {
                return tagMap
            }
        })[0]
    }

	const onTagSelectionHandler = (tagsSelected) => {
		setCurrentTag(tagsSelected.text)
	}

	useEffect(() => (
		setTags(exportPostsTags(posts))
	), [])

	useEffect(() => {
		currentTag ? console.log(currentTag.text): console.log("null")
	},[currentTag])


	useEffect(() => {
		if(currentTag !== "all") {
			setCurrentPosts(posts.filter(post => {
				if(post.data.tags) {
					const postTags = extractSinglePostTags(post)
					const isTagIncluded = postTags.find(tag => {
						if(tag.includes(currentTag)) {
							return true
						}
					})
	
					if(isTagIncluded) {
						return post
					}
				}
			}))
		}
		else {
			setCurrentPosts(posts)
		}

	},[currentTag])

	return (
	<>
		<div className="app-container">
			<h1 className="mb-2">Dev Blog</h1>
			<h4 className="mb-6">Nick Kalomoiris dev blog.</h4>
			<div className="flex justify-between md:flex-nowrap sm:flex-wrap-reverse xs:flex-wrap-reverse">
				<div className="md:w-1/3 sm:w-full xs:w-full">
					<Sidebar tags={tags} onTagSelection={onTagSelectionHandler}/>
				</div>
				<div className="md:w-2/3 sm:w-full xs:w-full md:ml-8">
					<RecentPosts posts={currentPosts} tags={tags} />
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
