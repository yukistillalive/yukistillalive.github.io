import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Home } from "./homePresenter.jsx";
import { Publications } from "./publicationsPresenter.jsx";
import { Projects } from "./projectsPresenter.jsx";
import { News } from "./newsPresenter.jsx";
import { Detail } from "./detailPresenter.jsx";

function MainContent({ model }) {
  return (
    <>
      <section id="about"        className="site-section"><Home         model={model} /></section>
      <div className="parallel-sections">
        <section id="publications" className="site-section"><Publications model={model} /></section>
        <section id="news"         className="site-section"><News         model={model} /></section>
      </div>
      <section id="projects"     className="site-section"><Projects     model={model} /></section>
    </>
  );
}

const ReactRoot = observer(function ReactRoot({ model }) {
  return (
    <div className="site-layout">
      <Sidebar model={model} />
      <div className="main-scroll">
        <Routes>
          <Route path="/"                  element={<MainContent model={model} />} />
          <Route path="/projects/:slug"    element={<Detail      model={model} />} />
        </Routes>
      </div>
    </div>
  );
});

export { ReactRoot };
