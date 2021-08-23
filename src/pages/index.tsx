import { A, H1, H2, Layout, P } from 'components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import mixpanel from 'mixpanel-browser';
import React, { FC } from 'react';

type CategoryLinkProps = {
  id: string;
  name: string;
  imagePath: string;
};

const CategoryLink: FC<CategoryLinkProps> = ({ id, name, imagePath }) => (
  <Link to={`/categories/${id}`}>
    <div
      className="h-44 sm:h-52 lg:h-58 xl:h-72 2xl:h-96 flex bg-center bg-cover cursor-pointer"
      style={{
        backgroundImage: `url('${imagePath}')`,
      }}>
      <label className="text-lg bg-black font-bold text-white text-shadow md:text-xl self-end px-2 py-1 select-none">
        {name}
      </label>
    </div>
  </Link>
);

const HomePage: FC = () => {
  return (
    <Layout title="Home">
      <header className="mb-4 lg:float-left lg:w-80 lg:mr-6 overflow-y-auto">
        <StaticImage
          src="../../static/images/luis.png"
          alt="Luis Baptiste"
          className="rounded-full shadow-inner ml-3 lg:ml-0 float-right lg:float-none"
          width={132}
        />
        <div>
          <H1>Luis Baptiste</H1>
          <P>
            Hello! I am a contractor and woodworking professional with formal
            training in architecture. I am also a proud father and grandfather.
          </P>
          <P className="mb-4">
            Contact me at{' '}
            <A
              title="Email me"
              href="mailto:luis.baptiste@protonmail.com"
              className="whitespace-nowrap"
              onClick={() => {
                mixpanel.track('press_email_me');
              }}>
              luis.baptiste@protonmail
            </A>{' '}
            or{' '}
            <A
              title="Call me"
              href="tel:123-456-7890"
              className="whitespace-nowrap"
              onClick={() => {
                mixpanel.track('press_call_me');
              }}>
              123-456-7890
            </A>
            .
          </P>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <CategoryLink
          id="sample-category"
          name="Home Remodeling"
          imagePath="/images/home-remodeling.jpg"
        />
        <CategoryLink
          id="sample-category"
          name="Woodwork"
          imagePath="/images/woodwork.png"
        />
        <CategoryLink
          id="sample-category"
          name="Floorplans"
          imagePath="/images/floorplans.jpg"
        />
        <CategoryLink
          id="sample-category"
          name="Bio"
          imagePath="/images/category-sample.jpg"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
