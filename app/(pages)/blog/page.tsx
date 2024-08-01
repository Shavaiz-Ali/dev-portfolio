import BlogPostCard from "@/components/blog-post-card";
import React from "react";

const Blog = () => {
  return (
    <div className="p-4 xl:px-[121px] lg:py-[100px]" data-aos="fade-right">
      <div className="flex flex-wrap justify-between items-center w-full gap-y-3">
        <div className="space-y-2">
          <span className="text-[1rem] text-[#55527c] font-semibold">
            - Blog
          </span>
          <h3 className="text-4xl text-[#130F49] font-bold">My blogs & news</h3>
        </div>
        <div>
          <button className="h-12 w-40 bg-[#130F49] hover:bg-white border border-[#130F49] text-white hover:text-[#55527c] rounded text-[14px] font-medium">
            Get in touch
          </button>
        </div>
      </div>
      <div className="mt-8">
        <BlogPostCard />
      </div>
    </div>
  );
};

export default Blog;
