import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import DetailedBlogPage from "./pages/DetailedBlogPage";
import EditorPage from "./pages/EditorPage";
import UserBlogsPage from "./pages/UserBlogsPage";
import Settings from "./pages/Settings";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/:id" element={<DetailedBlogPage/>}/>
        <Route path="/newpost" element={<EditorPage/>}/> 
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/userblogs" element={<UserBlogsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
