import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { APP_PREFIX_PATH } from "config/AppConfig"

export const AppViews = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/claims`} component={lazy(() => import(`./claims`))} />
                <Route path={`${APP_PREFIX_PATH}/payments`} component={lazy(() => import(`./payments`))} />
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/claims`} />
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews)
