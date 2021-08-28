import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { AUTH_PREFIX_PATH } from "config/AppConfig"

export const AuthViews = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import(`./authentication/login`))} />
                <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/login`} />
            </Switch>
        </Suspense>
    )
}

export default React.memo(AuthViews)
