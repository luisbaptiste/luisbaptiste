import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

type NativeElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1: FC<NativeElementProps> = ({ className, ...props }) => (
  <h1 className={`text-2xl mt-2 mb-4 ${className}`} {...props} />
);

const H2: FC<NativeElementProps> = ({ className, ...props }) => (
  <h2 className={`text-xl text-center mb-2 ${className}`} {...props} />
);

const P: FC<NativeElementProps> = ({ className, ...props }) => (
  <p className={`mt-4 mb-6 text-sm ${className}`} {...props} />
);

export { H1, H2, P };
