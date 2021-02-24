import { fromImageToUrl } from "../utils/urls";

export default function home({ posts }) {
  return (
    <div className="flex-column justify-center items-center w-screen h-screen">
      {posts.map((post) => (
        <div key={post.Title}>
          {post.Title} {post.Content}
          <div>
            <img src={fromImageToUrl(post.Image)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
