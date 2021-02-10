import React from 'react';

import DOMPurify from 'dompurify';
import marked from 'marked';

import { PREVIEWER } from '../App';

import WindowHeader from '../components/WindowHeader';

const Previewer = props => {
  const styles = {
    container: {
      width: props.isMaximized ? '95vw' : 800,
      backgroundColor: '#C0D8D8',
      height: props.isMaximized ? '95vh' : 'auto',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: props.isEnabled ? 'block' : 'none',
      boxShadow: '1px 1px 10px 2px #3a5f5f',
      border: '1px solid #1d2f2f',
    },
    outputContainer: {
      width: '100%',
      height: props.isMaximized ? 'calc(100% - 27px)' : 'auto',
      minHeight: 150,
      textAlign: 'left',
      padding: 5
    },
  };

  const dirtyHtml = marked(props.markdownText);
  const cleanHtml = DOMPurify.sanitize( dirtyHtml, {USE_PROFILES: {html: true}} );

  return (
    <div style={styles.container}>
      <WindowHeader
        headerText="Previewer"
        isMaximized={props.isMaximized}
        onIconClick={props.onIconClick.bind(this, PREVIEWER)}
      />
      <div style={styles.outputContainer}>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>
    </div>
  );
};

export default Previewer;
