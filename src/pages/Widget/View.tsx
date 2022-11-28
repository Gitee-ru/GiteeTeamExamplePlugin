import React, { ReactElement } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Stub } from '@/components/Stub';

export interface ViewProps {
  foo?: string;
}

export function View(props: ViewProps): ReactElement {
  console.info('widget view props', props);
  return (
    <AppLayout>
      <Stub />
    </AppLayout>
  );
}
