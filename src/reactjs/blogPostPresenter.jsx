import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { BlogPostView } from "../views/blogPostView.jsx";

const BlogPost = observer(function BlogPost({ model }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const post = model.blog.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/blog");
      return;
    }
    setLoading(true);
    setContent(null);
    setError(false);
    fetch(`/content/blog/${slug}.md`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.text();
      })
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [slug, post]);

  if (!post) return null;

  return (
    <BlogPostView
      post={post}
      content={content}
      loading={loading}
      error={error}
      onBack={() => navigate("/blog")}
    />
  );
});

export { BlogPost };
