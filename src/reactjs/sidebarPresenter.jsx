import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { SidebarView } from "../views/sidebarView.jsx";

const SECTIONS = ["about", "news", "projects", "publications"];

const Sidebar = observer(function Sidebar({ model }) {
  const [active, setActive] = useState("about");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    function onScroll() {
      const scrollY = window.scrollY + 120;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return <SidebarView name={model.name} active={active} email={model.email} links={model.links} isHome={isHome} pathname={location.pathname} />;
});

export { Sidebar };
