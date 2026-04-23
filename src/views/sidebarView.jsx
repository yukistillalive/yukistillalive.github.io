const NAV = [
  { id: "about",        label: "About" },
  { id: "news",         label: "News" },
  { id: "publications", label: "Publications" },
  { id: "projects",     label: "Projects" },
];

export function SidebarView({ name, active, email, links, isHome }) {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleNavClick(e, id) {
    if (isHome) {
      e.preventDefault();
      scrollTo(id);
    }
    // else: let browser follow href="/#id" naturally
  }

  return (
    <aside className="sidebar">
      <a className="sidebar-brand" href="/#about" onClick={(e) => { if (isHome) { e.preventDefault(); scrollTo("about"); } }}>
        {name}
      </a>
      <nav className="sidebar-nav">
        {NAV.map(({ id, label }) => (
          <a
            key={id}
            href={`/#${id}`}
            className={isHome && active === id ? "active" : ""}
            onClick={(e) => handleNavClick(e, id)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="sidebar-links">
        {links?.scholar  && <a href={links.scholar}  target="_blank" rel="noreferrer">Google Scholar</a>}
        {links?.github   && <a href={links.github}   target="_blank" rel="noreferrer">GitHub</a>}
        {links?.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {email           && <a href={`mailto:${email}`}>{email}</a>}
        {/* {links?.cv    && <a href={links.cv}      target="_blank" rel="noreferrer">CV</a>} */}
      </div>
    </aside>
  );
}
