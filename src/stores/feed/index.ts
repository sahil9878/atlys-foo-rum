import { create } from "zustand";
import type { FeedState, Post } from "./interface";


const POSTS_INIT_STATE: Post[] = [
    {
        id: 1,
        author: {
            name: "Theresa Webb",
            profile_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        emoji: "🥴",
        created_at: 1761981576526,
        liked: false
    },
    {
        id: 2,
        author: {
            name: "John Doe",
            profile_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        emoji: "🤞",
        created_at: 1761981576526,
        liked: false
    },
    {
        id: 3,
        author: {
            name: "Jane Doe",
            profile_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        emoji: "💀",
        created_at: 1761980576526,
        liked: false
    },
]

const useFeedStore = create<FeedState>()((set, get) => ({
    posts: POSTS_INIT_STATE,
    nextPostId: 4,
    createPost: (content: string, emoji: string) => {
        const { posts, nextPostId } = get()
        const newPost: Post = {
            id: nextPostId,
            author: { name: "John Doe", profile_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" },
            content,
            emoji,
            created_at: Date.now(),
            liked: true
        }
        set({ posts: [newPost, ...posts], nextPostId: nextPostId + 1 })
    },
    likePost: (id: number) => {
        const { posts } = get();
        const newPosts = posts.map(post =>
            post.id === id ? { ...post, liked: !post.liked } : post
        );
        set({ posts: newPosts });
    }
}))

export default useFeedStore