/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import mixpanel from 'mixpanel-browser';

export const onClientEntry = () => {
  mixpanel.init('5d1c6a4cecbc07ac15737c089faec7b7');
};

export const onRouteUpdate = ({ location }) => {
  mixpanel.track('Page View', { path: location.path });
};
