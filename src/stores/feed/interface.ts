import type { Username } from "../auth/interface"

export type Author = {
    name: Username
    profile_image: string
}

export type Post = {
    id: number
    content: string
    emoji: string
    author: Author
    created_at: number
    liked: boolean
}

export type FeedState = {
    posts: Post[]
    nextPostId: number
    createPost: (content: string, emoji: string) => void
    likePost: (id: number) => void
}