import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export function BlogPostView({ post, content, loading, error, onBack }) {
  return (
    <div className="detail-page">
      <button className="detail-back" onClick={onBack}>← Blog</button>
      <div className="blog-post-header">
        <span className="blog-post-date">{post.date}</span>
        <h1 className="detail-title">{post.title}</h1>
        {post.tags?.length > 0 && (
          <div className="tag-row" style={{ marginTop: "0.5rem" }}>
            {post.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        )}
      </div>
      <div className="detail-content">
        {loading && <p className="detail-status">Loading…</p>}
        {error   && <p className="detail-status">Content not found.</p>}
        {content && (
          <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
            {content}
          </Markdown>
        )}
      </div>
    </div>
  );
}
