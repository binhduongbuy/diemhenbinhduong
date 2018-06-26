import ReactGA from 'react-ga';
ReactGA.initialize('UA- here');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
