import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from 'react';

const H1: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h1 className={`text-2xl mt-2 mb-5 ${className}`} {...props} />
);

const H2: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h2 className={`text-xl text-center mb-2 ${className}`} {...props} />
);

const P: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ className, ...props }) => (
  <p className={`mt-4 mb-6 text-sm ${className}`} {...props} />
);

const A: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ className, ...props }) => (
  <a className={`underline underline-offset-2 ${className}`} {...props} />
);

export { A, H1, H2, P };
