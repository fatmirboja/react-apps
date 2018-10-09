import React from 'react'
import {Route, Link} from 'react-router-dom'
import Topic from './Topic'

export default function Topics({match}) {
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with react</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
                </li>
            </ul>

            <hr/>

            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )}/>
        </div>
    )
}