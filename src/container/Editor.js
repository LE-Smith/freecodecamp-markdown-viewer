import React from 'react';

import { EDITOR } from '../App';

import WindowHeader from '../components/WindowHeader';

const Editor = props => {
  const styles = {
    container: {
      width: props.isMaximized ? '95vw' : 500,
      backgroundColor: '#C0D8D8',
      height: props.isMaximized ? '95vh' : 'auto',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: props.isEnabled ? 'block' : 'none',
      boxShadow: '1px 1px 10px 2px #3a5f5f',
      border: '1px solid #1d2f2f',
    },
  };

  return (
    <div style={styles.container}>
      {/* <Window
        headerText="Editor"
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick.bind(this, EDITOR)}
      /> */}
      <WindowHeader
        headerText="Editor"
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick.bind(this, EDITOR)}
      />
    </div>
  );
};

export default Editor;
