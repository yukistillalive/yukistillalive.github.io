export function NewsView({ news }) {
  return (
    <div>
      <p className="section-label">News</p>
      <div className="news-list news-scroll">
        {news.map((item) => (
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
    </div>
  );
}
