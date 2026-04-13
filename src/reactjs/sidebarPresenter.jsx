import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { SidebarView } from "../views/sidebarView.jsx";

const SECTIONS = ["about", "news", "projects", "publications"];

const Sidebar = observer(function Sidebar({ model }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
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
  }, []);

  return <SidebarView name={model.name} active={active} email={model.email} links={model.links} />;
});

export { Sidebar };
