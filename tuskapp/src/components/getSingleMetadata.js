import fs from "fs";
import matter from "gray-matter";

export default function getSingleMetadata(slug) {
    const fileContents = fs.readFileSync(`posts/${slug}.md`, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data
};