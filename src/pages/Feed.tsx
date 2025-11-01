import PostsList from "../components/PostsList";
import SigninPopup from "../components/SigninPopup";
import useFeedStore from "../stores/feed";


const FeedPage = () => {
    const { posts } = useFeedStore()

    return (<>
        <div className="w-full flex flex-col gap-4 items-center">
            <PostsList posts={posts} />
        </div>
        <SigninPopup />
    </>);
}

export default FeedPage;