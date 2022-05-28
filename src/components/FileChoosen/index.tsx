import React from 'react';

type Props = {};

const FileChoosen = React.forwardRef(
  (
    {}: Props,
    ref: {
      [key: string]: React.Ref;
    }
  ) => {
    return <div>fileChoosen</div>;
  }
);
export default FileChoosen;
