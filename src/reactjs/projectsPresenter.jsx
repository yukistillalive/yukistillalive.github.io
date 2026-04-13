import { observer } from "mobx-react-lite";
import { ProjectsView } from "../views/projectsView.jsx";

const Projects = observer(function Projects({ model }) {
  return <ProjectsView projects={model.projects} />;
});

export { Projects };
