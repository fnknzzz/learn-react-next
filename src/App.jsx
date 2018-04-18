import React from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Portal from './Portal'
import Fragment from './Fragment'
import GetDerivedStateFromProps from './GetDerivedStateFromProps'
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate'
import Context from './Context'
import Ref from './Ref'
import ForwardRef from './ForwardRef'

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
    }, {
        Component: Fragment,
        title: 'Fragment'
    }, {
        Component: GetDerivedStateFromProps,
        title: 'getDerivedStateFromProps'
    }, {
        Component: GetSnapshotBeforeUpdate,
        title: 'getSnapshotBeforeUpdate'
    }, {
        Component: Context,
        title: 'Context'
    }, {
        Component: Ref,
        title: 'Ref'
    }, {
        Component: ForwardRef,
        title: 'ForwardRef'
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
                                    <div className='content'>
                                        <div className="view">
                                            <Component />
                                        </div>
                                    </div>
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