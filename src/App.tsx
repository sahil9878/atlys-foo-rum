import { Route, Routes } from 'react-router'
import FeedPage from './pages/Feed'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<FeedPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />

      </Routes>
    </>
  )
}

export default App
