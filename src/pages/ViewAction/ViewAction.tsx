import React, { ReactElement, useCallback } from 'react';
import Button from '@osui/button';
import message from '@osui/message';
import { AppLayout } from '@/components/AppLayout';
import { IT1Icon } from '@/components/IT1Icon';
import { Stub } from '@/components/Stub';
import cx from './ViewAction.less';

export function ViewAction(): ReactElement {
  const handleClick = useCallback(() => {
    message.info({ content: <Stub />, duration: 0 });
  }, [message]);

  return (
    <AppLayout>
      <Button className={cx('ViewActionButton')} icon={<IT1Icon />} onClick={handleClick}>
        IT-ONE view action
      </Button>
    </AppLayout>
  );
}
