import Link from "next/link";
import { fromImageToUrl } from "../utils/urls";

export default function Post1({ posts }) {
  return (
    <div className="flex-column justify-center items-center w-screen h-screen">
      {/* loop over the posts and show them */}
      {posts.map((post) => (
        <div
          key={post.Title}
          className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
        >
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {post.Title}
          </h1>
          <p> {post.Content} </p>
          <div>
            <img src={fromImageToUrl(post.Image)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    posts,
  };
}
