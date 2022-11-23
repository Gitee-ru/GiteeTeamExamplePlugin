import React from 'react';
import Space from '@osui/space';
import { useSDK } from '@projectproxima/plugin-sdk';
import cx from './Main.less';
import { StubContent } from '@/components/StubContent';
import { DevHelper } from './DevHelper';

export const Main: React.FC = () => {
  const sdk = useSDK();

  const handleClick = () => {
    sdk.sendAction('openIssuePanel', { issue: 11223 }).then(() => {
      console.info('Issue panel is opened');
    });
  };

  const isDev = process.env.NODE_ENV === 'development';
  const Wrapper = isDev ? DevHelper : 'div';

  return (
    <Wrapper>
      <Space direction="vertical">
        <h2 className={cx('title')}>Demo</h2>
        <StubContent />
        <button onClick={handleClick}>Open issue panel</button>
      </Space>
    </Wrapper>
  );
};
