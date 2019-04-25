import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "../components/notfound"
import Home from "../components/home"
import Resume from "../components/resume"
import Videos from "../components/videos"

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/videos" component={Videos}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}