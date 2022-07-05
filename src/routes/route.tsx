import { Route, PathRouteProps } from "react-router-dom";

const CustomRoute = (props: PathRouteProps) => {
  return <Route {...props} />;
};

export default CustomRoute;
