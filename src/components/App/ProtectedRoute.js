import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Movies/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoaded } = React.useContext(CurrentUserContext);
  if (!isLoaded) return <Preloader />;
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRoute;
