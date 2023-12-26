import Home from "../client/components/Home.jsx";
import Grid from "../client/components/Grid.jsx";
import { fetchPopularRepos } from "../shared/githubAPI.js";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/popular/:id",
    component: Grid,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop()),
  },
];

export default routes;
