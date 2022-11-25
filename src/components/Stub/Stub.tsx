import React from 'react';
import { IT1Logo } from '@/components/IT1Logo';
import cx from './Stub.less';

export interface StubProps {
  className?: string;
}

export function Stub(props: StubProps): React.ReactElement {
  return (
    <div className={[cx('Stub', props.className)].filter(Boolean).join(' ')}>
      <IT1Logo />
      <div>
        This is example panel to show ability to extend UI by additional plugins. If this
        panel/button is not desired in the current workspace, please ask you administration to
        disable ExamplePlugin from workspace or globally.
      </div>
    </div>
  );
}
