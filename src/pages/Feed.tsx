import PostsList from "../components/PostsList";
import useFeedStore from "../stores/feed";


const FeedPage = () => {
    const { posts } = useFeedStore()
    return (<>
        <div className="w-full flex flex-col gap-4 items-center">
            <PostsList posts={posts} />
        </div>
    </>);
}

export default FeedPage;