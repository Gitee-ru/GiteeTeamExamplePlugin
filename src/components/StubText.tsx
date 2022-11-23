import React, { ReactElement } from 'react';

export function StubText(): ReactElement {
  return (
    <div>
      This is example panel to show ability to extend UI by additional plugins. If this panel/button
      is not desired in the current workspace, please ask you administration to disable
      ExamplePlugin from workspace or globally.
    </div>
  );
}
