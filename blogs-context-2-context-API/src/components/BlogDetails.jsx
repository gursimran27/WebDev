import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="flex flex-col gap-y-1 mb-10">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg hover:underline">{post.title}</span>
      </NavLink>

      <p className="text-sm">
        By
        <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          {/* removed space with - as url donesnot cantain any spaces */}
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>

      <p className="text-sm"> Posted On {post.date}</p>
      <p className="mt-3 mb-3">{post.content}</p>

      <div className="text-sm">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="text-blue-700 underline mr-2">{`#${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetails;
