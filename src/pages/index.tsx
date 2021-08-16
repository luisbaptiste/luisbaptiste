import React, { FC } from 'react';

import { H1, Layout, Seo } from 'components';

import 'styles/global.css';

const Tile: FC = () => (
  <img
    src={`http://lorempixel.com/640/480/?x=${Math.round(
      Math.random() * 10000000000,
    )}`}
  />
);

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Luis Baptiste" />
    <H1 className="text-blue-500">Hello.</H1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  </Layout>
);

export default IndexPage;
