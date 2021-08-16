import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

type NativeElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1: FC<NativeElementProps> = ({ className, ...props }) => (
  <h1 className={`text-8xl ${className}`} {...props} />
);

export { H1 };
