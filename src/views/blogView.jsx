import { Link } from "react-router-dom";

export function BlogView({ posts }) {
  const sorted = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div className="blog-page">
      <p className="section-label">Blog</p>
      {sorted.length === 0 ? (
        <p className="blog-empty">No posts yet.</p>
      ) : (
        <div className="blog-list">
          {sorted.map((post) => (
            <div className="blog-row" key={post.id}>
              <span className="blog-date">{post.date}</span>
              <div className="blog-body">
                <Link className="blog-title" to={`/blog/${post.slug}`}>{post.title}</Link>
                {post.description && <p className="blog-desc">{post.description}</p>}
                {post.tags?.length > 0 && (
                  <div className="tag-row">
                    {post.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
