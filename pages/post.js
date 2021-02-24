import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="flex-column justify-center items-center w-screen h-screen">
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2 class="text-xl font-medium text-black">{post.Title}</h2>
              <div class="text-gray-500">{post.Content}</div>
            </a>
          </Link>
        ))}
      <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Button
      </button>
    </div>
  );
}
export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
