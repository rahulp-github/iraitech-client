import React from "react";
import { Route, Redirect } from "react-router-dom";
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/


export default function ProtectedRoute ({ component,isAuthenticated, ...rest }){

  // Protected Route Handling
  let Component = component;
  return (
    <Route {...rest}
      render={(props) => {
        if (isAuthenticated) return <Component {...props} {...rest} />;
        if (!isAuthenticated)
          return (
            <Redirect to={{path: "/" }} />
          );
      }}
    />
  );
};