import { observer } from "mobx-react-lite";
import { ResearchView } from "../views/researchView.jsx";

const Research = observer(function Research({ model }) {
  const sorted = [...model.publications].sort((a, b) => b.year - a.year);
  return <ResearchView researchBio={model.researchBio} publications={sorted} scholar={model.links?.scholar} />;
});

export { Research };
