import type { Post as PostType } from "../stores/feed/interface"
import Post from "./Post"

interface PostsListProps {
    posts: PostType[]
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return <>{posts.map(post => <Post key={post.id} post={post} />)}
    </>
}

export default PostsList