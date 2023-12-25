import { useEffect, useState } from "react";
import { format } from "date-fns";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
// import PostPage from "./PostPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "First post",
      datetime: "June 15,2022,11:35:26 AM",
      content:
        "Healthy and nutritious food is very important for maintaining a good health",
    },
    {
      id: 2,
      title: "Second post",
      datetime: "June 15,2022,11:35:26 AM",
      content:
        "Healthy and nutritious food is very important for maintaining a good health",
    },
    {
      id: 3,
      title: "Third post",
      datetime: "June 15,2022,11:35:26 AM",
      content:
        "Healthy and nutritious food is very important for maintaining a good health",
    },
    {
      id: 4,
      title: "Fourth post",
      datetime: "June 15,2022,11:35:26 AM",
      content:
        "Healthy and nutritious food is very important for maintaining a good health",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.content.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, content: postContent };
    const allPosts = [...posts, newPost];
    setposts(allPosts);
    setPostTitle("");
    setPostContent("");
  };
  return (
    <div className="App">
      <Header title="Post Your Thoughts" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path = "/" element = {<Home posts={searchResults} />} />
        <Route path="post" element = {<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postContent={postContent}
          setPostContent={setPostContent}
        />} />
        {/* <PostPage /> */}
       <Route path="about" element = {<About />}/>
        <Route path = "*" element={<Missing />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
