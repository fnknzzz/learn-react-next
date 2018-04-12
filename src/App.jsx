import React from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Portal from './Portal'


export default class App extends React.Component {
    state = {
        current: 0
    }
    lists = [{
        Component: ErrorBoundary,
        title: 'ErrorBoundary'
    }, {
        Component: Portal,
        title: 'Portal'
    }]
    render() {
        return (
            <Router>
                <div className='root'>
                    <aside>
                        { this.lists.map(({title}) => (
                            <div key={title} className='list'>
                                <Link to={'/' + title}>{title}</Link>
                            </div>
                        )) }
                    </aside>
                    <article>
                        <Switch>
                            { this.lists.map(({Component, title}) => (
                                <Route path={'/' + title} key={title}>
                                    <Component />
                                </Route>
                            )) }
                            <Redirect to={'/' + this.lists[0].title}/>
                        </Switch>
                    </article>
                </div>
            </Router>
        )
    }
}