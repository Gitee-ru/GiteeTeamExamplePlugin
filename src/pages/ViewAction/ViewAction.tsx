import React, { ReactElement, useCallback } from 'react';
import Button from '@osui/button';
import message from '@osui/message';
import { IT1Icon } from '@/components/IT1Icon';
import { StubContent } from '@/components/StubContent';
import cx from './ViewAction.less';

export function ViewAction(): ReactElement {
  const handleClick = useCallback(() => {
    message.info({ content: <StubContent />, duration: 0 });
  }, []);

  return (
    <Button className={cx('ViewActionButton')} icon={<IT1Icon />} onClick={handleClick}>
      IT-One view action
    </Button>
  );
}
