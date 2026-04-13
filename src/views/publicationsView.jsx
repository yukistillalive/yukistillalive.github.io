export function PublicationsView({ publications }) {
  return (
    <div>
      <p className="section-label">Publications</p>
      <div className="pub-list">
        {publications.map((pub) => (
          <div className="pub-row" key={pub.id}>
            <span className="pub-year">{pub.year}</span>
            <div>
              <a className="pub-title-link" href={pub.link} target="_blank" rel="noreferrer">
                {pub.title}
              </a>
              <div className="pub-authors">{pub.authors}</div>
              <div className="pub-venue">{pub.venue}</div>
              {pub.tags?.length > 0 && (
                <div className="tag-row">
                  {pub.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
