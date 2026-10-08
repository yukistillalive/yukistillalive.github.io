import { PublicationsView } from "./publicationsView.jsx";

export function ResearchView({ researchBio, publications, scholar }) {
  return (
    <div className="research-page">
      <p className="section-label">Research</p>
      {researchBio && <p className="research-bio">{researchBio}</p>}
      <PublicationsView publications={publications} />
      {scholar && (
        <p className="research-scholar">
          See also my <a className="bio-blog-link" href={scholar} target="_blank" rel="noreferrer">Google Scholar</a> profile.
        </p>
      )}
    </div>
  );
}
