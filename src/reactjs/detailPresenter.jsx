import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { DetailView } from "../views/detailView.jsx";

const Detail = observer(function Detail({ model }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const project = model.projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/");
      return;
    }
    setLoading(true);
    setContent(null);
    setError(false);
    fetch(`/content/projects/${slug}.md`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.text();
      })
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [slug, project]);

  if (!project) return null;

  return (
    <DetailView
      project={project}
      content={content}
      loading={loading}
      error={error}
      onBack={() => navigate("/")}
    />
  );
});

export { Detail };
