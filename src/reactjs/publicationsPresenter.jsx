import { observer } from "mobx-react-lite";
import { PublicationsView } from "../views/publicationsView.jsx";

const Publications = observer(function Publications({ model }) {
  const sorted = [...model.publications].sort((a, b) => b.year - a.year);
  return <PublicationsView publications={sorted} />;
});

export { Publications };
