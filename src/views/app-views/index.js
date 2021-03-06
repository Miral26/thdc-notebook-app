import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { APP_PREFIX_PATH } from "config/AppConfig"

export const AppViews = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/claims`} component={lazy(() => import(`./claims`))} />
                <Route path={`${APP_PREFIX_PATH}/payments`} component={lazy(() => import(`./payments`))} />
                <Route path={`${APP_PREFIX_PATH}/patients`} component={lazy(() => import(`./patients`))} />
                <Route path={`${APP_PREFIX_PATH}/users`} component={lazy(() => import(`./users`))} />
                <Route path={`${APP_PREFIX_PATH}/locations`} component={lazy(() => import(`./locations`))} />
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/claims`} />
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews)
