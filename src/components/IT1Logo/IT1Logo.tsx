import React, { ReactElement } from 'react';
import logoPath from './it1logo.png';
import cx from './IT1Logo.less';

export interface IT1LogoProps {
  className?: string;
}

export function IT1Logo(props: IT1LogoProps): ReactElement {
  return (
    <img className={[cx('IT1Logo'), props.className].filter(Boolean).join(' ')} src={logoPath} />
  );
}
