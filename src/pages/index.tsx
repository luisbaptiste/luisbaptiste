import React, { FC } from 'react';

import { H1, Layout } from 'components';

import 'styles/global.css';

const Tile: FC = () => (
  <img
    src={`http://lorempixel.com/640/480/?x=${Math.round(
      Math.random() * 10000000000,
    )}`}
  />
);

const HomePage: FC = () => (
  <Layout title="Home">
    <H1 className="text-blue-600">Luis Baptiste</H1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      <Tile />
      <Tile />
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

export default HomePage;
