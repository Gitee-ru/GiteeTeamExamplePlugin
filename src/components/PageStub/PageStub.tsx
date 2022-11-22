import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '@osui/page-header';
import { Logo } from '@/components/Logo';
import cx from './PageStub.less';

export interface PageStubProps {
  title: string;
}

export function PageStub(props: PageStubProps): ReactElement {
  const history = useHistory();
  const isDev = process.env.NODE_ENV === 'development';
  const back = useCallback(() => history.goBack(), [history]);
  return (
    <div>
      <PageHeader title={props.title} onBack={isDev ? back : undefined} />
      <div className={cx('Stub')}>
        <Logo />
        <div>
          This is example panel to show ability to extend UI by additional plugins. If this
          panel/button is not desired in the current workspace, please ask you administration to
          disable ExamplePlugin from workspace or globally.
        </div>
      </div>
    </div>
  );
}
