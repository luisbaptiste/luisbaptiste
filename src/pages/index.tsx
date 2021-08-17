import 'styles/global.css';

import { A, H1, Layout, P } from 'components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

type CategoryLinkProps = {
  id: string;
  name: string;
};

const CategoryLink: FC<CategoryLinkProps> = ({ id, name }) => (
  <Link to={`/categories/${id}`}>
    <div className="h-44 border-black border-2 flex">
      <div className="text-xl md:text-2xl self-end p-3">{name}</div>
    </div>
  </Link>
);

const HomePage: FC = () => {
  return (
    <Layout title="Home">
      <header className="lg:float-left lg:w-80 lg:mr-6">
        <StaticImage
          src="../images/luis.png"
          alt="Luis Baptiste"
          className="rounded-full overflow-hidden"
          width={140}
        />
        <H1>Luis Baptiste</H1>
        <P>
          Hello! I am a contractor and woodworking professional with training in
          architecture. I am also a proud father and grandfather.
        </P>
        <P>
          Contact me at{' '}
          <A
            title="Email me"
            href="mailto:luis.baptiste@protonmail.com"
            className="whitespace-nowrap">
            luis.baptiste@protonmail
          </A>{' '}
          or{' '}
          <A
            title="Call me"
            href="tel:123-456-7890"
            className="whitespace-nowrap">
            123-456-7890
          </A>
          .
        </P>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <CategoryLink id="sample-category" name="Home Remodeling" />
        <CategoryLink id="sample-category" name="Woodwork" />
        <CategoryLink id="sample-category" name="Floorplans" />
        <CategoryLink id="sample-category" name="Bio" />
      </div>
    </Layout>
  );
};

export default HomePage;
