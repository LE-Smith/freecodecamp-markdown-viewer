import React, { useState } from 'react';
import './App.css';

import Editor from './container/Editor';
import Previewer from './container/Previewer';

export const NONE = 'NONE';
export const EDITOR = 'EDITOR';
export const PREVIEWER = 'PREVIEWER';

function App() {
  const [maximizedWindow, setMaximizedWindow] = useState(NONE);
  const [markdownInput, setMarkdownInput] = useState('');

  const styles = {
    body: {
      paddingBottom: 20,
      backgroundColor: '#87B5B5',
      height: '100%',
      width: '100vw',
      position: 'absolute',
    },
  };

  const onIconClickHandler = clickedWindow => {
    if (clickedWindow === EDITOR && maximizedWindow !== EDITOR) {
      setMaximizedWindow(EDITOR);
    } else if (clickedWindow === PREVIEWER && maximizedWindow !== PREVIEWER) {
      setMaximizedWindow(PREVIEWER);
    } else {
      setMaximizedWindow(NONE);
    }
  };

  const onInputChangeHandler = event => {
    setMarkdownInput(event.target.value);
  }

  return (
    <div className="App" style={styles.body}>
      <Editor
        onIconClick={onIconClickHandler}
        onInputChange={onInputChangeHandler}
        isMaximized={maximizedWindow === EDITOR}
        isEnabled={maximizedWindow === NONE || maximizedWindow === EDITOR}
      />
      <Previewer
        onIconClick={onIconClickHandler}
        isMaximized={maximizedWindow === PREVIEWER}
        isEnabled={
          maximizedWindow === NONE || maximizedWindow === PREVIEWER
        }
        markdownText={markdownInput}
      />
    </div>
  );
}

export default App;
