import Markdown from "react-markdown";

export function DetailView({ project, content, loading, error, onBack }) {
  return (
    <div className="detail-page">
      <button className="detail-back" onClick={onBack}>← Projects</button>

      <div className="detail-header">
        {project.thumb && (
          <img className="detail-cover" src={project.thumb} alt={project.title} />
        )}
        <div className="detail-meta">
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-label">{project.label}</p>
          {project.tags?.length > 0 && (
            <div className="tag-row">
              {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          )}
          {project.link && (
            <a className="detail-external" href={project.link} target="_blank" rel="noreferrer">
              View Project ↗
            </a>
          )}
        </div>
      </div>

      <div className="detail-content">
        {loading && <p className="detail-status">Loading…</p>}
        {error   && <p className="detail-status">{project.description}</p>}
        {content && <Markdown>{content}</Markdown>}
      </div>
    </div>
  );
}
