import { Link } from "react-router-dom";

const NAV = [
  { id: "about",        label: "About",        kind: "section" },
  { id: "news",         label: "News",         kind: "section" },
  { id: "publications", label: "Publications",  kind: "section" },
  { id: "projects",     label: "Projects",     kind: "section" },
  // { id: "blog",         label: "Blog",         kind: "route",    to: "/blog" },

];

export function SidebarView({ name, active, email, links, isHome, pathname }) {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSectionClick(e, id) {
    if (isHome) {
      e.preventDefault();
      scrollTo(id);
    }
  }

  return (
    <aside className="sidebar">
      <a className="sidebar-brand" href="/#about" onClick={(e) => { if (isHome) { e.preventDefault(); scrollTo("about"); } }}>
        {name}
      </a>
      <nav className="sidebar-nav">
        {NAV.map(({ id, label, kind, to }) => {
          if (kind === "external") {
            return <a key={id} href={links?.cv} target="_blank" rel="noreferrer">{label}</a>;
          }
          if (kind === "route") {
            return (
              <Link key={id} to={to} className={pathname?.startsWith(to) ? "active" : ""}>
                {label}
              </Link>
            );
          }
          return (
            <a
              key={id}
              href={`/#${id}`}
              className={isHome && active === id ? "active" : ""}
              onClick={(e) => handleSectionClick(e, id)}
            >
              {label}
            </a>
          );
        })}
      </nav>
      <div className="sidebar-links">
        {links?.scholar  && <a href={links.scholar}  target="_blank" rel="noreferrer">Google Scholar</a>}
        {/* {links?.github   && <a href={links.github}   target="_blank" rel="noreferrer">GitHub</a>} */}
        {links?.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {email           && <a href={`mailto:${email}`}>{email}</a>}
      </div>
    </aside>
  );
}
