import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getPosts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Welcome to LPU Blog
              </h1>
              <p className="mt-6 text-xl text-teal-100 dark:text-gray-300 max-w-3xl">
                Discover insights, knowledge, and experiences shared by the LPU
                community. Explore articles on academics, technology, campus
                life, and more.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/search"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 transition-colors duration-300"
                >
                  Explore Posts
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-teal-100 border-white hover:border-teal-100 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Recent Posts
          </h2>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
            Stay updated with the latest content from our community
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <div className="flex flex-column gap-8">
            {posts &&
              posts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="text-center mt-12">
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>

      {/* Featured Categories Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Featured Categories
            </h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              Explore content by your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Academic Research", "Campus Life", "Technology"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category}
                  </h3>
                  <Link
                    to={`/search?category=${category}`}
                    className="text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
                  >
                    Browse Articles →
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
