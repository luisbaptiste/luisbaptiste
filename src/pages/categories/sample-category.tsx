import { H2, Layout } from 'components';
import { Link } from 'gatsby';
import React, { FC } from 'react';

type ProjectLinkProps = {
  id: string;
  name: string;
};

const ProjectLink: FC<ProjectLinkProps> = ({ id, name }) => (
  <Link to={`/projects/${id}`}>
    <div className="h-64 border-black border-2 flex justify-center">
      <span className="self-center font-bold">{name}</span>
    </div>
  </Link>
);

const SampleCategory: FC = () => {
  return (
    <Layout title="Sample Category">
      <H2>Sample Category</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectLink id="sample-project" name="Sample Project" />
        <ProjectLink id="sample-project" name="Sample Project" />
        <ProjectLink id="sample-project" name="Sample Project" />
      </div>
    </Layout>
  );
};

export default SampleCategory;
