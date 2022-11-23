import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '@osui/page-header';
import { Logo } from '@/components/Logo';
import cx from './PageStub.less';
import { StubText } from '../StubText';

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
        <StubText />
      </div>
    </div>
  );
}
