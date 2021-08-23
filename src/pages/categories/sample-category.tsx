import { H2, H3, Layout, P } from 'components';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

const SampleProject: FC = () => (
  <div className="max-w-3xl m-auto pb-10 mb-6 border-b border-gray-300">
    <H3>Sample Project</H3>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium leo
      in justo tincidunt mollis. Nulla eu enim a lacus dictum auctor nec non
      risus. Etiam tristique quis lorem et ultricies.
    </P>
    <StaticImage
      src="../../../static/images/project-sample.png"
      alt="Sample Project"
      className="m-auto"
    />
  </div>
);

const SampleCategory: FC = () => {
  return (
    <Layout title="Sample Category">
      <H2 className="max-w-3xl m-auto">Sample Category</H2>
      <SampleProject />
      <SampleProject />
      <SampleProject />
      <SampleProject />
      <SampleProject />
      <SampleProject />
    </Layout>
  );
};

export default SampleCategory;
