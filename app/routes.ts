import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("mission", "routes/mission.tsx"),
  route("projects", "routes/projects.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
