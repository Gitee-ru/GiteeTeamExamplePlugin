import React, { ReactElement, useCallback } from 'react';
import { Button, message } from 'antd';
import { AppLayout } from '@/components/AppLayout';
import { IT1Icon } from '@/components/IT1Icon';
import { stubText } from '@/components/Stub';
import cx from './ViewAction.less';

export function ViewAction(): ReactElement {
  const handleClick = useCallback(() => {
    alert(stubText);
  }, [message]);

  return (
    <AppLayout>
      <Button className={cx('ViewActionButton')} icon={<IT1Icon />} onClick={handleClick}>
        IT-ONE view action
      </Button>
    </AppLayout>
  );
}
