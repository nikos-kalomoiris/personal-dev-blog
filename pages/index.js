import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import RecentPosts from '../components/Posts/RecentPosts'
import Footer from '../components/Shared/Footer/Footer'
import Header from '../components/Shared/Header/Header'
import Sidebar from '../components/Shared/Sidebar/Sidebar'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {

  return (
    <>
        <div className="app-container">
        <h1 className="mb-2">Dev Blog</h1>
        <h4 className="mb-6">Nick Kalomoiris dev blog.</h4>
        <div className="flex justify-between md:flex-nowrap sm:flex-wrap-reverse xs:flex-wrap-reverse">
            <div className="md:w-1/3 sm:w-full xs:w-full">
                <Sidebar />
            </div>
            <div className="md:w-2/3 sm:w-full xs:w-full">
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
