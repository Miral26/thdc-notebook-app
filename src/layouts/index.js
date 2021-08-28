import React from "react"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import AppLayout from "layouts/app-layout"
import AuthLayout from "layouts/auth-layout"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "config/AppConfig"

function RouteInterceptor({
    children,
    isAuthenticated,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: AUTH_PREFIX_PATH,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export const Layout = (props) => {
    const { location } = props
    const token = localStorage.getItem('token')

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={APP_PREFIX_PATH} />
            </Route>
            <Route path={AUTH_PREFIX_PATH}>
                <AuthLayout />
            </Route>
            <RouteInterceptor path={APP_PREFIX_PATH} isAuthenticated={token}>
                <AppLayout location={location} />
            </RouteInterceptor>
            {/* <Route path={PUBLIC_PREFIX_PATH}>
                <PublicLayout />
            </Route> */}
        </Switch>
    )
}

export default withRouter(Layout)
