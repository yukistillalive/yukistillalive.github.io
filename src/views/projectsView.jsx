export function ProjectsView({ projects }) {
  return (
    <div>
      <p className="section-label">Projects</p>
      <div className="project-grid">
        {projects.map((proj) => (
          <div className="project-item" key={proj.id}>
            <a href={proj.link} target="_blank" rel="noreferrer">
              <div className="project-thumb">
                {proj.thumb
                  ? <img src={proj.thumb} alt={proj.title} />
                  : <span className="project-thumb-label">{proj.label || proj.title}</span>
                }
              </div>
              <div className="project-name">{proj.title}</div>
            </a>
            <div className="project-desc">{proj.description}</div>
            {proj.tags?.length > 0 && (
              <div className="tag-row">
                {proj.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
