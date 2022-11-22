import React, { ReactElement } from 'react';
import logoPath from './it-one-logo.png';
import cx from './Logo.less';

export interface LogoProps {
  className?: string;
}

export function Logo(props: LogoProps): ReactElement {
  return <img className={[cx('Logo'), props.className].filter(Boolean).join(' ')} src={logoPath} />;
}
