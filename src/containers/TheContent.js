import React, { Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { CFade, CRow } from "@coreui/react";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <CFade>
                      <CRow
                        className={`no-gutters vh-100 ${
                          (["/signup", "plans"].includes(pathname) &&
                            "bg-clr-pink") ||
                          "bg-white"
                        }`}
                      >
                        <route.component {...props} />
                      </CRow>
                    </CFade>
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/signup" />
        </Switch>
      </Suspense>
    </main>
  );
};

export default React.memo(TheContent);
