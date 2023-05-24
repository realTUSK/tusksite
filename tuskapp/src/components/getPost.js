import fs from 'fs'
import matter from 'gray-matter'

export default function getPost(slug) {
    const fileData = fs.readFileSync(`posts/${slug}.md`, 'utf8')
    const matterResult = matter(fileData)
    return matterResult
}