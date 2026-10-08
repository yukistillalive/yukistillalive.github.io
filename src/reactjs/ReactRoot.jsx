import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Home } from "./homePresenter.jsx";
import { Research } from "./researchPresenter.jsx";
import { Projects } from "./projectsPresenter.jsx";
import { Detail } from "./detailPresenter.jsx";
import { Blog } from "./blogPresenter.jsx";
import { BlogPost } from "./blogPostPresenter.jsx";

function MainContent({ model }) {
  return (
    <>
      <section id="about"        className="site-section"><Home         model={model} /></section>
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
          <Route path="/research"          element={<Research    model={model} />} />
          <Route path="/projects/:slug"    element={<Detail      model={model} />} />
          <Route path="/blog"              element={<Blog        model={model} />} />
          <Route path="/blog/:slug"        element={<BlogPost    model={model} />} />
        </Routes>
      </div>
    </div>
  );
});

export { ReactRoot };
