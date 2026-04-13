import { observer } from "mobx-react-lite";
import { NewsView } from "../views/newsView.jsx";

const News = observer(function News({ model }) {
  return <NewsView news={model.news} />;
});

export { News };
