import { observer } from "mobx-react-lite";
import { BlogView } from "../views/blogView.jsx";

const Blog = observer(function Blog({ model }) {
  return <BlogView posts={model.blog} />;
});

export { Blog };
