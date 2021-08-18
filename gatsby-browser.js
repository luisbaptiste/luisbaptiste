// https://www.gatsbyjs.com/docs/browser-apis/

import mixpanel from 'mixpanel-browser';

export const onClientEntry = () => {
  mixpanel.init('5d1c6a4cecbc07ac15737c089faec7b7');
};

export const onRouteUpdate = ({ location }) => {
  if (!location.host.includes('localhost')) {
    mixpanel.track('Page View', { path: location.pathname });
  }
};
