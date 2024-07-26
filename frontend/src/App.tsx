import { Route, BrowserRouter, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Post } from "./pages/Post"
import { Posts } from "./pages/Posts"
import { Publish } from "./pages/Publish"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} >Sahil kumar hero hai </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
