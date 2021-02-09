import React from 'react';

import { EDITOR } from '../App';

import Window from '../components/Window';

const Editor = props => {
  const styles = {
    container: {
      width: props.isMaximized ? '95vw' : 500,
      backgroundColor: '#C0D8D8',
      height: props.isMaximized ? '95vh' : 'auto',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: props.isEnabled ? 'block' : 'none'
    },
  };

  return (
    <div style={styles.container}>
      <Window
        headerText="Editor"
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick.bind(this, EDITOR)}
      />
    </div>
  );
};

export default Editor;
