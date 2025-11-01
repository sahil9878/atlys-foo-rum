export type Username = string
export type Password = string

export type User = {
    username: Username;
    password: Password
}
export type AuthState = {
    users: User[];
    loggedInUser: User | null
    signUp: (username: Username, password: Password, retypePassword: Password) => void
    signIn: (username: Username, password: Password) => void
}