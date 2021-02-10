import React from 'react';

import { EDITOR } from '../App';

import WindowHeader from '../components/WindowHeader';

const Editor = props => {
  const styles = {
    windowContainer: {
      width: props.isMaximized ? '95vw' : 600,
      backgroundColor: '#C0D8D8',
      height: props.isMaximized ? '95vh' : 'auto',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: props.isEnabled ? 'block' : 'none',
      boxShadow: '1px 1px 10px 2px #3a5f5f',
      border: '1px solid #1d2f2f',
    },
    inputContainer: {
      width: '100%',
      height: props.isMaximized ? 'calc(100% - 27px)' : 200,
    },
    textArea: {
      width: '100%',
      height: '100%',
      padding: 5,
      backgroundColor: '#C0D8D8',
      outline: 'none',
      border: 'none',
    },
  };

  return (
    <div style={styles.windowContainer}>
      <WindowHeader
        headerText="Editor"
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick.bind(this, EDITOR)}
      />
      <div style={styles.inputContainer}>
        <textarea style={styles.textArea} onChange={props.onInputChange}></textarea>
      </div>
    </div>
  );
};

export default Editor;
