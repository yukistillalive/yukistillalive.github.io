import { useState } from "react";

const PREVIEW = 4;

export function NewsView({ news }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? news : news.slice(0, PREVIEW);

  return (
    <div>
      <p className="section-label">News</p>
      <div className="news-list">
        {visible.map((item) => (
          <div className="news-row" key={item.id}>
            <span className="news-row-date">{item.date}</span>
            <span className="news-row-text">
              {item.text}
              {item.link ? (
                <>
                  {" "}
                  <a
                    className="news-inline-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.linkLabel || item.link}
                  </a>
                </>
              ) : null}
            </span>
          </div>
        ))}
      </div>
      {news.length > PREVIEW && !expanded && (
        <button className="more-link" onClick={() => setExpanded(true)}>
          more...
        </button>
      )}
    </div>
  );
}
