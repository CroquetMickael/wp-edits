import React, { FunctionComponent, useContext } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { AuthContext, AppContextInterface } from "../../Common/AuthContext";

type Props = { component: FunctionComponent } & RouteComponentProps;

const ProtectedRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  const AuthValues: AppContextInterface = useContext(AuthContext);
  return (
    <>
      {AuthValues.isAuth ? (
        <Component {...rest} />
      ) : (
        <Redirect from="" to="/" noThrow />
      )}
    </>
  );
};

const PublicRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

export { PublicRoute, ProtectedRoute };
