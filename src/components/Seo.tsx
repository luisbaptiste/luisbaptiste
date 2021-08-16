import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export type SeoProps = {
  title: string;
};

const Seo: FC<SeoProps> = memo(({ title }) => {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
        lang: string;
      };
    };
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `,
  );

  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `${defaultTitle} | %s` : undefined}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ]}
    />
  );
});

export { Seo };
