import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-[97%] mx-auto px-1">
      <h1 className="text-5xl text-center font-bold text-primaryColor my-16">
        Read Latest Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center lg:pl-16">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
