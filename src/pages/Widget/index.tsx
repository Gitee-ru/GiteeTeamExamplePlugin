import { ReactElement } from 'react';
import { Option } from './Option';
import { View } from './View';

export { Option, View };

export default function Widget(): ReactElement {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '2 1 0' }}>
        <View />
      </div>
      <div style={{ flex: '1 1 0' }}>
        <Option />
      </div>
    </div>
  );
}
