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
    <div className="md:w-full w-[95%] mx-auto">
      <h1 className="md:text-5xl text-4xl text-center font-bold text-primaryColor my-10">
        Read Latest Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center justify-center lg:pl-12 pt-8 pb-10 md:px-5">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
