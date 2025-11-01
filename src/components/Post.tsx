import type { Post as TPost } from "../stores/feed/interface"
import BorderWithFooterContent from "./atomic/BorderWithFooterContent"
import { CommentIcon, EmojiIcon, HeartFilledIcon, HeartIcon, ShareIcon } from "../assets/icons"
import { formatDistanceToNow } from "date-fns"
import useAuthStore from "../stores/auth"
import IconButton from "./atomic/IconButton"
import { useEffect, useState } from "react"
import useFeedStore from "../stores/feed"
import { noOp } from "../utils"

interface PostProps {
    post: TPost
}

const Post: React.FC<PostProps> = ({ post }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    return <div className={`transition-all duration-500 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        w-xl`}>

        <BorderWithFooterContent footerContent={<PostFooterContent post={post} />} size="xl">
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
    </div>

}
const PostFooterContent: React.FC<PostProps> = ({ post }) => {
    const { loggedInUser, setIsAuthPopupOpen } = useAuthStore()
    const { likePost } = useFeedStore()
    const showSigninPopup = () => setIsAuthPopupOpen(true)
    return <div className="flex flex-row gap-3.5 p-1 pb-0">
        <IconButton onClick={loggedInUser ? () => likePost(post.id) : showSigninPopup}>
            {post.liked ? <HeartFilledIcon /> : <HeartIcon />}
        </IconButton>
        <IconButton onClick={loggedInUser ? noOp : showSigninPopup}>
            <CommentIcon />
        </IconButton>
        <IconButton onClick={loggedInUser ? noOp : showSigninPopup}>
            <ShareIcon />
        </IconButton>

    </div>
}

export default Post