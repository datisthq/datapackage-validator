import { type RouteConfig, route } from "@react-router/dev/routes"

const routes: RouteConfig = []

routes.push(route("/", "home/route.tsx"))

export default routes
