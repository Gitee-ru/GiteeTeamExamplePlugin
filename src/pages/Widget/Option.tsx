import React, { ReactElement } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Stub } from '@/components/Stub';

export interface OptionProps {
  foo?: string;
}

export function Option(props: OptionProps): ReactElement {
  console.info('widget option props', props);
  return (
    <AppLayout>
      <Stub />
    </AppLayout>
  );
}
