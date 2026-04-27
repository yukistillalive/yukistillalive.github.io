import Markdown from "react-markdown";
import { Link } from "react-router-dom";

export function HomeView({ model }) {
  const { name, bio, photo } = model;

  return (
    <div>
      <div className="about-grid">
        <div className="about-photo">
          {photo
            ? <img src={photo} alt={name} />
            : <span className="about-photo-placeholder">photo</span>
          }
        </div>
        <div className="about-body">
          <Markdown
            components={{
              a: ({ href, children }) =>
                href?.startsWith("/") && !/\.\w+$/.test(href)
                  ? <Link className="bio-blog-link" to={href}>{children}</Link>
                  : <a className="bio-blog-link" href={href} target="_blank" rel="noreferrer">{children}</a>
            }}
          >
            {bio}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
