import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from 'routes'
import { AppFooter } from './app_footer'
import { AppHeader } from './app_header'

export const App = () => {
    return (
        <div className='h-screen w-screen fixed top-0 left-0 right-0 bottom-0 app-gradient text-primary'>
            <AppHeader />
            <section className='mx-auto'>
                <Switch>
                    {routes.map(({ path, component }) => (
                        <Route exact key={path} path={path} component={component} />
                    ))}
                </Switch>
            </section>
            <AppFooter />
        </div>
    )
}
