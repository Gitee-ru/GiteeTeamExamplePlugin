import React from 'react';
import { IT1Logo } from '@/components/IT1Logo';
import cx from './Stub.less';

export interface StubProps {
  className?: string;
}

export const stubText =
  'This is example panel to show ability to extend UI by additional plugins. If this panel/button is not desired in the current workspace, please ask you administration to disable ExamplePlugin from workspace or globally.';

export function Stub(props: StubProps): React.ReactElement {
  return (
    <div className={[cx('Stub', props.className)].filter(Boolean).join(' ')}>
      <IT1Logo />
      <div>{stubText}</div>
    </div>
  );
}
