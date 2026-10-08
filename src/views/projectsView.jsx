import { Link } from "react-router-dom";
import { NewsView } from "./newsView.jsx";

export function ProjectsView({ projects, news }) {
  return (
    <div>
      <div className="project-labels">
        <p className="section-label">News</p>
        <p className="section-label">Projects</p>
      </div>
      <div className="project-grid">
        <div className="project-item news-cell" id="news">
          <NewsView news={news} hideLabel />
        </div>
        {projects.map((proj) => (
          <div className="project-item" key={proj.id}>
            <Link to={`/projects/${proj.slug}`}>
              <div className="project-thumb">
                {proj.thumb
                  ? <img src={proj.thumb} alt={proj.title} />
                  : <span className="project-thumb-label">{proj.label || proj.title}</span>
                }
              </div>
              <div className="project-name">{proj.title}</div>
            </Link>
            <div className="project-desc">{proj.description}</div>
            {proj.tags?.length > 0 && (
              <div className="tag-row">
                {proj.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="home-tagline">✨ I look for meaning in meaningless interactions. ✨</p>
    </div>
  );
}
