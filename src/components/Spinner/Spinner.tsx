import React from 'react';
import { FlexBox } from '../core';

const Spinner = (): React.ReactElement => {
  return (
    <FlexBox align="center" justify="center" className="h-100 w-100">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </FlexBox>
  );
};

export default Spinner;
