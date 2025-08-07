import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  return (
    <div className="container">
      <h1 className="text-warning"> LIST OF POSTS FROM JSONPLACEHOLDER</h1>
      <button onClick={fetchPosts}>See Posts</button>
      <ul className="list-group m-3 p-3">
        {posts.map((post) => (
          <li className="list-group-item">
            <h3 className="text-sucess my-2">{post.title}</h3>
            <p className="text-primary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;