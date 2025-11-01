import { Route, Routes } from 'react-router'
import FeedPage from './pages/Feed'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import Layout from './pages/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<FeedPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
