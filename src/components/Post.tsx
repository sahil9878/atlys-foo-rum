import type { Post } from "../stores/feed/interface"
import BorderWithFooterContent from "./atomic/BorderWithFooterContent"
import { ReactComponent as Heart } from "../assets/icons/heart.svg"
import { ReactComponent as Comment } from "../assets/icons/comment.svg"
import { ReactComponent as Share } from "../assets/icons/share.svg"
import { formatDistanceToNow } from "date-fns"

interface PostProps {
    post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
    return <BorderWithFooterContent footerContent={<PostFooterContent />} size="xl">
        <div className="p-3 grid grid-rows-[37px_auto] grid-cols-[37px_auto] gap-[10px] pb-5">
            <img src={post.author.profile_image} className="w-[37px] h-[37px] object-cover rounded-sm" alt={`${post.author.name} profile image`} />
            <div className="flex flex-col ">
                <div className="font-semibold text-[13]">{post.author.name}</div>
                <div className="font-medium text-xs">{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</div>
            </div>
            <div className="h-7.5 w-7.5 text-xl text-center bg-neutral-100 rounded-3xl py-[1px] ">
                {post.emoji}
            </div>
            <div className="text-sm font-medium">
                {post.content}
            </div>
        </div>
    </BorderWithFooterContent>
}

const PostFooterContent = () => {
    return <div className="flex flex-row gap-6 p-2 pb-1">
        <Heart />
        <Comment />
        <Share />

    </div>
}

export default Post