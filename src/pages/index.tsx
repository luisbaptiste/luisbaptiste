import 'styles/global.css';

import { Layout } from 'components';
import { Link } from 'gatsby';
import React, { FC } from 'react';

type CategoryLinkProps = {
  id: string;
  name: string;
};

const CategoryLink: FC<CategoryLinkProps> = ({ id, name }) => (
  <Link to={`/categories/${id}`}>
    <div className="h-64 border-black border-2 flex justify-center">
      <span className="self-center font-bold">{name}</span>
    </div>
  </Link>
);

const HomePage: FC = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryLink id="sample-category" name="Sample Category" />
        <CategoryLink id="sample-category" name="Sample Category" />
        <CategoryLink id="sample-category" name="Sample Category" />
        <CategoryLink id="sample-category" name="Sample Category" />
        <CategoryLink id="sample-category" name="Sample Category" />
        <CategoryLink id="sample-category" name="Sample Category" />
      </div>
    </Layout>
  );
};

export default HomePage;
