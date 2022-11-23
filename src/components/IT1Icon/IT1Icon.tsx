import React, { ReactElement } from 'react';
import iconPath from './it1icon.png';
import cx from './IT1Icon.less';

export interface IT1IconProps {
  className?: string;
}

export function IT1Icon(props: IT1IconProps): ReactElement {
  return (
    <img className={[cx('IT1Icon'), props.className].filter(Boolean).join(' ')} src={iconPath} />
  );
}
