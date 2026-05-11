import React from "react";
import { Link, useParams } from "react-router-dom";
import bloglist from "../../editable-stuff/blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[Number(id)];

  if (!post) {
    return (
      <div className="container-lg mt-5 pt-5">
        <Link to="/blog">← Back to blogs</Link>
        <h1 className="display-1 text-center">404 - Page not found</h1>
      </div>
    );
  }

  return (
    <div className="container-lg mt-5 pt-5">
      <Link to="/blog">← Back to blogs</Link>

      <h1 className="display-2 text-center">{post.title}</h1>

      {post.image && post.image !== "img" && (
        <img className="img-fluid mb-2" src={post.image} alt={post.title} />
      )}

      {post.getBlog()}
    </div>
  );
};

export default BlogPost;
