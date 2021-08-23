import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from 'react';

const H1: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h1 className={`text-2xl mt-2 mb-5 font-bold ${className}`} {...props} />
);

const H2: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h2
    className={`text-md font-bold text-gray-500 mb-4 ${className}`}
    {...props}
  />
);

const H3: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h3 className={`text-xl ${className}`} {...props} />
);

const P: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ className, ...props }) => (
  <p className={`my-4 text-sm ${className}`} {...props} />
);

const A: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ className, ...props }) => (
  <a
    className={`underline underline-offset-1 text-gray-500 ${className}`}
    {...props}
  />
);

const FinePrint: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
> = ({ className, ...props }) => (
  <span className={`text-xs text-gray-500 ${className}`} {...props} />
);

export { A, FinePrint, H1, H2, H3, P };
