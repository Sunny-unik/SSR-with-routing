import Home from "../client/components/Home.jsx";
import Grid from "../client/components/Grid.jsx";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/popular/:id",
    component: Grid,
  },
];

export default routes;
