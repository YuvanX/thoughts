import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import DetailedBlogPage from "./pages/DetailedBlogPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/:id" element={<DetailedBlogPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
