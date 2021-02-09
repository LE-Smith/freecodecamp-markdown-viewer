import React from 'react';

import WindowHeader from './WindowHeader';
import marked from 'marked';

const Window = props => {
  const styles = {
    main: {
      display: 'block',
      boxShadow: '1px 1px 10px 2px #3a5f5f',
      height: '100%',
      border: '1px solid #1d2f2f',
    },
  };

  return (
    <div className="window" style={styles.main}>
      <WindowHeader
        headerText={props.headerText}
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick}
      />
      {marked('# Marked in browser\n\nRendered by **marked**.')};
    </div>
  );
};

export default Window;
