import { observer } from "mobx-react-lite";
import { HomeView } from "../views/homeView.jsx";

const Home = observer(function Home({ model }) {
  return <HomeView model={model} />;
});

export { Home };
