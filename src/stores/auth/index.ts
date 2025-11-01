// TODO: Add zustand persist middleware
import { create } from "zustand"
import type { AuthState, Password, User, Username } from "./interface"




const defaultUsers: User[] = [
    { username: "demo@example.com", password: "password123" },
    { username: "test@user.com", password: "testpass" }
]

const useAuthStore = create<AuthState>()((set, get) => ({
    users: defaultUsers,
    loggedInUser: null,
    isAuthPopupOpen: false,
    setIsAuthPopupOpen: (isOpen) => {
        set({ isAuthPopupOpen: isOpen })
    },
    signUp: (username: Username, password: Password, retypePassword: Password) => {
        if (password !== retypePassword) {
            throw new Error("Passwords no not match")
        }
        const { users } = get()
        const existing = users.find(u => u.username === username)
        if (existing) {
            throw new Error('Username already exists')
        }
        const newUser = { username, password }
        set({ users: [...users, newUser], loggedInUser: newUser })
    },

    signIn: (username: Username, password: Password) => {
        const { users } = get()
        const user = users.find(u => u.username === username && u.password === password)
        if (!user) {
            throw new Error('Invalid username or password')
        }
        set({ loggedInUser: user })
    },
}))

export default useAuthStore

