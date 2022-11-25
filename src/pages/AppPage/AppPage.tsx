import React, { ReactElement } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Stub } from '@/components/Stub';

export function AppPage(): ReactElement {
  return (
    <AppLayout>
      <Stub />
    </AppLayout>
  );
}
