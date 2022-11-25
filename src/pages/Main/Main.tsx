import React, { Fragment, useCallback } from 'react';
import { useSDK } from '@projectproxima/plugin-sdk';
import { Stub } from '@/components/Stub';

export const Main: React.FC = () => {
  const sdk = useSDK();

  const handleClick = useCallback(() => {
    sdk.sendAction('openIssuePanel', { issue: 11223 }).then(() => {
      console.info('Issue panel is opened');
    });
  }, [sdk]);

  return (
    <Fragment>
      <Stub />
      <button onClick={handleClick}>Open issue panel</button>
    </Fragment>
  );
};
