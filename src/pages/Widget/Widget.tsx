import React, { ReactElement } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Stub } from '@/components/Stub';

export function Widget(): ReactElement {
  return (
    <AppLayout>
      <Stub />
    </AppLayout>
  );
}
