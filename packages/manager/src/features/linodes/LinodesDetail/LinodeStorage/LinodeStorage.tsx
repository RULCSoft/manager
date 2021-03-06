import * as React from 'react';
import LinodeDisks from '../LinodeAdvanced/LinodeDisks_CMR';
import LinodeVolumes from 'src/features/linodes/LinodesDetail/LinodeAdvanced/LinodeVolumes';

export const LinodeStorage: React.FC = () => {
  return (
    <>
      <LinodeDisks />
      <LinodeVolumes />
    </>
  );
};

export default LinodeStorage;
