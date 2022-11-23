import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '@osui/page-header';
import { StubContent } from '../StubContent';
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
      <StubContent className={cx('StubPage__content')} />
    </div>
  );
}
