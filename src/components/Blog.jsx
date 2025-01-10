const Blog = ({ blog }) => {
  const { title, description, articleImg, postedOn } = blog || {};
  return (
    <div className="card bg-textColor lg:w-96 shadow-xl lg:pt-0 md:pt-5">
      <figure className="w-full">
        <img src={articleImg} className="object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondaryColor font-bold">{title}</h2>
        <p className="text-secondaryColor">
          {description.length > 122 ? description.slice(0, 122) : description}
        </p>
        <p className="text-secondaryColor font-bold text-right mt-3">
          Posted On : {postedOn}
        </p>
      </div>
    </div>
  );
};

export default Blog;
