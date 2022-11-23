import React from 'react';
import { IT1Logo } from '@/components/IT1Logo';
import { StubText } from '../StubText';
import cx from './StubContent.less';

export interface StubContentProps {
  className?: string;
}

export function StubContent(props: StubContentProps): React.ReactElement {
  return (
    <div className={[cx('StubContent', props.className)].filter(Boolean).join(' ')}>
      <IT1Logo />
      <StubText />
    </div>
  );
}
