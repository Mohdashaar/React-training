import { useEffect, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const RECORDS_PER_PAGE = 8;

const PostList4 = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error occurred while calling the API");
      }
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / RECORDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + RECORDS_PER_PAGE);

  if (loading) {
    return (
      <div className="container text-center">
        <h1 className="text-primary d-flex justify-content-center align-items-center gap-2">
          <span>Loading...</span>
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "1.5rem", height: "1.5rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
        <h4 className="mt-3 text-secondary">
          Do Not Leave The Page, it is Loading...
        </h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger fw-bold">{error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Posts (with Pagination)</h1>

      <div className="row">
        {paginatedPosts.map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
            <div className="card h-100 d-flex flex-column">
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-danger">{post.title}</h4>
                <p className="card-text text-secondary">{post.body}</p>
                <div className="flex-grow-1"></div>
                <a href="#" className="btn btn-primary">
                  View Entire Post
                </a>
              </div>
              <div className="card-footer text-muted">
                Author - {post.userId}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={
                currentPage === pageNumber ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(pageNumber);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PostList4;
