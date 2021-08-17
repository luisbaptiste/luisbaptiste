import 'styles/global.css';

import { H1, Layout, P } from 'components';
import { Link } from 'gatsby';
import React, { FC } from 'react';

type CategoryLinkProps = {
  id: string;
  name: string;
};

const CategoryLink: FC<CategoryLinkProps> = ({ id, name }) => (
  <Link to={`/categories/${id}`}>
    <div className="h-44 border-black border-2 flex">
      <div className="text-2xl self-end pl-3 pb-3">{name}</div>
    </div>
  </Link>
);

const HomePage: FC = () => {
  return (
    <Layout title="Home">
      <header>
        <img src="https://picsum.photos/138" className="rounded-full" />
        <H1>Luis Baptiste</H1>
        <P>
          Hello! I am a contract and woodworking professional with training in
          architecture. I am also a proud father and grandfather.
        </P>
        <P>
          Contact me at{' '}
          <a title="Email me" href="mailto:luis.baptiste@protonmail.com">
            luis.baptiste@protonmail
          </a>{' '}
          or{' '}
          <a title="Call me" href="tel:123-456-7890">
            123-456-7890
          </a>
          .
        </P>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CategoryLink id="sample-category" name="Home Remodeling" />
        <CategoryLink id="sample-category" name="Woodwork" />
        <CategoryLink id="sample-category" name="Floorplans" />
        <CategoryLink id="sample-category" name="Bio" />
      </div>
    </Layout>
  );
};

export default HomePage;
