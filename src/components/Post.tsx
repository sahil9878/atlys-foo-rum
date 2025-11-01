import type { Post } from "../stores/feed/interface"
import BorderWithFooterContent from "./atomic/BorderWithFooterContent"
import { CommentIcon, EmojiIcon, HeartIcon, ShareIcon } from "../assets/icons"
import { formatDistanceToNow } from "date-fns"
import useAuthStore from "../stores/auth"
import IconButton from "./atomic/IconButton"

interface PostProps {
    post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
    return <BorderWithFooterContent footerContent={<PostFooterContent />} size="xl">
        <div className="p-3 grid grid-rows-[37px_auto] grid-cols-[37px_auto] gap-[10px] pb-5 border rounded-xl border-neutral-200 ">
            <img src={post.author.profile_image} className="w-[37px] h-[37px] object-cover rounded-sm" alt={`${post.author.name} profile image`} />
            <div className="flex flex-col ">
                <div className="font-semibold text-[13]">{post.author.name}</div>
                <div className="font-medium text-xs">{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</div>
            </div>
            <div className="h-7.5 w-7.5 text-xl text-center bg-neutral-100 rounded-3xl py-[1px] flex justify-center items-center ">
                {post.emoji ? post.emoji : <EmojiIcon />}
            </div>
            <div className="text-sm font-medium">
                {post.content}
            </div>
        </div>
    </BorderWithFooterContent>
}

const PostFooterContent = () => {
    const { setIsAuthPopupOpen } = useAuthStore()
    const showSigninPopup = () => setIsAuthPopupOpen(true)
    return <div className="flex flex-row gap-3.5 p-1 pb-0">
        <IconButton onClick={showSigninPopup}>
            <HeartIcon />
        </IconButton>
        <IconButton onClick={showSigninPopup}>
            <CommentIcon />
        </IconButton>
        <IconButton onClick={showSigninPopup}>
            <ShareIcon />
        </IconButton>

    </div>
}

export default Post