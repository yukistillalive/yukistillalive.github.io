import { observer } from "mobx-react-lite";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Home } from "./homePresenter.jsx";
import { Publications } from "./publicationsPresenter.jsx";
import { Projects } from "./projectsPresenter.jsx";
import { News } from "./newsPresenter.jsx";

const ReactRoot = observer(function ReactRoot({ model }) {
  return (
    <div className="site-layout">
      <Sidebar model={model} />
      <div className="main-scroll">
        <section id="about"        className="site-section"><Home         model={model} /></section>
        <div className="parallel-sections">
          <section id="publications" className="site-section"><Publications model={model} /></section>
          <section id="news"         className="site-section"><News         model={model} /></section>
        </div>
        <section id="projects"     className="site-section"><Projects     model={model} /></section>      
      </div>
    </div>
  );
});

export { ReactRoot };
