import { IconArrowRight } from "@tabler/icons-react";
import type React from "react";

// Define the shape of a single blog post passed as a prop
interface BlogPost {
  title: string;
  slug: string; // Expecting the final, routed slug (e.g., /en/blog/post-name or /blog/post-name)
  description?: string;
}

// Define the shape of the translations passed as a prop
interface BlogTranslations {
  title: string;
  readMore: string;
  noPosts: string;
}

// Define the props for the component
interface BlogIndexListProps {
  posts: BlogPost[];
  translations: BlogTranslations;
}

const BlogIndexList: React.FC<BlogIndexListProps> = ({
  posts,
  translations,
}) => {
  const t = translations; // Use the passed translations

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold my-4 text-gray-900">{t.title}</h1>
      {posts.length > 0 ? (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="block p-6 border rounded-sm" // Adjusted styling slightly
            >
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                {post.title}
              </h2>
              {post.description && (
                <p className="mb-4 font-normal text-gray-600">
                  {post.description}
                </p>
              )}
              {/* Use standard <a> tag instead of Next's Link */}
              <a
                href={post.slug}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#1678d3] hover:bg-yellow-300 hover:text-neutral-800 rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300" // Adjusted styling
              >
                {t.readMore}
                <IconArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">{t.noPosts}</p>
      )}
    </div>
  );
};

export default BlogIndexList;
