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
          {bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </div>
    </div>
  );
}
