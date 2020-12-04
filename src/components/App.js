import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import Header from './Header/Header';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);

const AsyncSearchPage = lazy(() =>
  import('../pages/SearchPage/SearchPage' /* webpackChunkName: "MoviesPage" */),
);

const AsyncTrackDetailsPage = lazy(() =>
  import(
    '../pages/TrackDetailsPage/TrackDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
          <Switch>
            <Route path={routes.home} exact component={AsyncHomePage} />
            <Route path={routes.search} component={AsyncSearchPage} />
            <Route
              path={routes.trackDetails}
              exact
              component={AsyncTrackDetailsPage}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
